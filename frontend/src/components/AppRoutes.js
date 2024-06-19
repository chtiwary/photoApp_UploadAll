import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from '../pages/LogInPage';
import SignUp from '../pages/SignUpPage';
import UploadPhotos from '../pages/UploadPhotoPage';
import MyPhotos from '../pages/MyPhotosPage';
import Home from '../pages/Home'; // Assuming Home page is in the pages folder

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/upload" element={<UploadPhotos />} />
      <Route path="/myphotos" element={<MyPhotos />} />
    </Routes>
  );
};

export default AppRoutes;