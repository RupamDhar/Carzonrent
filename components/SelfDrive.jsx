import React from 'react'
import './SelfDrive.css'

const SelfDrive = () => {
    return (
        <div className='self-drive-section'>
            <div className="section-header">Myles- Self Drive & Subscription</div>
            <div className="banner-section">
                <img src="https://www.carzonrent.com/webcor/images/banner/selfdrivebannerimg.png" alt="" />
                <div className="banner-info-wrapper">
                    <div className="banner-info">
                        <div className="banner-info-text">
                            <span className="banner-info-header">
                                Looking for a <br />Self Drive Rental?
                            </span> <br />
                            Find the best self drive cars for you.
                        </div>
                        <button className="banner-info-btn">Click to Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SelfDrive
