import React from 'react'
import './TravelExperience.css'

const TravelExperience = () => {
    return (
        <div className="elevate-travel-experiences-section">
            <h2 className='section-header'>Elevate Your Travel Experience</h2>
            <p>Unmatched Professionalism. Impeccable Service. <br /> Your Perfect Chauffeur-Driven Experience</p>
            <div className="travel-experience-offerings">
                <div className="travel-experience-offerings-left">
                    <img src="https://www.carzonrent.com/webcor/images/banner/travel_experience_single.webp" className='offering-img left hidden-img' alt="" />
                </div>
                <div className="travel-experience-offerings-right">
                    <img src="https://www.carzonrent.com/webcor/images/banner/no-waitingcancelattion.webp" className='offering-img right hidden-img' alt="" />
                    <img src="https://www.carzonrent.com/webcor/images/banner/nosurgepricingbnr.webp" className='offering-img right hidden-img' alt="" />
                </div>
            </div>
        </div>
    )
}

export default TravelExperience
