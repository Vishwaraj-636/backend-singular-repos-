# Day 12 — Authentication Routes and Controllers

Summary
- Implemented authentication endpoints for user registration and login.
- Added `register` and `login` controllers that use `bcryptjs` for password hashing and `jsonwebtoken` for issuing tokens.
- Tokens are set as HTTP cookies (`res.cookie("token", token)`) with a 1-day expiry.
- Created a `User` Mongoose model with `username`, `email`, `password`, `bio`, and `profileImage`.

Key Files
- `src/routes/auth.routes.js` — defines routes:
  - `POST /api/auth/register`
  - `POST /api/auth/login`
- `src/controllers/auth.controller.js` — implements `registerController` and `loginController`:
  - `registerController`: checks for existing user, hashes password, creates user, issues JWT cookie.
  - `loginController`: looks up user by username/email, validates password, issues JWT cookie.
- `src/models/user.model.js` — Mongoose schema for users.
- `src/app.js` and `server.js` — express app wiring and server start.

Environment
Create a `.env` file in the project root with at least:

- `MONGO_URI` — MongoDB connection string
- `JWT_SECRET` — secret used to sign JWTs

Run locally
1. Install dependencies:

```
npm install
```

2. Start dev server (uses `nodemon` via `npx`):

```
npm run dev
```

The server listens on port `3000` by default.

Testing the endpoints
- Register: `POST http://localhost:3000/api/auth/register` with JSON body `{ "username":"...", "email":"...", "password":"..." }`.
- Login: `POST http://localhost:3000/api/auth/login` with JSON body `{ "username":"..." | "email":"...", "password":"..." }`.

Notes / Next steps
- Consider returning the token in the JSON response for API clients that do not use cookies.
- Add input validation and stronger error handling.
- Add logout endpoint to clear the cookie.
