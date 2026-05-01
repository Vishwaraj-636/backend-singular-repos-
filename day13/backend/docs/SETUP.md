Setup & environment

Prerequisites
- Node.js 14+ (or compatible)
- MongoDB instance or connection string

Environment variables (common expected names)
- `PORT` - Port to run server (default often 3000)
- `MONGO_URI` - MongoDB connection URI
- `JWT_SECRET` - Secret for signing JWT tokens

Install

```bash
npm install
```

Run

```bash
npm start
# or
node server.js
```

Development notes
- If you add file uploads, confirm storage settings in `src/routes/post.routes.js` (uses multer memory storage currently).
- To change DB config, edit [src/config/database.js](src/config/database.js).
- To inspect route handlers, open `src/controllers/*.js`.

## CORS, Cookies and Auth tips

- If frontend and backend run on different origins in development, enable CORS and allow credentials. Example Express setup:

```js
app.use(cors({ origin: 'http://localhost:5173', credentials: true }))
```

- When using cookie-based sessions or HTTP-only cookies for auth, set `withCredentials: true` on frontend axios requests and set `Access-Control-Allow-Credentials: true` on the server.

## Testing auth endpoints (quick examples)

- Register (curl):

```bash
curl -X POST http://localhost:3000/api/auth/register \
	-H "Content-Type: application/json" \
	-d '{"username":"alice","email":"alice@example.com","password":"pass123"}'
```

- Login (curl, capture cookies):

```bash
curl -i -c cookies.txt -X POST http://localhost:3000/api/auth/login \
	-H "Content-Type: application/json" \
	-d '{"email":"alice@example.com","password":"pass123"}'
```

- Authenticated request using saved cookies:

```bash
curl -b cookies.txt http://localhost:3000/api/posts/
```

## Revision history (backend)

- 2026-05-01: Noted best-practices for CORS + cookies and test examples; recommend `getMe()` endpoint usage from frontend to persist session.

