// src/Login.js

import React, { useState } from 'react';
import { loginUser } from '../api';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Login = () => {
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    });
    const [message, setMessage] = useState('');

    const navigate = useNavigate(); // Initialize useNavigate

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials({ ...credentials, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await loginUser(credentials);
            setMessage(result.message); // Show success message
            navigate('/'); 
            // Perform any further actions (e.g., redirecting, storing auth tokens)
        } catch (error) {
            setMessage(error.message); // Show error message
        }
    };

    return (
        <div className="container mt-5">
            <h2 className="mb-4">Login</h2>
            <form onSubmit={handleSubmit} className="col-md-6 mx-auto">
                <div className="mb-3">
                    <label className="form-label" htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        name="email" 
                        id="email" 
                        placeholder="Email" 
                        value={credentials.email} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        name="password" 
                        id="password" 
                        placeholder="Password" 
                        value={credentials.password} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
                <button type="submit" className="btn btn-primary">ChangePassword</button>
            </form>
            {message && <p className="mt-3 text-danger">{message}</p>} {/* Display success/error messages */}
        </div>
    );
};

export default Login;
