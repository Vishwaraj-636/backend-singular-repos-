# Instagram Clone - Full Stack Application

A full-stack Instagram clone built with Node.js, Express, MongoDB, and React. This project implements core social media features including user authentication, post creation with image upload, and feed functionality.

## 🚀 Features

- **User Authentication**: JWT-based registration and login with secure password hashing
- **Post Management**: Create posts with image uploads powered by ImageKit
- **Feed System**: Personalized feed with chronological post ordering
- **Like Functionality**: Like and unlike posts with like tracking
- **Image Optimization**: Integrated ImageKit for efficient image storage and delivery
- **Responsive UI**: Modern React frontend with SCSS styling

## 📁 Project Structure

```
├── backend/               # Express.js REST API
│   ├── src/
│   │   ├── app.js        # Express server setup
│   │   ├── models/       # MongoDB schemas
│   │   ├── controllers/  # Route handlers
│   │   ├── middlewares/  # Auth & validation
│   │   └── routes/       # API endpoints
│   └── package.json
├── frontend/             # React application
│   ├── src/
│   │   ├── features/     # Feature modules
│   │   │   ├── auth/     # Authentication pages & logic
│   │   │   ├── post/     # Post creation & display
│   │   │   └── shared/   # Common components
│   │   ├── App.jsx
│   │   └── app.routes.jsx
│   └── package.json
└── linkedin-posts/       # Daily progress documentation
```

## 🛠️ Tech Stack

**Backend:**
- Node.js & Express.js
- MongoDB with Mongoose
- JWT Authentication
- Multer (file upload)
- ImageKit (image management)
- bcryptjs (password hashing)

**Frontend:**
- React 18
- Vite (build tool)
- React Router
- SCSS (styling)

## 📋 Core Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | User registration |
| POST | `/api/auth/login` | User login |
| POST | `/api/posts` | Create a new post |
| GET | `/api/posts` | Get user's posts |
| GET | `/api/posts/:id` | Get post details |
| GET | `/api/feed` | Get personalized feed |
| POST | `/api/posts/:id/like` | Like a post |

## 🚀 Quick Start

### Backend Setup
```bash
cd backend
npm install
cp .env.example .env
npm start
```

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

## 🔑 Environment Variables

**Backend (.env):**
```
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
IMAGEKIT_URL_ENDPOINT=your_imagekit_endpoint
```

## 📈 Project Milestones

- ✅ Backend initialization with authentication (Apr 21)
- ✅ Frontend framework setup (Apr 21)
- ✅ Post creation with image upload (Apr 15)
- ✅ User authentication flow (May 1)
- ✅ Feed functionality implementation (May 15)
- ✅ Dependencies optimization and refactoring (May 16)

## 📝 License

This project is part of a cohort learning program.
