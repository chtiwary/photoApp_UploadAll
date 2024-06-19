import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logIn, selectError, clearError } from './authSlice';
import { TextField, Button, Container, Typography, Box, Alert } from '@mui/material';

function LogInForm() {
  const dispatch = useDispatch();
  const error = useSelector(selectError);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    dispatch(clearError()); // Clear error when user starts typing
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(logIn(formData));
  };

  return (
    <Container maxWidth="sm">
      <Box mt={5}>
        <Typography variant="h4" component="h2" gutterBottom>
          Log In
        </Typography>
        {error && <Alert severity="error">{error}</Alert>}
        <form onSubmit={handleSubmit}>
          <TextField
            type="email"
            name="email"
            label="Email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            type="password"
            name="password"
            label="Password"
            value={formData.password}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />
          <Box mt={2}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
            >
              Log In
            </Button>
          </Box>
        </form>
      </Box>
    </Container>
  );
}

export default LogInForm;
