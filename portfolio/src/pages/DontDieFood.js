import React from 'react'
import ConceptSection from '../components/ConceptSection'
import ContextSection from '../components/ContextSection'
import DDFBanner from '../components/DDFBanner'
import DesignSection from '../components/DesignSection'
import FinalSection from '../components/FinalSection'
import OutcomeSection from '../components/OutcomeSection'

const DontDieFood = () => {
    return (
        <div>
            <DDFBanner />
            <ContextSection  />
            <ConceptSection />
            <DesignSection />
            <FinalSection />
            <OutcomeSection />
        </div>
    )
}

export default DontDieFood
