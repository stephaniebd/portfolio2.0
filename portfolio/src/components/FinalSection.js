import React from 'react'

import '../styles/FinalSection.css';

import mockupfinalr1 from "../assets/3 mockups DDF Final r.png";
import mockupfinalr2 from "../assets/2 mockups DDF Final r.png";
import mockupfinalr3 from "../assets/3 mockups2 DDF Final r.png";

const items = [
    {
        key: "1",
        picture: <img src={mockupfinalr1} alt="final mockup" height="465" width="769.17"/>,
        explanations: 'The user can add many food items to give away in the form with the category, description, and picture, so they don’t have to go back and forth to fill in the information.',
    },
    {
        key: "2",
        picture: <img className="mockup-finalr2" src={mockupfinalr2} alt="final mockup" height="465" width="511.5"/>,
        explanations: 'They can find recipes according to the food item they entered in the form and see what ingredient they already have on hand to proceed.'
    },
    {
        key: "3",
        picture: <img src={mockupfinalr3} alt="final mockup" height="465" width="769.17"/>,
        explanations: 'The user can browse on the community page to see what is available to share, see the details, and connect to make arrangements.'
    },
]


const FinalSection = () => {
    return (
        <>
            <div className="final-section">
                <div className="final-h2">
                    <h2>Final result</h2>
                </div>
                <div className="final-section-grid">
                    {items.map(item => {
                    return (
                            <>
                                <div className="img-gr">
                                    {item.picture}
                                </div>
                                <div className="details-text">
                                    <p>{item.explanations}</p>
                                </div>
                            </>    
                        );
                    })}  
                </div>
            </div>
        </>
    )
}

export default FinalSection
