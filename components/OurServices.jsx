import React from 'react'
import './OurServices.css'

const OurServices = () => {
    return (
        <div className='our-services-section'>
            <h2 className="section-header" style={{ color: '#384863' }}>Our Services</h2>

            <div className="business services-section">
                <div className="sub-section-header">
                    For Businesses
                    <span className='view-more'>View More &gt;</span>
                </div>
                <div className="category-card-wrapper">
                    <div className="category-card">
                        <img src="https://www.carzonrent.com/webcor/images/banner/etsservices.png" alt="" />
                        <div className="category-card-info">
                            <div className="category-card-header">Employee Transportation</div>
                            <div className="category-card-body">
                                Convenient and comfortable journeys for all your employees, from commutes to business trips.
                            </div>
                            <a href='#' className="category-card-href">Learn More</a>
                        </div>
                    </div>
                    
                    <div className="category-card">
                        <img src="https://www.carzonrent.com/webcor/images/banner/pluevvehicle.png" alt="" />
                        <div className="category-card-info">
                            <div className="category-card-header">Plug-EV</div>
                            <div className="category-card-body">
                            Embrace Eco-friendly mobility with our electric cabs, paving the path to a greener tomorrow.
                            </div>
                            <a href='#' className="category-card-href">Learn More</a>
                        </div>
                    </div>
                    
                    <div className="category-card">
                        <img src="https://www.carzonrent.com/webcor/images/banner/eventsservice.png" alt="" />
                        <div className="category-card-info">
                            <div className="category-card-header">Events</div>
                            <div className="category-card-body">
                            Seamless corporate event transportation with reliable cabs, experienced drivers, and efficient planning.
                            </div>
                            <a href='#' className="category-card-href">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>




            <div className="individuals services-section">
                <div className="sub-section-header">
                    For Individuals
                    <span className='view-more'>View More &gt;</span>
                </div>
                <div className="category-card-wrapper">
                    <div className="category-card">
                        <img src="https://www.carzonrent.com/webcor/images/banner/city-to-city-ride.png" alt="" />
                        <div className="category-card-info">
                            <div className="category-card-header">Intercity Rides</div>
                            <div className="category-card-body">
                            Enjoy comfortable and convenient transportation between cities, tailored to your specific needs.
                            </div>
                            <a href='#' className="category-card-href">Learn More</a>
                        </div>
                    </div>
                    
                    <div className="category-card">
                        <img src="https://www.carzonrent.com/webcor/images/banner/pluevvehicle.png" alt="" />
                        <div className="category-card-info">
                            <div className="category-card-header">Long Term Rentals</div>
                            <div className="category-card-body">
                            Enjoy extended rentals customized for your long-term convenience and freedom.
                            </div>
                            <a href='#' className="category-card-href">Learn More</a>
                        </div>
                    </div>
                    
                    <div className="category-card">
                        <img src="https://www.carzonrent.com/webcor/images/banner/eventsservice.png" alt="" />
                        <div className="category-card-info">
                            <div className="category-card-header">Airport Transfers</div>
                            <div className="category-card-body">
                            Enjoy smooth & convenient transportation to and from the airport, ensuring a stress-free travel experience.
                            </div>
                            <a href='#' className="category-card-href">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurServices
