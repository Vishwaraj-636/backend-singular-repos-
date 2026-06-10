import React, { useState, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router';
import { useAuth } from '../hooks/useAuth';

const Protected = ({ children }) => {

  const {
    user, loading
  } = useAuth()
  const navigate = useNavigate()

  if (loading) {
    return <div>Loading...</div>
  }

  if (!user) {
    return <Navigate to="/login" />
  }

  return children
};

export default Protected;