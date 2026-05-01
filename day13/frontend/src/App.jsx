import React, { useState, useEffect } from 'react';
import AppRoutes from './AppRoutes'
import { RouterProvider} from 'react-router'
import "./style.scss"
import { AuthProvider } from './features/auth/auth.context.jsx';

const App = () => {
  return (
    <AuthProvider >
      <AppRoutes />
   </AuthProvider>
  );
};

export default App;