import React from 'react';
import './Footer.css'; // Import the custom CSS file

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-inner">
                <div className="footer-container">
                    <div className="footer-column">
                        <div className="footer-widget">
                            <div className="widget-title">
                                <h4>Quick Links</h4>
                            </div>
                            <div className="widget-content">
                                <ul className="footer-links">
                                    <li><a href="/">Home</a></li>
                                    <li><a href="/about-us">About Us</a></li>
                                    <li><a href="/faqs">FAQ’s</a></li>
                                    <li><a href="/blog">Blog</a></li>
                                    <li><a href="/media">Media Center</a></li>
                                    <li><a href="/contact-us">Contact Us</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="footer-widget">
                            <div className="widget-title">
                                <h4>Terms & Policies</h4>
                            </div>
                            <div className="widget-content">
                                <ul className="footer-links">
                                    <li><a href="/terms-of-use">Term & Conditions</a></li>
                                    <li><a href="/privacy-policy">Privacy policies</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="footer-widget">
                            <div className="widget-title">
                                <h4>Car Rental Cities</h4>
                            </div>
                            <div className="widget-content">
                                <ul className="footer-links">
                                    <li><a href="/car-rental-delhi">Delhi</a></li>
                                    <li><a href="/car-rental-bangalore">Bangalore</a></li>
                                    <li><a href="/car-rental-mumbai">Mumbai</a></li>
                                    <li><a href="/car-rental-hyderabad">Hyderabad</a></li>
                                    <li><a href="/car-rental-chennai">Chennai</a></li>
                                    <li><a href="/car-rental-pune">Pune</a></li>
                                    <li><a href="/car-rental-kolkata">Kolkata</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="footer-widget">
                            <div className="widget-title">
                                <h4 style={{color:'white'}}>placeholder</h4>
                            </div>
                            <div className="widget-content">
                                <ul className="footer-links">
                                    <li><a href="/car-rental-bangalore">Ahmedabad</a></li>
                                    <li><a href="/car-rental-mumbai">Jaipur</a></li>
                                    <li><a href="/car-rental-hyderabad">Vishakhapatnam</a></li>
                                    <li><a href="/car-rental-chennai">Noida</a></li>
                                    <li><a href="/car-rental-pune">Gurgaon</a></li>
                                </ul>
                            </div>
                        </div>
                        {/* <div className="footer-widget">
                            <div className="widget-content">
                                <div className="app-stores">
                                    <div className="app-store">
                                        <a target="_blank" rel="noopener noreferrer" href="https://play.google.com/store/apps/details?id=carzonrent.crdapp&amp;hl=en_IN">
                                            <img className="app-store-icon" src="/webcor/images/icons/download_on_play_store.svg" alt="Download On Play Store"/>
                                        </a>
                                    </div>
                                    <div className="app-store">
                                        <a target="_blank" rel="noopener noreferrer" href="https://apps.apple.com/in/app/carzonrent/id1095251103">
                                            <img className="app-store-icon" src="/webcor/images/icons/donload_on_apple_store.svg" alt="Download On Apple Store"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                    <div className="footer-bottom">
                        <div className="footer-bottom-content">
                            <div className="footer-logo">
                                <img src="	https://www.carzonrent.com/webcor/images/icons/Carzonrent.svg" alt="Carzonrent logo" className="footer-logo-img" />
                            </div>
                            <div className="social-media">
                                <ul className="social-media-links">
                                    <li><a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/carzonrent">
                                        <img src="	https://www.carzonrent.com/webcor/images/icons/facebook_icon.svg" alt="Facebook" />
                                    </a></li>
                                    <li><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/carzonrentin/?hl=hi">
                                        <img src="	https://www.carzonrent.com/webcor/images/icons/instagram.svg" alt="Instagram" />
                                    </a></li>
                                    <li><a target="_blank" rel="noopener noreferrer" href="https://twitter.com/CarzonrentIN">
                                        <img src="	https://www.carzonrent.com/webcor/images/icons/twitter.svg" alt="Twitter" />
                                    </a></li>
                                    <li><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/carzonrent-india-pvt-ltd">
                                        <img src="	https://www.carzonrent.com/webcor/images/icons/linkedin.svg" alt="LinkedIn" />
                                    </a></li>
                                </ul>
                            </div>
                            <div className="contact-info">
                                <a href="tel:011-4184 1212" className="phone-link">
                                    <img src="	https://www.carzonrent.com/webcor/images/icons/mobile phone solid.svg" className="phone-icon" alt="Phone Icon" />
                                    011-43083000
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
