import React from 'react'
import '../styles/DDFBanner.css';

import ddfmockups from "../assets/3 phones mockup DDF.png";

const DDFBanner = () => {
    return (
        <>
            <div className="DDF-hero">
                <h2 className="project-title">Don't Die Food</h2>
                <img className="ddf-img" src={ddfmockups} alt="ddf mockup" height="615" width="1012"/>
            </div>
            <div className="ddf-section-line"></div>
        </>
    )
}

export default DDFBanner
