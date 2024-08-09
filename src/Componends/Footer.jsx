// src/Footer.js

import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-dark text-white text-center py-3">
            <div className="container">
                <p className="mb-0">© {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
                <p>
                    <a href="/privacy-policy" className="text-white">Privacy Policy</a> | 
                    <a href="/terms-of-service" className="text-white"> Terms of Service</a>
                </p>
                <p>Contact: <a href="mailto:info@example.com" className="text-white">info@example.com</a></p>
            </div>
        </footer>
    );
};

export default Footer;
