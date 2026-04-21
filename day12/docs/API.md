API Reference

Base path: `/api`

Auth
- POST /api/auth/register
  - Description: Register a new user
  - Body: `{ username, email, password }` (implementation-specific)
  - Auth: no

- POST /api/auth/login
  - Description: Login and receive token (JWT)
  - Body: `{ email, password }`
  - Auth: no

Posts
- POST /api/posts/
  - Description: Create a new post (supports single `image` file upload)
  - Content-Type: `multipart/form-data` (field `image`)
  - Auth: required

- GET /api/posts/
  - Description: List posts for authenticated user
  - Auth: required

- GET /api/posts/details/:postId
  - Description: Get details for a specific post by `postId`; also checks ownership
  - Auth: required

Users
- POST /api/user/follow/:username
  - Description: Follow the user identified by `:username`
  - Auth: required

- POST /api/user/unfollow/:username
  - Description: Unfollow the user identified by `:username`
  - Auth: required

Notes
- All endpoints that require a logged-in user use the `identifyUser` middleware (`src/middlewares/auth.middleware.js`).
- The exact request and response body shapes are implemented in the controllers under `src/controllers`.
