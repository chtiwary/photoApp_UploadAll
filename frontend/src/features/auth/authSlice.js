import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  token: null,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      state.error = null;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.token = null;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
});

export const { setToken, setError, clearError } = authSlice.actions;

export const signUp = (userData) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:5000/api/auth/signup', userData);
    dispatch(setToken(response.data.token));
  } catch (error) {
    const errorMessage = error.response?.data?.error || 'Unknown error occurred during signup';
    console.error('SignUp Error:', errorMessage);
    dispatch(setError(errorMessage));
  }
};

export const logIn = (userData) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:5000/api/auth/login', userData);
    console.log(response, "testing")
    dispatch(setToken(response.data.token));
  } catch (error) {
    const errorMessage = error.response?.data?.error || 'Unknown error occurred during login';
    console.error('Login Error:', errorMessage);
    dispatch(setError(errorMessage));
  }
};

export const selectToken = (state) => state.auth.token;
export const selectError = (state) => state.auth.error;

export default authSlice.reducer;
