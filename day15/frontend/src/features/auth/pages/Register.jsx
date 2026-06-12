import React, { useState } from 'react';
import "../style/auth.scss"
import FormGroup from '../components/FormGroup';
import { Link } from "react-router"
import { useAuth } from "../hooks/useAuth"
import { useNavigate } from 'react-router';

const Register = () => {
  const { loading, handleRegister } = useAuth()
  const navigate = useNavigate()

  const [username, setusername] = useState("")
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")

  async function handleSubmit(e) {
    e.preventDefault()
    await handleRegister({ username, email, password })
    navigate("/login")
  }

  return (
    <main className='auth-page'>
      <div className="form-container">
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <FormGroup
            value={username}
            label="Username"
            placeholder="Enter your username"
            onChange={(e) => setusername(e.target.value)}
          />
          <FormGroup
            value={email}
            label="Email"
            placeholder="Enter your email"
            onChange={(e) => setemail(e.target.value)}
          />
          <FormGroup
            value={password}
            label="Password"
            placeholder="Enter your password"
            type="password"
            onChange={(e) => setpassword(e.target.value)}
          />
          <button className='button' type="submit" disabled={loading}>Register</button>
        </form>
        <p>Already have an account? <Link to="/login">Login here</Link></p>
      </div>
    </main>
  );
};

export default Register;