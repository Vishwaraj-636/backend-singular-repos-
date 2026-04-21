Project structure and purpose of important files

- `src/app.js` - Express app setup and middlewares
- `server.js` - Application entry point / server startup
- `src/config/database.js` - Database (Mongo) connection setup

Controllers
- `src/controllers/auth.controller.js` - Handles register/login logic
- `src/controllers/user.controller.js` - Follow/unfollow user logic
- `src/controllers/post.controller.js` - Create and fetch posts

Routes
- `src/routes/auth.routes.js` - Auth endpoints (register, login)
- `src/routes/user.routes.js` - User follow endpoints
- `src/routes/post.routes.js` - Post create/list/details endpoints

Middlewares
- `src/middlewares/auth.middleware.js` - Identifies and authenticates users (JWT)

Models
- `src/models/user.model.js` - User schema
- `src/models/post.model.js` - Post schema
- `src/models/follow.model.js` - Follow relations (if present)

Notes
- Image upload uses `multer` in memory storage (see `src/routes/post.routes.js`).
- Authentication middleware is applied on routes requiring an authenticated user.
