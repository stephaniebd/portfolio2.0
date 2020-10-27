import React from 'react'
import '../styles/Banner.css';

const Banner = () => {
    return (
        <div className="banner">
            <div className="hero-banner">
                <h1>Hi, I’m <em>Stephanie</em>,</h1>
                <h1><strong>UI/UX Designer</strong></h1>
                <br/>
                <p>“Design is more than just a few tricks to the eye.</p>
                <p>It’s a few tricks to the brain.”</p>
                <p>— Neville Brody</p>
            </div>
            <div className="scroll">
                <div className="line"></div>
                <p className="scroll-text">scroll</p>
            </div>
        </div>
    )
}

export default Banner
