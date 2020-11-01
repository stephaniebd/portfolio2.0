import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <p>© All right reserved – Stephanie Beauzile-Domond</p>

            <ul className="footer-socials">
                <li><Link activeClassName="" to='/work'>my work</Link></li>
                <li><Link activeClassName="" to='/contact'>contact</Link></li>
            </ul>
        </div>
    )
}

export default Footer
