import React, { useState, useEffect } from 'react';
import { RouterProvider } from "react-router";
import { router } from "./app.router.jsx";
import "./features/shared/styles/global.scss"
import { AuthProvider } from './features/auth/auth.context.jsx';
import "./features/shared/styles/global.scss"
import { SongContextProvider } from './features/home/song.context.jsx';

const App = () => {
  return (
    <AuthProvider>
      <SongContextProvider>
        <RouterProvider router={router} />
      </SongContextProvider>
    </AuthProvider>
  );
};

export default App;