import React from 'react'

import '../styles/TTContextSection.css';

import bigcellmockup from "../assets/bigcell mockup TT.png";


const ContextSection = () => {
     
    return (
        <>
            <div className="details-flex">
                <div className="details">
                    <div className="subtitle">My role</div>
                    <ul>
                        <li><p>UI/UX design,</p></li>
                    </ul>   
                </div>
                
                <div className="details">
                   <div className="subtitle">Tools</div>
                    <ul>
                        <li><p>Figma,</p></li>
                        <li><p>Webflow</p></li>
                    </ul> 
                </div>
            </div>

            <div className="context-content">
                <h2 className="context-title">A redesign to better connect with the client</h2>

                <div className="subtitle">Scope and Constraints</div>
                <p>
                    I contributed to the design process in a team of 3 members, for 2 weeks.
                    The objective of the project was to give a new life to the existing website 
                    and to better target customers with a more appealing look and experience.
                </p>
            </div>    

            <div className="parent">
                <div className="div-flex-solution">
                    <div className="solution-section">
                        <div className="subtitle">Our client - ThinkTwice </div>
                        <p>
                        ThinkTwice is a PR/Marketing agency based in Switzerland, 
                        who focus on helping clients navigate the real estate market. 
                        </p>
                    
                        <div className="links-flex">
                            <a className="link-project" href="">See final design</a>
                            <a className="link-bold" href="">See process</a>
                        </div>
                    </div>

                    <img className="bigcell-img" src={bigcellmockup} alt="TT mockup" height="41%" width="41%"/>
                </div>
            </div>    

                <div className="research">
                    <h2>Research</h2>
                    <p className="italic-sub">Generate and gather ideas</p>
                    <br/><br/>

                    <div className="subtitle">What was the opportunity</div>
                    <p className="research-content"> 
                        A few discovery sessions were held with stakeholders to ask three main questions:
                        <br/>
                        Why a redesign? <br/>
                        Who were their competitors? <br/>
                        What were his business goals? 
                        <br/>
                        <br/>
                        The design team and I began analyzing the answers and deduced that the main opportunity 
                        for improvement on the current site was the unclear message toward the user and a need 
                        to improve the IA and overall branding. 
                    </p>
                </div>
            
        </>
    )
}

export default ContextSection