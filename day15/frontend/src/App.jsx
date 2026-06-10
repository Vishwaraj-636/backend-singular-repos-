import React, { useState, useEffect } from 'react';
import { RouterProvider } from "react-router";
import { router } from "./app.router.jsx";
import "./features/shared/styles/global.scss"
import { AuthProvider } from './features/auth/auth.context.jsx';
import "./features/shared/styles/global.scss"

const App = () => {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
};

export default App;