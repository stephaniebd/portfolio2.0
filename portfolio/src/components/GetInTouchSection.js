import React from 'react'
import { Link } from 'react-router-dom'; 

import '../styles/GetInTouchSection.css'

const GetInTouchSection = () => {
    return (
        <>
            <div className="get-in-touch-offset">
                <h2>Get In Touch?</h2>
                <p>Want to learn more about me and what I could do for you? <Link to="/Contact" className="contact">Contact me!</Link></p>
            </div>
        </>
    )
}

export default GetInTouchSection
