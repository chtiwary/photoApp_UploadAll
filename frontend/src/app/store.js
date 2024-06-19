import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import photosReducer from '../features/photos/photosSlice';

export default configureStore({
  reducer: {
    auth: authReducer,
    photos: photosReducer,
  },
});
