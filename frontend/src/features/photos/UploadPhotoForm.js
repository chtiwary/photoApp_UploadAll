import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { uploadPhoto, selectError, clearError } from '../photos/photosSlice';

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
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button type="submit">Upload Photo</button>
      {error && (
        <div>
          <p>{error}</p>
          <button onClick={() => dispatch(clearError())}>Clear Error</button>
        </div>
      )}
    </form>
  );
};

export default UploadPhotoForm;
