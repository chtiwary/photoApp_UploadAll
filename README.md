# Photo Gallery Application

This is a full-stack photo gallery application built with Node.js, Express, MongoDB, and React. Users can sign up, log in, upload photos, and view a gallery of uploaded photos.

## Features

- User authentication (sign up, log in)
- Photo upload
- Photo gallery view
- Photo deletion

## Technologies Used

- Backend: Node.js, Express, MongoDB, Multer, JWT, bcrypt
- Frontend: React, Redux Toolkit, Tailwind CSS

## Setup and Installation

Install backend dependencies:
cd backend
npm install

Create a .env file in the backend directory with the following content:

.env
PORT=5000
MONGO_URI=mongodb://localhost:27017/photoApp
JWT_SECRET='eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTcxODcxNDU5NiwiaWF0IjoxNzE4NzE0NTk2fQ.1ode3WfuMkfWoA6SgHMea4fDRCfmcaTYsHeq5Zf_rPA'


Run the backend server:
npm start
The backend server should now be running on http://localhost:5000.

Frontend Setup
Navigate to the frontend directory:
cd ../frontend
Install frontend dependencies:

npm install
Run the frontend development server:

npm start
The frontend server should now be running on http://localhost:3000.

Upload Directory
Make sure to create an uploads directory in the backend directory to store uploaded photos:
mkdir backend/uploads



Project Structure
.
├── backend
│   ├── src
│   │   ├── controllers
│   │   │   ├── authController.js
│   │   │   └── photoController.js
│   │   ├── models
│   │   │   ├── Photo.js
│   │   │   └── User.js
│   │   ├── routes
│   │   │   ├── authRoutes.js
│   │   │   └── photoRoutes.js
│   │   ├── utils
│   │   │   ├── auth.js
│   │   │   └── photo.js
│   │   └── server.js
│   ├── .env
│   ├── package.json
│   └── uploads
├── frontend
│   ├── src
│   │   ├── features
│   │   │   ├── auth
│   │   │   ├── photos
│   │   │   └── App.js
│   │   ├── App.css
│   │   ├── index.css
│   │   └── index.js
│   ├── package.json
└── README.md


API Endpoints
Authentication
POST (http://localhost:5000/api/auth/signup): Sign up a new user
POST (http://localhost:5000/api/auth/login): Log in an existing user

Photos
POST (http://localhost:5000/api/photos/upload): Upload a new photo
GET (http://localhost:5000/api/photos/): Get all photos
DELETE (`http://localhost:5000/api/photos/${photoId}`): Delete a photo by ID

### Prerequisites

- Node.js and npm installed on your machine
- MongoDB installed and running
- A GitHub account (for cloning the repository)

### Backend Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/chtiwary/photoApp_UploadAll
   cd photoApp_UploadAll
