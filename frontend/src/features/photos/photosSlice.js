import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async Thunks
export const fetchPhotos = createAsyncThunk('photos/fetchPhotos', async () => {
  const response = await axios.get('http://localhost:5000/api/photos/');
  return response.data;
});

export const uploadPhoto = createAsyncThunk('photos/uploadPhoto', async (photoData) => {
  const response = await axios.post('http://localhost:5000/api/photos/upload', photoData);
  return response.data;
});

export const deletePhotoById = createAsyncThunk('http://localhost:5000/photos/deletePhotoById', async (photoId) => {
  await axios.delete(`http://localhost:5000/api/photos/${photoId}`);
  return photoId;
});

// Initial State
const initialState = {
  photos: [],
  status: 'idle',
  error: null,
};

// Slice
const photoSlice = createSlice({
  name: 'photos',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPhotos.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPhotos.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.photos = action.payload;
      })
      .addCase(fetchPhotos.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(uploadPhoto.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(uploadPhoto.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.photos.push(action.payload);
      })
      .addCase(uploadPhoto.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(deletePhotoById.fulfilled, (state, action) => {
        state.photos = state.photos.filter(photo => photo.id !== action.payload);
      });
  },
});

// Export Actions and Selectors
export const { clearError } = photoSlice.actions;

export const selectAllPhotos = (state) => state.photos.photos;
export const selectPhotos = (state) => state.photos.photos;
export const selectError = (state) => state.photos.error;

export default photoSlice.reducer;
