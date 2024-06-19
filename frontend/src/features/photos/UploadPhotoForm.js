import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { uploadPhoto, selectError, clearError } from '../photos/photosSlice';
import { Button, Container, Typography, Box, Alert } from '@mui/material';

const UploadPhotoForm = () => {
  const [file, setFile] = useState(null);
  const dispatch = useDispatch();
  const error = useSelector(selectError);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('photo', file);

    dispatch(uploadPhoto(formData));
  };

  return (
    <Container maxWidth="sm">
      <Box mt={5}>
        <Typography variant="h4" component="h2" gutterBottom>
          Upload Photo
        </Typography>
        <form onSubmit={handleSubmit}>
          <input
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
            style={{ display: 'none' }}
            id="file-input"
          />
          <label htmlFor="file-input">
            <Button
              variant="outlined"
              component="span"
              color="primary"
              fullWidth
            >
              Choose File
            </Button>
          </label>
          {file && <Typography>{file.name}</Typography>}
          <Box mt={2}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
            >
              Upload Photo
            </Button>
          </Box>
        </form>
        {error && (
          <Box mt={2}>
            <Alert severity="error">{error}</Alert>
            <Button onClick={() => dispatch(clearError())} fullWidth>
              Clear Error
            </Button>
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default UploadPhotoForm;
