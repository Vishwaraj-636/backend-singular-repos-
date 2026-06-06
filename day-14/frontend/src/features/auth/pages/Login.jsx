import React, { useState } from 'react';
import "../style/login.scss"
import FormGroup from '../components/FormGroup';
import { Link } from "react-router"
import { useAuth } from "../hooks/useAuth"
import { useNavigate } from 'react-router';

const Login = () => {

  const { loading, handleLogin } = useAuth()

  const navigate = useNavigate()

  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")

  async function handleSubmit(e) {
    e.preventDefault()
    await handleLogin({ email, password })
    navigate("/")

  }

  return (
    <main className='login-page'>
      <div className="form-container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
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
          <button className='button' type="submit" disabled={loading}>Login</button>
        </form>
        <p>Don't have an account? <Link to="/register">Register here</Link></p>
      </div>
    </main>
  );
};

export default Login;