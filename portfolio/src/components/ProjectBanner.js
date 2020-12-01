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

    const getTitleForProject = (projectName) => {
        switch (projectName) {
            case 'DDF':
                return <h2>Don't Die Food</h2>
            case 'TT':
                return <h2>ThinkTwice</h2>
            default:
                break;
        }
    }
    
    return (
        <>
            <div className="project-hero">
                <h2 className="project-title">{getTitleForProject(projectName)}</h2>
                <img className="project-img" src={getImageForProject(projectName)} alt="ddf mockup" height="75%" width="75%"/>
            </div>
            <div className="project-section-line"></div>
        </>
    )
}

export default ProjectBanner
