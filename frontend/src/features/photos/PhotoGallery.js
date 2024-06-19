import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPhotos, selectAllPhotos, deletePhotoById } from '../photos/photosSlice';
import { CircularProgress, Typography, Grid, Card, CardMedia, CardActions, Button, Container, Box, Alert } from '@mui/material';

const PhotoGallery = () => {
  const dispatch = useDispatch();
  const photos = useSelector(selectAllPhotos);
  const photoStatus = useSelector((state) => state.photos.status);
  const error = useSelector((state) => state.photos.error);

  useEffect(() => {
    if (photoStatus === 'idle') {
      dispatch(fetchPhotos());
    }
  }, [photoStatus, dispatch]);

  let content;

  if (photoStatus === 'loading') {
    content = (
      <Box display="flex" justifyContent="center" mt={5}>
        <CircularProgress />
      </Box>
    );
  } else if (photoStatus === 'succeeded') {
    content = (
      <Grid container spacing={3}>
        {photos.map((photo) => (
          <Grid item key={photo._id} xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={`http://localhost:5000/uploads/${photo.filename}`}
                alt={photo.title}
              />
              <CardActions>
                <Button
                  size="small"
                  color="secondary"
                  onClick={() => dispatch(deletePhotoById(photo._id))}
                >
                  Delete
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    );
  } else if (photoStatus === 'failed') {
    content = (
      <Box mt={3}>
        <Alert severity="error">{error}</Alert>
      </Box>
    );
  }

  return (
    <Container>
      <Box mt={3}>
        <Typography variant="h4" component="h2" gutterBottom>
          Photo Gallery
        </Typography>
        {content}
      </Box>
    </Container>
  );
};

export default PhotoGallery;
