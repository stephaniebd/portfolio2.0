import React from 'react'
import ProjectBanner from '../components/ProjectBanner'
import TTConceptSection from '../components/TTConceptSection'
import TTContextSection from '../components/TTContextSection'
import TTDesignSection from '../components/TTDesignSection'
const ThinkTwice = () => {
    return (
        <div>
            <ProjectBanner projectName={'TT'} />
            <TTContextSection />
            <TTConceptSection />
            <TTDesignSection />
        </div>
    )
}

export default ThinkTwice
