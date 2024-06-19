const express = require('express');
const { uploadPhoto, getPhotos, deletePhoto } = require('../controllers/photoController');
const upload = require('../utils/photo');

const router = express.Router();

router.post('/upload', upload.single('photo'), uploadPhoto);
router.get('/', getPhotos);
router.delete('/:id', deletePhoto);

module.exports = router;
