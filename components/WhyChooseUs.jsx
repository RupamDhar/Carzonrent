import React, { useRef } from 'react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
    const carouselRef = useRef(null);

    const scrollLeft = () => {
        carouselRef.current.scrollBy({
            left: -carouselRef.current.clientWidth / 4, // Adjust the scroll amount to show 4 items
            behavior: 'smooth'
        });
    };

    const scrollRight = () => {
        carouselRef.current.scrollBy({
            left: carouselRef.current.clientWidth / 4, // Adjust the scroll amount to show 4 items
            behavior: 'smooth'
        });
    };

    return (
        <div className='why-choose-us-section'>
            <div className="why-choose-us">
                <h2 className="why-choose-us-header">Why Choose Us?</h2>
                <div className="carousel-container">
                    {/* <button className="carousel-btn left" onClick={scrollLeft}>&lt;</button> */}
                    <div className="carousel-wrapper" ref={carouselRef}>
                        <div className="carousel-element">
                            <img src="https://www.carzonrent.com/webcor/images/banner/trainnedchauffeuer.png" alt="Element 1" />
                            <div className="carousel-text">Verified Chauffeurs</div>
                        </div>
                        <div className="carousel-element">
                            <img src="https://www.carzonrent.com/webcor/images/banner/outstationtravels.png" alt="Element 5" />
                            <div className="carousel-text">24*7 Customer Support</div>
                        </div>
                        <div className="carousel-element">
                            <img src="https://www.carzonrent.com/webcor/images/banner/airporttransfer.png" alt="Element 2" />
                            <div className="carousel-text">Live Location Tracking</div>
                        </div>
                        <div className="carousel-element">
                            <img src="https://www.carzonrent.com/webcor/images/banner/nosurgepricing.png" alt="Element 3" />
                            <div className="carousel-text">Transparent Billing</div>
                        </div>
                        {/* <div className="carousel-element">
                            <img src="https://www.carzonrent.com/webcor/images/banner/airporttransfer.png" alt="Element 4" />
                            <div className="carousel-text">Carousel Text</div>
                        </div> */}
                    </div>
                    {/* <button className="carousel-btn right" onClick={scrollRight}>&gt;</button> */}
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;
