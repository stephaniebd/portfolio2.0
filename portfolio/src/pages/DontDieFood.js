import React from 'react'
import ConceptSection from '../components/ConceptSection'
import ContextSection from '../components/ContextSection'
import DDFBanner from '../components/DDFBanner'
import DesignSection from '../components/DesignSection'
import FinalSection from '../components/FinalSection'

const DontDieFood = () => {
    return (
        <div>
            <DDFBanner />
            <ContextSection  />
            <ConceptSection />
            <DesignSection />
            <FinalSection />
        </div>
    )
}

export default DontDieFood
