'use strict';

const B2 = require('backblaze-b2');

/**
 * audio controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = {
  async getAudio(ctx) {
    const fileId = ctx.query.fileId;
    const validDurationInSeconds = 3600;

    const b2 = new B2({
      applicationKeyId: process.env.BACKBLAZE_KEY_ID,
      applicationKey: process.env.BACKBLAZE_APP_KEY
    });

    await b2.authorize();

    try {

      const fileInfo = await b2.getFileInfo({
        fileId: fileId
      });

      const validId = fileInfo.data.fileId;

      const downloadAuthorization = await b2.getDownloadAuthorization({
        bucketId: process.env.BACKBLAZE_BUCKET_ID,
        fileNamePrefix: '',
        validDurationInSeconds: validDurationInSeconds,
      });

      const downloadResponse = await b2.downloadFileById({
        fileId: validId,
        responseType: 'arraybuffer',
      });

      const downloadData = {
        url: downloadResponse.config.url,
        Authorization: downloadResponse.config.headers.Authorization
      }

      console.log(downloadResponse)

    } catch (error) {
      throw new Error('Get file info error')
    }
    ctx.send({
      message: 'Tu url de audio',
    });
  }
}
