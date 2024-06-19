import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPhotos, selectAllPhotos, deletePhotoById } from '../photos/photosSlice';

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
    content = <p>Loading...</p>;
  } else if (photoStatus === 'succeeded') {
    console.log(photos)
    content = photos.map((photo) => (
      <div key={photo._id}>
        <img src={`http://localhost:5000/uploads/${photo.filename}`} alt={photo.title} />
        <button onClick={() => dispatch(deletePhotoById(photo._id))}>Delete</button>
      </div>
    ));
  } else if (photoStatus === 'failed') {
    content = <p>{error}</p>;
  }

  return (
    <section>
      <h2>Photo Gallery</h2>
      {content}
    </section>
  );
};

export default PhotoGallery;
