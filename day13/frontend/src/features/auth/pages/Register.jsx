import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router';
import { useAuth } from "../hooks/useAuth"

const Register = () => {
  const { loading, handleRegister } = useAuth()

  const [username, setusername] = useState("")
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleRegister(username, email, password)
    navigate("/")
  }

  if (loading) {
    return (
      <main>
        <h1>Loading...</h1>
      </main>
    )
  }
  return (
    <main>
      <div className="form-container">
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <input
            onChange={(e) => setusername(e.target.value)}
            type="text"
            name="username"
            id="username"
            placeholder='Enter username' />
          <input
            onChange={(e) => setemail(e.target.value)}
            type="text"
            name="email"
            id="email"
            placeholder='Enter email address' />
          <input
            onChange={(e) => setpassword(e.target.value)}
            type="text"
            name="password"
            id="password"
            placeholder='Enter password' />
          <button className="button primary-button">Register</button>
        </form>
        <p>Already have an account? <Link to={"/login"}>Login to account.</Link></p>
      </div>
    </main>
  );
};

export default Register;