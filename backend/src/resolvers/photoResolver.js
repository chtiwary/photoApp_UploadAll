const Photo = require('../models/Photo');
const { uploadToS3 } = require('../utils/s3');

const photoResolver = {
  Query: {
    getAllMyUploadedPictures: async (_, __, { user }) => {
      if (!user) throw new Error('Not authenticated');
      return await Photo.find({ userId: user.id });
    },
  },
  Mutation: {
    uploadPicture: async (_, { file }, { user }) => {
      if (!user) throw new Error('Not authenticated');
      const { createReadStream, filename } = await file;
      const stream = createReadStream();
      const url = await uploadToS3(stream, filename);
      const photo = new Photo({ url, userId: user.id });
      await photo.save();
      return photo;
    },
  },
};

module.exports = photoResolver;
