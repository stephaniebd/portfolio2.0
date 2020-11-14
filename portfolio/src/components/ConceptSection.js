import React from 'react'

import '../styles/ConceptSection.css';

import userflow from "../assets/User Flow.png";
import sketches from "../assets/sketches.png";
import sketches1 from "../assets/sketches1.png";
import sketches2 from "../assets/sketches2.png";

const ConceptSection = () => {
    return (
        <>
            <div className="concept">
                <div className="text-right">
                    <h2>Concept</h2>
                    <p className="italic-sub">Create several sketches and arrange the main elements.</p>
                    <br/><br/>
                    <p>
                        Then we created a flowchart, sketched and wireframed the core aspects of the app, 
                        while always keeping in mind the user experience. We decided that unauthenticated 
                        users would have access to the recipe feature of the app, and all other features 
                        would be accessible after creating an account and signing in. 
                    </p>
                </div>

                <img className="userflow-img" src={userflow} alt="user flow" height="755.14" width="739.21"/>

                <div className="sketches-flex">
                    <img className="sketches-img" src={sketches} alt="user flow" height="290.36" width="1120.19"/>
                </div>
            </div>
        </>
    )
}

export default ConceptSection
