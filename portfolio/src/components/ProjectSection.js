import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/ProjectSection.css';

import ddfmockup from "../assets/2 mockups DDF.png";
import ttmockup from "../assets/mockup TT.png";
import rdmockup from "../assets/mockup RD.png";


const items = [
    {
        key: "1",
        title:<Link to="/DontDieFood"><h2>Don’t Die Food Website App</h2></Link>,
        about:  <ul>
                    <li><p>Concept</p></li>
                    <li><p>UI/UX Design</p></li>
                    <li><p>Web Development</p></li>
                </ul>,
        picture: <Link to="/DontDieFood"><img src={ddfmockup} alt="don't die food mockup" height="539" width="658"/></Link>,
    },
    {
        key: "2",
        title:<Link to="/ThinkTwice"><h2>ThinkTwice Website Redesign</h2></Link>,
        about:  <ul>
                    <li><p>Concept</p></li>
                    <li><p>UI/UX Design</p></li>
                </ul>,
        picture: <Link to="/ThinkTwice"><img src={ttmockup} alt="thiktwice mockup" height="450" width="706"/></Link>,
    },
    {
        key: "3",
        // link to figma prototype
        title:"Rafiki Digital Website Redesign",
        about:  <ul>
                    <li><p>Concept</p></li>
                    <li><p>UI/UX Design</p></li>
                </ul>,
        picture: <img src={rdmockup} alt="rafiki mockup" height="453" width="510"/>,
    },
]

const ProjectSection = () => {
    return (
        <>
            {items.map(item => {
                return (
                    <>
                        <div className="section-line"></div>
                        <div className="container">
                            <div className="content">
                                <div className="text">
                                    <h2>{item.title}</h2>
                                    <br/><br/>
                                    {item.about}   
                                </div>    
                                <div className="mockup">
                                    {item.picture}
                                </div>
                            </div>    
                        </div>
                    </>    
                );
            })}    
        </>
    )
}

export default ProjectSection
