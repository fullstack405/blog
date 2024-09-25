import React from 'react';
import { Link } from 'react-router-dom';
import '../Navbar.css'; // 스타일링 파일

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/blog">FullStack 405 Study</Link>
            </div>
            <ul className="navbar-links">
                <li>
                    <Link to="/navi/home">Home</Link>
                </li>
                <li>
                    <Link to="/navi/about">About</Link>
                </li>
                <li>
                    <Link to="/navi/services">Services</Link>
                </li>
                <li>
                    <Link to="/navi/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
