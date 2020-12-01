import React from 'react'

import '../styles/TTDesignSection.css';
import designelements from "../assets/design guide TT.png";

const DesignSection = () => {
    return (
        <>
            <div className="design">
                <h2>Design</h2>
                <p className="italic-sub">Crafting a holistic look and feel</p>
                <br/><br/>
                <p className="design-p">
                We presented a design package to the client with colors, 
                options of typography, and design inspiration to gage what he 
                had in mind and have him involved in the design process.  
                </p>
                    <div className="design-guide-img">
                        <img className="design-img" src={designelements} alt="user flow" height="100%" width="100%"/>
                    </div>
                    
            </div>
        </>
    )
}

export default DesignSection