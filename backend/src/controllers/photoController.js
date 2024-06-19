const Photo = require('../models/Photo');

const uploadPhoto = (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }

  const newPhoto = new Photo({
    filename: req.file.filename,
    path: req.file.path,
  });

  newPhoto.save()
    .then(() => res.status(201).json(newPhoto))
    .catch((error) => res.status(500).json({ error: 'Server Error' }));
};

const getPhotos = async (req, res) => {
  try {
    const photos = await Photo.find();
    res.status(200).json(photos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
};

const deletePhoto = async (req, res) => {
  try {
    const { id } = req.params;
    await Photo.findByIdAndDelete(id);
    res.status(200).json({ message: 'Photo deleted' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
};

module.exports = {
  uploadPhoto,
  getPhotos,
  deletePhoto,
};
