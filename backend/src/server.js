const express = require('express');
const mongoose = require('mongoose');
const { PORT } = require('./config');
const authRoutes = require('./routes/authRoutes');
const photoRoutes = require('./routes/photoRoutes'); // Adjust path as necessary
require('dotenv').config();
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use(cors());
app.use('/api/auth', authRoutes);
app.use('/uploads', express.static('uploads')); // Serve uploaded files
app.use('/api/photos', photoRoutes);

// for POST
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use(function (res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, HEAD, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, origin, X-Requested-With, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Max-Age", "1800");
  next();
})

const dbUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/photoApp'; // Update this line


mongoose.connect(dbUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch(err => {
  console.error('Error connecting to MongoDB:', err);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
