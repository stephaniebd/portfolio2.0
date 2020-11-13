import React from 'react'

import '../styles/ContextSection.css';

import bigcellmockup from "../assets/Bigcell mockup DDF.png";
import mlmockup from "../assets/MLmockup.png";
import scmockup from "../assets/SCmockup.png";

const ContextSection = () => {
    return (
        <>
            <div className="details-flex">
                <div className="details">
                    <div className="subtitle">My role</div>
                    <ul>
                        <li><p>UI/UX design,</p></li>
                        <li><p>Frontend Development</p></li>
                    </ul>   
                </div>
                
                <div className="details">
                   <div className="subtitle">Tools</div>
                    <ul>
                        <li><p>Figma, HTML, CSS,</p></li>
                        <li><p>JavaScript, Ruby on Rails</p></li>
                    </ul> 
                </div>
            </div>

            <div className="context-content">
                <h2>A Web App to share food with your community</h2>
                <br/><br/><br/>

                <div className="subtitle">Scope and Constraints</div>
                <p>
                    During the last two weeks of the Bootcamp, 
                    I worked with three teamates to complete this MVP,  
                    base on the initial pitch by Poyan Ng.
                </p>

                <div className="subtitle">Overview</div>
                <p>
                    We all have done it. The sting of throwing away a handful 
                    of avocados that were past their prime. It’s not just the financial loss, 
                    but the environmental loss as well. If we all are experiencing the same problem, 
                    there must be a way to combat it together. 
                </p>

                <div className="div-flex">
                    <div className="solution-section">
                        <div className="subtitle">Our Solution </div>
                        <p>
                            An application that would help users avoid wasting perishable grocery 
                            items by either sharing or trading with a neighbor, or finding a recipe that 
                            utilizes the nearly expired products before it’s too late.
                        </p>
                    
                        <div className="links-flex">
                            <a className="link-project" href="">See final design</a>
                            <a className="link-bold" href="">See process</a>
                        </div>

                        <a href="">See code</a>
                    </div>

                    <img src={bigcellmockup} alt="DDF mockup" height="678" width="367"/>
                </div>
            </div>

            <div className="research">
                <h2>Research</h2>
                <p className="italic-sub">Generate and gather ideas</p>
                <br/><br/>
                <p>To kick off the project we started with a competitor analysis and a persona.</p>

                <div className="div-flex">
                    <img className="scmockup" src={scmockup} alt="SC mockup" height="332" width="719"/>
                    <p className="mockup-name">Supercook.com</p>    
                </div>
                
                <div className="div-flex-right">
                    <p className="mockup-name">MunchLab.com</p> 
                    <img className="mlmockup" src={mlmockup} alt="ML mockup" height="332" width="712"/>
                </div>
                
            </div>

            
        </>
    )
}

export default ContextSection
