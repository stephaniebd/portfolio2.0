import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/AboutSection.css';

const AboutSection = () => {
    return (
        <>
            <div className="section-line"></div>
            <div className="about-section">
                <h2>About</h2>
                <p>
                    I am a creative Junior UI/UX who was a Merchandising Manager for several years 
                    when I discovered a new passion for Front-End, UX/UI and decided to change 
                    careers and start a new one in tech.
                </p>
                <br/>
                <p>I love designing and building projects from the ground up.</p>
                <br/>
                <Link>Resume</Link>
                <br/><br/><br/><br/><br/>
                <h2>Get In Touch?</h2>
                <p>Want to learn more about me and what I could do for you? <Link>Contact me!</Link></p>
            </div>
        </>
    )
}

export default AboutSection
