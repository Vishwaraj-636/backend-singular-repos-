import React, { useState, useEffect } from 'react';
import "../style/form.scss"


const Login = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <main>
      <div className="form-container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" name="username" id="username" placeholder='Enter username' />
          <input type="text" name="password" id="password" placeholder='Enter password' />
          <button className=''>Login</button>
        </form>
      </div>
    </main>
  );
};

export default Login;