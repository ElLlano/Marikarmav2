// @ts-nocheck
'use strict';
//https://www.npmjs.com/package/backblaze-b2
const B2 = require('backblaze-b2');

/**
 * media service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::media.media', ({ strapi }) => ({

  async createNewMedia(user, audio) {

    try {
      const currentDate = new Date();
      const stringDateName = currentDate.toISOString().replace(/:/g, '-').split('.')[0];

      const audioName = `audio_${stringDateName}.mp3`;

      const b2 = new B2({
        applicationKeyId: process.env.BACKBLAZE_KEY_ID,
        applicationKey: process.env.BACKBLAZE_APP_KEY
      });

      await b2.authorize();

      const audioBuffer = Buffer.from(audio, 'base64');

      const uploadUrlResponse = await b2.getUploadUrl({
        bucketId: process.env.BACKBLAZE_BUCKET_ID
      });

      const uploadFileResponse = await b2.uploadFile({
        uploadUrl: uploadUrlResponse.data.uploadUrl,
        uploadAuthToken: uploadUrlResponse.data.authorizationToken,
        data: audioBuffer,
        fileName: audioName
      });

      const fileId = uploadFileResponse.data.fileId;

      const downloadResponse = await b2.downloadFileById({
        fileId: fileId,
        responseType: 'arraybuffer'
      });

      await strapi.entityService.create('api::media.media', {
        data: {
          fileId: fileId,
          url: downloadResponse.config.url,
          name: audioName,
          user: user
        }
      })
    } catch (error) {
      console.log('ERROR', error)
    }
  }
}));
