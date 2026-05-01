# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Project-specific notes

- Start development server:

```bash
npm install
npm run dev
```

- Frontend expects the backend API to run at `http://localhost:3000` by default. If your backend runs elsewhere, update API base URLs in `src/features/*/services`.

## Auth & Revision notes

- Recent fixes (for future revisions):
	- Ensure auth API client uses `withCredentials: true` when backend uses cookies.
	- Prefer returning full axios responses from API helpers so callers can inspect `response.data` and status.
	- The `AuthContext` should call `getMe()` on mount to persist logged-in user state and expose `handleLogout()`.

- Testing tips:
	- To verify login flows, open browser devtools → Application → Cookies and confirm session cookie from backend is set.
	- If cookies are not stored, check backend CORS and `Access-Control-Allow-Credentials: true` headers.

## Further reading
- See backend docs in `backend/docs` for API reference and setup details.
