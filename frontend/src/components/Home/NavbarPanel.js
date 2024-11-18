import React, { useState, useEffect, useRef } from 'react';
import { FaSearch, FaUsers, FaStar } from 'react-icons/fa';
import logo from '../../images/lanadelrey.jpg';
import { Link, useNavigate } from 'react-router-dom';

const NavbarPanel = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);
    const buttonRef = useRef(null);
    const navigate = useNavigate();

    const menuItems = [
        { path: '/search', icon: <FaSearch />, label: 'Search' },
        { path: '/group', icon: <FaUsers />, label: 'Servers' },
        { path: '/review', icon: <FaStar />, label: 'Reviews' },
    ];

    const toggleDropdown = () => setIsOpen(!isOpen);

    const toggleSignout = () => {
        localStorage.removeItem('authToken');
        alert('Signed out successfully.'); 
        navigate('/');
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target) &&
                !buttonRef.current.contains(event.target)
            ) {
                setIsOpen(false);
            }
        };
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <header>
            <nav className="bg-black px-4 lg:px-6 py-2.5 sticky top-0 z-[1000]">
                <div className="flex justify-between items-center">
                    {/* Left Division */}
                    <div className="text-white flex">
                        <Link to="/">
                            <div className="px-10 py-2 flex items-center bg-slate-50 text-black">
                                <img src={logo} alt="Logo" className="h-10 w-auto rounded-full mr-2" />
                                <span className="text-lg">whatraja</span>
                            </div>
                        </Link>
                        {menuItems.map(({ path, icon, label }) => (
                            <div key={label} className="px-10 py-2 flex items-center">
                                <Link to={path}>{icon}</Link>
                                <span className="text-lg mx-2">
                                    <Link to={path}>{label}</Link>
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Right Division */}
                    <div className="text-white flex">
                        <div className="px-10 py-2 flex items-center">
                            <button
                                className="text-lg"
                                id="menu-button"
                                onClick={toggleDropdown}
                                ref={buttonRef}
                            >
                                Dashboard
                            </button>
                        </div>
                        {isOpen && (
                            <div
                                className="absolute right-0 z-20 mt-12 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5"
                                role="menu"
                                aria-orientation="vertical"
                                aria-labelledby="menu-button"
                                ref={menuRef}
                            >
                                <div className="py-1">
                                    <Link to="/dashboard" className="block px-4 py-2 text-sm text-gray-700">
                                        Dashboard
                                    </Link>
                                    <button
                                        type="button"
                                        onClick={toggleSignout}
                                        className="block w-full px-4 py-2 text-sm text-gray-700 text-left"
                                    >
                                        Sign out
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default NavbarPanel;
