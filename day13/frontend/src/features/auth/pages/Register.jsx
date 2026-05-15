import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router';
import "../styles/form.scss"
import axios from 'axios'
// import { register } from '../services/auth.api';
import {useAuth} from '../hooks/useAuth'

const Register = () => {
    const { handleRegister, loading } = useAuth()

    const [username, setUsername] = useState("")
    const [email,setEmail ] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()


    if (loading) {
        return <h1>Loading...</h1>
    }

    async function handleSubmit(e) {
        e.preventDefault()
        await handleRegister(username, email, password)
            .then(res => {
                console.log(res)
                navigate("/")
            })
    }

    return (
        <main>
            <div className="form-container">
                <h1>register</h1>

                <form onSubmit={handleSubmit} >
                    <input
                        onInput={(e) => { setUsername(e.target.value) }}
                        type="text"
                        name="username"
                        placeholder="Enter username" />
                    <input
                        onInput={(e) => { setEmail(e.target.value) }}
                        type="text"
                        name="email"
                        placeholder='Enter email' />
                    <input
                        onInput={(e) => { setPassword(e.target.value) }}
                        type="password"
                        name="password"
                        placeholder="Enter password" />
                    <button type="submit">Register</button>
                </form>
                <p>Already have an account <Link className='toggleAuthForm' to="/login">Login</Link></p>
            </div>
        </main>
    );
};

export default Register;