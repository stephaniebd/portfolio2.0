import React from 'react'
import '../styles/ProjectBanner.css';

import ddfmockups from "../assets/3 phones mockup DDF.png";
import ttmockup from "../assets/mockup TT.png";

const ProjectBanner = ({projectName}) => {
    const getImageForProject = (projectName) => {
        switch (projectName) {
            case 'DDF':
                return ddfmockups
            case 'TT':
                return ttmockup
            default:
                break;
        }
    }
    
    return (
        <>
            <div className="DDF-hero">
                <h2 className="project-title">Don't Die Food</h2>
                <img className="ddf-img" src={getImageForProject(projectName)} alt="ddf mockup" height="75%" width="75%"/>
            </div>
            <div className="ddf-section-line"></div>
        </>
    )
}

export default ProjectBanner
