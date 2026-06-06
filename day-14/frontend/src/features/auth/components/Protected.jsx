import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';

const Protected = ({children}) => {

  const {
      user,loading
    } = useAuth()
    const navigate = useNavigate()

    if(!loading || !user){

    }

  return (

    <div>
      protected
    </div>
  );
};

export default Protected;