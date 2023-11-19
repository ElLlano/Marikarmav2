// @ts-nocheck
'use strict';

/**
 * A set of functions called "actions" for `marikarma`
*/


module.exports = {
  async getAiResponse(ctx, next) {

    //CLIENTS
    var OpenAI = require('openai');
    const fs = require('fs');
    const path = require('path');


    const openaiClient = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY
    });

    //BODY REST
    const { prompt, username } = ctx.request.body;

    const response = await openaiClient.completions.create({
      model: "gpt-3.5-turbo-instruct",
      prompt: `${prompt}`,
      max_tokens: 100,
      temperature: 0.1
    })

    console.log('Respuesta IA', response.choices[0].text);

    const tts = await synthesizeTextToSpeech(response.choices[0].text);

    //Le paso el usuario y el audio al servicio media
    strapi.service('api::media.media').createNewMedia(ctx.state.user, tts[0].audioContent);

    ctx.send({
      message: 'Procesando audio, en unos minutos estará disponible en tu panel'
    })
  }
};

async function synthesizeTextToSpeech(text) {
  const textToSpeech = require('@google-cloud/text-to-speech');
  try {
    const client = new textToSpeech.TextToSpeechClient({
      credentials: {
        private_key: process.env.SST_KEY.replace(/\\n/g, '\n').trim(),
        client_email: process.env.SST_EMAIL,
      }
    });

    const request = {
      input: { text: text },
      voice: { languageCode: 'es-ES', name: 'es-ES-Polyglot-1' },
      audioConfig: { audioEncoding: 'MP3' },
    };

    const tts = client.synthesizeSpeech(request);
    return tts;
  } catch (error) {
    console.error("Error en la solicitud de Text to Speech:", error);
    return null;
  }
}


