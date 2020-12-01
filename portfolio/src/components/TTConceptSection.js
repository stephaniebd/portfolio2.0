import React from 'react'

import '../styles/TTConceptSection.css';

import wireframe from "../assets/low wire TT.png";

const TTConceptSection = () => {
    return (
        <>
            <div className="concept">
                <div className="text-right">
                    <h2>Concept</h2>
                    <p className="italic-sub">Create several sketches and arrange the main elements.</p>
                    <br/><br/>
                    <p>
                    Low fidelity wireframe was presented to the keep him involved in the precess as 
                    well as making sure thta we get his feedback thoughout the process. 
                    </p>
                </div>

                <img className="wireframe-img" src={wireframe} alt="wireframe" height="100%" width="100%"/>
            </div>
        </>
    )
}

export default TTConceptSection