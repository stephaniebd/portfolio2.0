import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/NextSection.css';

import ttmockup from "../assets/mockup TT.png";

const NextSection = () => {
    return (
        <>
            <div className="container">
            <h3>Next</h3>    
                <div className="content">
                    <div className="text">
                        <h2 className="next-title">ThinkTwice Website Redesign</h2>
                    </div>    
                    <div className="mockup">
                        <Link to="/ThinkTwice"><img src={ttmockup} alt="thiktwice mockup" height="450" width="706"/></Link>
                    </div>
                </div>    
            </div>
            <div className="section-line"></div>
        </>
    )
}

export default NextSection
