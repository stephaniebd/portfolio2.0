import React from 'react'

import '../styles/DesignSection.css';
import designelements from "../assets/design element img.png";

const DesignSection = () => {
    return (
        <>
            <div className="design">
                <h2>Design</h2>
                <p className="italic-sub">Crafting a holistic look and feel</p>
                <br/><br/>
                <p className="design-p">
                    The ideator of the application wanted a playful and cute look 
                    inspired by the Kawaii culture from Japan. 
                </p>
                <div className="design-content">
                    <div className="design-elements-img">
                        <img className="design-img" src={designelements} alt="user flow" height="100%" width="100%"/>
                    </div>
                    <div className="design-text">
                        <p>
                            We chose the Comfortaa typeface for its rounded shapes and amusing look, and Hind Vadodara 
                            for its great readability in smaller characters.
                            <br/><br/>
    
                            The logo was a good representation of food scared to be thrown aways adding that playful 
                            aspect and was also the starting point for the color story.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DesignSection
