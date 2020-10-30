import React from 'react'
import '../styles/ProjectSection.css';
import ddfmockup from "../assets/2 mockups DDF.png";


const ProjectSection = () => {
    return (
        <>
            <div className="section-line"></div>
            <div className="content">
                <div className="text">
                    <h1>Don’t Die Food Website App</h1>
                    <ul>
                        <li><p>Concept</p></li>
                        <li><p>UI/UX Design</p></li>
                        <li><p>Web Development</p></li>
                    </ul>    
                </div>
                <div className="mockup">
                    <img src={ddfmockup} alt="don't die food mockup"/>
                </div>
            </div>
        </>
    )
}

export default ProjectSection

