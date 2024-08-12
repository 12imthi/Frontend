// src/Components/ProtectedRoute.js

import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, token }) => {
    // Check if the token exists (meaning the user is authenticated)
    if (!token) {
        return <Navigate to="/login" replace />; // Redirect to login if not authenticated
    }
    return children; // If authenticated, render the children
};

export default ProtectedRoute;
