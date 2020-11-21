import React from 'react'
import ConceptSection from '../components/ConceptSection'
import ContextSection from '../components/ContextSection'
import ProjectBanner from '../components/ProjectBanner'
import DesignSection from '../components/DesignSection'
import FinalSection from '../components/FinalSection'
import GetInTouchSection from '../components/GetInTouchSection'
import NextSection from '../components/NextSection'
import OutcomeSection from '../components/OutcomeSection'

const DontDieFood = ({ width }) => {
    console.log(width, 'dont die width')
    return (
        <div>
            <ProjectBanner projectName={'DDF'} />
            <ContextSection  />
            <ConceptSection />
            {/* {width < 620 ? null : <DesignSection />} */}
            <DesignSection />
            <FinalSection />
            <OutcomeSection />
            <NextSection />
            <GetInTouchSection />
        </div>
    )
}

export default DontDieFood
