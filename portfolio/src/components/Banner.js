import React from 'react'
import '../styles/Banner.css';

const Banner = () => {
    return (
        <div className="banner">
            <div className="hero-banner">
                <h1>Hi, I’m <em>Stephanie</em>,</h1>
                <h1><strong>UX/UI Developer</strong></h1>
                <br/>
                <p>“Design is more than just a few tricks to the eye.</p>
                <p>It’s a few tricks to the brain.”</p>
                <p>— Neville Brody</p>
            </div>
            <div className="scroll">
                <p className="scroll-text animated bounce">scroll</p>
            </div>
        </div>
    )
}

export default Banner