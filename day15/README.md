# Moodify 🎵🎭

A smart, AI-powered mood-based music player that detects your facial expression in real-time and plays music tailored to your emotional state.

## Table of Contents

- [Features](#features)
- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [How It Works](#how-it-works)
- [API Endpoints](#api-endpoints)
- [Configuration](#configuration)

## Features

✨ **AI-Powered Mood Detection** - Uses MediaPipe facial landmarks to detect real-time facial expressions  
🎵 **Smart Music Selection** - Automatically selects songs matching your detected mood (Happy, Sad, Surprised, Neutral)  
🎚️ **Advanced Player Controls** - Play/pause, seek forward/backward by 10 seconds, adjustable playback speed (0.75x - 2x)  
🔐 **User Authentication** - Secure registration and login with JWT-based session management  
☁️ **Cloud Storage** - Songs and artwork hosted on ImageKit for fast CDN delivery  
📱 **Responsive Design** - Beautiful, modern UI that works seamlessly on desktop and mobile  
🎨 **Modern Glassmorphism UI** - Frosted glass effects with smooth animations and gradients  

## Project Overview

**Moodify** bridges the gap between AI and music by detecting your emotional state through facial recognition and serving you the perfect playlist. Instead of manually selecting songs, simply look at your webcam and let our AI pick the right mood of music for you.

### Use Cases
- **Productivity Boost** - Get energized with happy music when you need a mood lift
- **Relaxation** - Find calm music when your expression shows stress or sadness
- **Surprise Discovery** - Let the AI surprise you with curated songs matching your moment
- **Emotional Exploration** - Understand your emotions through the music it recommends

## Tech Stack

### Frontend
- **React 19** - Modern UI library with hooks and concurrent features
- **Vite** - Lightning-fast build tool and dev server
- **React Router 7** - Client-side routing
- **Axios** - HTTP client for API calls
- **SASS/SCSS** - Advanced styling with variables, mixins, and nesting
- **MediaPipe** - Google's ML framework for facial landmark detection

### Backend
- **Node.js + Express 5** - Fast, scalable backend server
- **MongoDB** - NoSQL database for storing users and songs
- **Mongoose** - ODM for MongoDB schema management
- **JWT** - Secure token-based authentication
- **ImageKit** - CDN and image optimization service
- **node-id3** - MP3 metadata extraction
- **Redis** - Caching layer via IORedis
- **Multer** - File upload middleware
- **bcryptjs** - Password hashing and security

## Installation

### Prerequisites
- **Node.js** (v18+) and npm
- **MongoDB** (local or Atlas cluster)
- **Redis** (optional, for caching)
- ImageKit account for file storage

### Step 1: Clone the Repository
```bash
git clone <repository-url>
cd moodify
```

### Step 2: Backend Setup
```bash
cd backend
npm install
```

Create a `.env` file in the backend directory:
```env
MONGO_URI=mongodb://localhost:27017/moodify
JWT_SECRET=your_jwt_secret_key
IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
IMAGEKIT_URL_ENDPOINT=your_imagekit_url_endpoint
REDIS_URL=redis://localhost:6379
PORT=3000
```

### Step 3: Frontend Setup
```bash
cd ../frontend
npm install
```

Create a `.env` file in the frontend directory (if needed):
```env
VITE_API_BASE_URL=http://localhost:3000
```

### Step 4: Start Services

**Backend:**
```bash
cd backend
npm run dev
```
Server runs on `http://localhost:3000`

**Frontend:**
```bash
cd frontend
npm run dev
```
App runs on `http://localhost:5173`

## Getting Started

1. **Register an Account** - Create your Moodify account
2. **Allow Camera Access** - Grant browser permission to access your webcam
3. **Detect Your Mood** - Click "Detect Expression" button
4. **Enjoy Music** - Watch as Moodify automatically loads a song matching your mood
5. **Control Playback** - Use the player controls to play, seek, and adjust speed

## Project Structure

```
moodify/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   ├── cache.js          # Redis cache configuration
│   │   │   └── database.js       # MongoDB connection
│   │   ├── controller/
│   │   │   ├── auth.controller.js
│   │   │   └── song.controller.js
│   │   ├── middleware/
│   │   │   ├── auth.middleware.js
│   │   │   └── upload.middleware.js
│   │   ├── models/
│   │   │   ├── user.model.js
│   │   │   ├── song.model.js
│   │   │   └── blacklist.model.js
│   │   ├── routes/
│   │   │   ├── auth.routes.js
│   │   │   └── song.routes.js
│   │   ├── services/
│   │   │   └── storage.service.js
│   │   └── app.js
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── features/
│   │   │   ├── auth/
│   │   │   │   ├── components/
│   │   │   │   │   ├── FormGroup.jsx
│   │   │   │   │   └── Protected.jsx
│   │   │   │   ├── hooks/
│   │   │   │   │   └── useAuth.js
│   │   │   │   ├── pages/
│   │   │   │   │   ├── Login.jsx
│   │   │   │   │   └── Register.jsx
│   │   │   │   ├── services/
│   │   │   │   │   └── auth.api.js
│   │   │   │   ├── style/
│   │   │   │   │   └── auth.scss
│   │   │   │   └── auth.context.jsx
│   │   │   ├── home/
│   │   │   │   ├── components/
│   │   │   │   │   └── Player.jsx
│   │   │   │   ├── hooks/
│   │   │   │   │   └── useSong.js
│   │   │   │   ├── pages/
│   │   │   │   │   └── Home.jsx
│   │   │   │   ├── service/
│   │   │   │   │   └── song.api.js
│   │   │   │   ├── style/
│   │   │   │   │   └── Player.scss
│   │   │   │   └── song.context.jsx
│   │   │   ├── expression/
│   │   │   │   ├── components/
│   │   │   │   │   ├── FaceExpression.jsx
│   │   │   │   │   └── exp.scss
│   │   │   │   └── utils/
│   │   │   │       └── utils.js
│   │   │   └── shared/
│   │   │       └── styles/
│   │   │           └── global.scss
│   │   ├── App.jsx
│   │   ├── app.router.jsx
│   │   ├── main.jsx
│   │   └── vite.config.js
│   └── package.json
│
└── README.md
```

## How It Works

### 1. **Facial Expression Detection Flow**
```
User clicks "Detect Expression"
    ↓
MediaPipe analyzes facial landmarks from webcam
    ↓
AI classifies expression into 4 moods:
  - Happy: Smile detected
  - Sad: Downturned mouth, furrowed brow
  - Surprised: Wide eyes, open mouth
  - Neutral: Resting face
    ↓
Frontend calls backend /api/songs?mood=<detected_mood>
```

### 2. **Song Selection & Playback**
```
Backend receives mood parameter
    ↓
MongoDB query: findOne({ mood: "happy" })
    ↓
Returns song document with:
  - url: CDN link to MP3 file
  - posterUrl: Album artwork link
  - title: Song name
  - mood: Mood category
    ↓
Frontend renders player with song
    ↓
User plays, seeks, changes speed
```

### 3. **Authentication Flow**
```
User registers → Password hashed with bcryptjs
    ↓
JWT token generated → Stored in HttpOnly cookie
    ↓
Subsequent requests → Middleware validates JWT
    ↓
Valid token → Access granted
Invalid/expired → Redirect to login
```

## API Endpoints

### Authentication
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Create new account |
| POST | `/api/auth/login` | User login |
| GET | `/api/auth/me` | Get current user |
| POST | `/api/auth/logout` | Clear session |

### Songs
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/songs?mood=<mood>` | Get song by mood |
| POST | `/api/songs` | Upload new song (admin) |

### Supported Moods
- `happy` - Energetic, uplifting songs
- `sad` - Emotional, melancholic songs
- `surprised` - Unexpected, dynamic tracks
- `neutral` - Calm, background music

## Configuration

### Environment Variables

**Backend (.env)**
```
MONGO_URI          # MongoDB connection string
JWT_SECRET         # Secret key for JWT signing
JWT_EXPIRE         # Token expiration time (default: 7d)
IMAGEKIT_PUBLIC_KEY     # ImageKit API credentials
IMAGEKIT_PRIVATE_KEY
IMAGEKIT_URL_ENDPOINT
REDIS_URL          # Redis connection (optional)
PORT               # Server port (default: 3000)
NODE_ENV           # Environment (development/production)
```

**Frontend (.env)**
```
VITE_API_BASE_URL  # Backend API URL
```

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Requires: Camera/Microphone permissions, WebRTC support

## Performance

- **API Response Time**: < 100ms average
- **Facial Detection**: 30 FPS on modern devices
- **CDN Delivery**: Global edge locations via ImageKit
- **Database Queries**: Indexed mood field for fast lookups

## Security Features

- 🔒 **Password Hashing** - bcryptjs with salt rounds
- 🎫 **JWT Authentication** - Secure token-based auth
- 🍪 **HttpOnly Cookies** - CSRF protection
- 🔐 **CORS** - Restricted to trusted origins
- 📝 **Input Validation** - Schema validation on all endpoints

## Troubleshooting

### Camera Not Detected
- Check browser camera permissions
- Ensure HTTPS in production (required for camera access)
- Try Chrome instead of other browsers

### 404 Song Not Found
- Verify mood value is one of: happy, sad, surprised, neutral
- Ensure database has songs with the requested mood
- Check MongoDB connection

### Player Not Loading
- Clear browser cache
- Check console for CORS errors
- Verify backend is running on port 3000

### Build Issues
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run dev
```

## Future Enhancements

- 🎵 **Playlist Support** - Create and save custom playlists
- 🌍 **Multi-language UI** - Internationalization support
- 📊 **Mood Analytics** - Track emotional patterns over time
- 🎤 **Voice Commands** - Control player with voice
- 🤝 **Social Features** - Share music moods with friends
- 🎨 **Theme Customization** - Dark/light modes, custom colors
