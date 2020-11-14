import React from 'react'

import '../styles/OutcomeSection.css';

const OutcomeSection = () => {
    return (
        <>
            <div className="outcome-section">
                <div className="outcome-text">
                    <h2>Outcome</h2>
                    <p>
                        Despite the short amount of time, we were able to deploy a functional 
                        Web Application by working as a team. The result received really good 
                        feedback after the final presentation. 
                        During this project, I was challenged to improve my communication skills 
                        and learn to adapt quickly to new ways of working. 
                    </p>
                    <a href="">See final presentation</a>    
                </div>
                

                <div className="subtitle">Credits</div>
                <ul>
                    <p>Poyan Ng</p>
                    <p>Stephanie Diep</p>
                    <p>Elie Hymowitz</p>
                    <p>Stephanie Beauzile-D.</p>
                </ul>
            </div> 
        </>
    )
}

export default OutcomeSection
