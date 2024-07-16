import { useEffect } from 'react';
import React from 'react';
import './App.css';

function App() {

    useEffect(() => {
        const skills = document.querySelectorAll('.offering-img');

        const observer = new IntersectionObserver(entries => {
            entries.forEach((entry, index) => {
                setTimeout(() => {
                    if (entry.isIntersecting) entry.target.classList.add('show-img');
                }, 100 * index);
            })
        }, { threshold: 1 })

        skills.forEach(skill => observer.observe(skill))

    }, []);

    return (
        <>
            {/* Navbar */}
            <div className="navbar">
                <div className="left-logo">
                    <img src="https://www.carzonrent.com/webcor/images/img/cor_logo.svg?v=2028" alt="" />
                </div>

                <div className="nav-interact">
                    <div className="nav-hrefs-wrapper">
                        <div className="nav-hrefs" style={{ color: '#fc0' }}>
                            <img src="https://www.carzonrent.com/webcor/images/icons/discount-icon.svg" alt="" />
                            Travel Packages
                        </div>
                        <div className="nav-hrefs">Business Solutions</div>
                        <div className="nav-hrefs">Services</div>
                        <div className="nav-hrefs">Blog</div>
                        <div className="nav-hrefs">About Us</div>
                        <div className="nav-hrefs">Contact US</div>
                    </div>
                    <div className="login-signup-btn">
                        <i className="fa-solid fa-user"></i>
                        Login/SignUp
                    </div>
                </div>
            </div>


            {/* Hero Section */}
            <div className="hero-section">
                <div className="hero-section-stats-wrapper">
                </div>
            </div>


            {/* Elevate Your Travel Experience */}
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


            {/* Premium Travel Solutions */}
            <div className="premium-travel-solutions">
                <h2 className="section-header" style={{ paddingBottom: '60px' }}>Explore Our Premium Travel Solutions</h2>
                <div className="premium-travel-solutions-wrapper">
                    <div className="travel-solution">
                        <img src="	https://www.carzonrent.com/webcor/images/banner/corporate-travels.webp" className='travel-solution-img' alt="" />
                        <div className="travel-solution-info">
                            <span className="travel-sol-info-header">
                                Corporate Travel
                                <i className="fa-solid fa-arrow-right" style={{marginLeft:'20px'}}></i>
                            </span>
                            <div className="travel-sol-info-body">
                                Carzonrent offers flexible services, allowing corporate travelers to move to a designated area as per their convenience. It ensures reliable transportation for meetings, site visits, and other work-related activities.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
