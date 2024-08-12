import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Navbar from './Componends/Navbar'; // Import the Navbar component
import Footer from './Componends/Footer';
import Home from './Pages/Home';
import ForgotPassword from './Pages/ForgotPassword';
import ResetPassword from './Pages/ResetPaasword';
import Profile from './Pages/Profile';
import { useState } from 'react';


function App() {

  const [token,setToken] = useState('')
    return (
        <Router>
            <Navbar /> {/* Include the Navbar here */}
            <div className="container mt-4"> {/* Add some top margin */}
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/forgotpwd" element={<ForgotPassword />} />
                    <Route path="/resetpwd" element={<ResetPassword setToken={setToken} />} />
                    <Route path="/profile" element={<Profile token={token} />} />
                </Routes>
            </div>
            <Footer/>
        </Router>
    );
}

export default App;
