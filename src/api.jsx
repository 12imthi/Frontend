// src/api.js

import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api'; // Replace with your server address

export const registerUser = async (userData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/register`, userData);
        return response.data;
    } catch (error) {
        throw error.response.data; // Propagate the error message
    }
};

export const loginUser = async (credentials) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/login`, credentials);
        return response.data;
    } catch (error) {
        throw error.response.data; // Propagate the error message
    }
};
