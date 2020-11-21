import React from 'react'
import AboutSection from '../components/AboutSection'
import Banner from '../components/Banner'
import ProjectSection from '../components/ProjectSection'

const Home = ({isMobile}) => {
    console.log(isMobile, 'isMobile');

    return (
        <>
            <Banner />
            <ProjectSection />
            <AboutSection />
        </>
    )
}

export default Home
