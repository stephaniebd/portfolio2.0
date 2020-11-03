import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <p>© All right reserved – Stephanie Beauzile-Domond</p>

            <ul className="footer-socials">
                <a href="https://www.linkedin.com/in/stephaniebd/" target="blank"><i className="fab fa-linkedin-in"></i></a>
                <a href="https://github.com/stephaniebd" target="blank"><i className="fab fa-github"></i></a>
                <a href=""><i className="fab fa-behance"></i></a>  
                <a href=""><i className="fab fa-dribbble"></i></a>
            </ul>
        </div>
    )
}

export default Footer
