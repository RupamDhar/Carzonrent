import React from 'react'
import './CompanyStats.css'

const CompanyStats = () => {
    return (
        <div className='company-stats-section'>
            <img src="https://www.carzonrent.com/webcor/images/banner/achievementsbanner.png" alt="" />
            <div className="stats-wrapper">
                
                <div className="company-stat">
                    <img src="https://www.carzonrent.com/webcor/images/icons/happycustomers.svg" alt="" />
                    <div className="stat-detail">
                        <div className="stat-detail-header">10 Million+</div>
                        <div className="stat-detail-sub-header">Happy Customers</div>
                    </div>
                </div>
                
                <div className="company-stat">
                    <img src="https://www.carzonrent.com/webcor/images/icons/corporateserved.svg" alt="" />
                    <div className="stat-detail">
                        <div className="stat-detail-header">600+</div>
                        <div className="stat-detail-sub-header">Corporates Served</div>
                    </div>
                </div>
                
                <div className="company-stat">
                    <img src="https://www.carzonrent.com/webcor/images/icons/23yrsservice%20excellence.svg" alt="" />
                    <div className="stat-detail">
                        <div className="stat-detail-header">24 Years</div>
                        <div className="stat-detail-sub-header">Of Service Excellence</div>
                    </div>
                </div>
                
                <div className="company-stat">
                    <img src="https://www.carzonrent.com/webcor/images/icons/servicingcities.svg" alt="" />
                    <div className="stat-detail">
                        <div className="stat-detail-header">79+</div>
                        <div className="stat-detail-sub-header">Servicing Cities</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompanyStats
