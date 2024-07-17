import React, { useEffect } from 'react'
import './TravelSolutions.css'

const TravelSolutions = () => {

    useEffect(() => {
        const skills = document.querySelectorAll('.travel-solution');

        const observer = new IntersectionObserver(entries => {
            entries.forEach((entry, index) => {
                setTimeout(() => {
                    if (entry.isIntersecting) entry.target.classList.add('show-sol');
                }, 100 * index);
            })
        }, { threshold: 1 })

        skills.forEach(skill => observer.observe(skill))

    }, []);


    return (
        < div className="premium-travel-solutions" >
            <h2 className="section-header" style={{ paddingBottom: '60px' }}>Explore Our Premium Travel Solutions</h2>
            <div className="premium-travel-solutions-wrapper">

                <div className="travel-solution hidden-sol-left">
                    <img src="	https://www.carzonrent.com/webcor/images/banner/corporate-travels.webp" className='travel-solution-img' alt="" />
                    <div className="travel-solution-info">
                        <span className="travel-sol-info-header">
                            Corporate Travel
                            <i className="fa-solid fa-arrow-right arrow"></i>
                        </span>
                        <div className="travel-sol-info-body">
                            Carzonrent offers flexible services, allowing corporate travelers to move to a designated area as per their convenience. It ensures reliable transportation for meetings, site visits, and other work-related activities.
                        </div>
                    </div>
                </div>

                <div className="travel-solution hidden-sol-right">
                    <div className="travel-solution-info">
                        <span className="travel-sol-info-header">
                            SME Travel
                            <i className="fa-solid fa-arrow-right arrow"></i>
                        </span>
                        <div className="travel-sol-info-body">
                            Elevate your SME travel experience with Carzonrent. Enjoy customized solutions, efficient services, and seamless journeys that cater specifically to the unique travel needs of small and medium-sized enterprises. Transform your business travel operations with Carzonrent to foster growth.
                        </div>
                    </div>
                    <img src="https://www.carzonrent.com/webcor/images/banner/sme.webp" className='travel-solution-img' alt="" />
                </div>

                <div className="travel-solution hidden-sol-left">
                    <img src="	https://www.carzonrent.com/webcor/images/banner/aviationtravels.webp" className='travel-solution-img' alt="" />
                    <div className="travel-solution-info">
                        <span className="travel-sol-info-header">
                            Aviation Travel Solutions
                            <i className="fa-solid fa-arrow-right arrow"></i>
                        </span>
                        <div className="travel-sol-info-body">
                            Say goodbye to the hassles of parking, navigating traffic, and worrying about missing your flight.Our dedicated team is here to assist you every step of the way, catering to your specific requirements and ensuring that your airport travel experience is nothing short of exceptional.
                        </div>
                    </div>
                </div>

                <div className="travel-solution hidden-sol-right">
                    <div className="travel-solution-info">
                        <span className="travel-sol-info-header">
                            Gov & PSU's Travel
                            <i className="fa-solid fa-arrow-right arrow"></i>
                        </span>
                        <div className="travel-sol-info-body">
                            At Carzonrent, we recognize the specific travel needs of Government bodies and Public Sector Units (PSUs). Our specialized solutions ensure streamlined, reliable, and efficient transportation services that comply with government standards and procedures.
                        </div>
                    </div>
                    <img src="	https://www.carzonrent.com/webcor/images/banner/airporttravels.webp" className='travel-solution-img' alt="" />
                </div>

                <div className="travel-solution hidden-sol-left">
                    <img src="	https://www.carzonrent.com/webcor/images/banner/hoteltravels.webp" className='travel-solution-img' alt="" />
                    <div className="travel-solution-info">
                        <span className="travel-sol-info-header">
                            Hospitality Travel
                            <i className="fa-solid fa-arrow-right arrow"></i>
                        </span>
                        <div className="travel-sol-info-body">
                            Carzonrent's Hospitality Travel Solutions provide reliable, dedicated cars for staff & seamless transportation for guests, enhancing their stay with punctual, comfortable rides and transparent billing. Drive customer satisfaction and loyalty with our specialized hotel-centric services.
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default TravelSolutions
