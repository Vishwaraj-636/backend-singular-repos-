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
