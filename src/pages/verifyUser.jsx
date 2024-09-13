

import { useState, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Toaster, toast } from 'react-hot-toast';
import logo from "../assets/logo (1).png";
import { UserContext } from '../App';

const Verify = () => {
    const [code, setCode] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const { setUserAuth } = useContext(UserContext); // Destructure setUserAuth from UserContext
    const email = location.state?.email;

    const handleVerify = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(import.meta.env.VITE_SERVER_DOMAIN + "/verify", { email, code });

            if (response.data.success) {
                toast.success('Account verified! Redirecting to dashboard...');
                localStorage.setItem('token', response.data.data.access_token);
                
                // Update userAuth with the verified user data
                setUserAuth(response.data.data);
                
                setTimeout(() => {
                    navigate('/userDashboard');
                }, 2000);
            } else {
                setErrorMessage(response.data.message);
                toast.error(response.data.message);
            }
        } catch (error) {
            if (error.response) {
                setErrorMessage(error.response.data.message || 'An error occurred.');
                toast.error(error.response.data.message || 'An error occurred.');
            } else {
                setErrorMessage('Network error or server not responding.');
                toast.error('Network error or server not responding.');
            }
        }
    };

    return (
        <section className='h-cover'>
            <Toaster />
            <form onSubmit={handleVerify}>
                <img src={logo} alt='Brand logo' className='center'/>
                <h5 className='font-bold font-gelasio text-center mb-3'>Verify Your Email</h5>
                <input
                    type="text"
                    placeholder="Enter verification code"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    required
                    className='input-box mb-3'
                />
                <button type="submit" className="btn-dark center">Verify</button>
            </form>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage} Please try again</p>}
        </section>
    );
};

export default Verify;


