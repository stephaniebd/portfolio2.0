import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/ProjectSection.css';

import ddfmockup from "../assets/2 mockups DDF.png";
import ttmockup from "../assets/mockup TT.png";
import rdmockup from "../assets/mockup RD.png";


const items = [
    {
        key: "1",
        title:"Don’t Die Food Website App",
        about:  <ul>
                    <li><p>Concept</p></li>
                    <li><p>UI/UX Design</p></li>
                    <li><p>Web Development</p></li>
                </ul>,
        picture: <img src={ddfmockup} alt="don't die food mockup" height="539" width="658"/>,
    },
    {
        key: "2",
        title:"ThinkTwice Website Redesign",
        about:  <ul>
                    <li><p>Concept</p></li>
                    <li><p>UI/UX Design</p></li>
                </ul>,
        picture: <img src={ttmockup} alt="thiktwice mockup" height="450" width="706"/>,
    },
    {
        key: "2",
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
                    </>    
                );
            })}
        </>
    )
}

export default ProjectSection
