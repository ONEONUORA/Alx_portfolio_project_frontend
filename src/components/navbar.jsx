 import { Link, Outlet } from 'react-router-dom';
import logo from '../assets/logo (1).png';
import { useState, useContext, useEffect } from 'react';
import { UserContext } from '../App';
import UserNavigationPanel from './userNavigation';

const Navbar = () => {
    const [userNavPanel, setUserNavPanel] = useState(false);
    const { userAuth, setUserAuth } = useContext(UserContext);

    const handleUserNavPanel = () => {
        setUserNavPanel(currentVal => !currentVal);
    };

    const handleBlur = () => {
        setTimeout(() => {
            setUserNavPanel(false);
        }, 200);
    };

    useEffect(() => {
        // Ensures that the Navbar updates when userAuth changes
        setUserNavPanel(false);
    }, [userAuth]);

    return (
        <>
            <nav className='navbar z-50 bg-black'>
                <Link to='/' className=''>
                    <img src={logo} alt="Brand Logo" className='w-2/5'/>
                </Link>

           <div className='text-white font-bold flex gap-5'>
                <Link to='/aboutus' >
                    About Us
                </Link>

                <Link to='/contactus' >
                    Contact Us
                </Link>

                <Link to='/privacy' >
                    Privacy
                </Link>
           </div>
        

                <div className='flex items-center gap-3 md:gap-6 ml-auto'>
                    {userAuth.access_token ? (
                        <div className='relative' onClick={handleUserNavPanel} onBlur={handleBlur}>
                            <button className='w-12 h-12 mt-1'>
                                <img src={userAuth.profile_img} className='w-full h-full object-cover rounded-full' alt="Profile"/>
                            </button>

                            {userNavPanel && <UserNavigationPanel />}
                        </div>
                    ) : (
                        <>
                            <Link className='btn-dark' to="/signin">Sign In</Link>
                            <Link className='btn-light hidden md:block' to="/signup">Sign Up</Link>
                        </>
                    )}
                </div>
            </nav>

            <Outlet />
        </>
    );
};

export default Navbar;
