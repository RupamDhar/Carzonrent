import React from 'react';
import { Accordion } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Faq.css';

const Faq = () => {
    return (
        <div className="container">
            <div className="faq_panel-inner-wrapper">
                <div className="faq_header">
                    <div className="titlefaq">
                        <h3 className="typography36faq">FAQ's</h3>
                    </div>
                    <div className="sectionarrowrightfaq">
                        <a href="/faqs" className="viewalllink">View All</a>
                    </div>
                </div>

                <div className="faq_inner_wrapper_content">
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0" className="accordion-item faq_item_design_wrapper">
                            <Accordion.Header className="accordion-header">
                                {/* <button className="faq_title_style_one accordion-button"> */}
                                    How do I book a car with Carzonrent?
                                {/* </button> */}
                            </Accordion.Header>
                            <Accordion.Body className="accordion-body faqontentanswer">
                                <p> Simply visit our website, select your preferred location, dates, and car model, and proceed to the booking process. You can also give us a call or use our mobile app for a convenient booking experience.</p>
                            </Accordion.Body>
                        </Accordion.Item>

                        <hr />

                        <Accordion.Item eventKey="1" className="accordion-item faq_item_design_wrapper">
                            <Accordion.Header className="accordion-header">
                                {/* <button className="faq_title_style_one accordion-button"> */}
                                    What types of cars are available for Rent?
                                {/* </button> */}
                            </Accordion.Header>
                            <Accordion.Body className="accordion-body faqontentanswer">
                                <p>We offer a wide range of cars to suit different needs and preferences. Our fleet includes compact cars, sedans, SUVs, luxury vehicles.</p>
                            </Accordion.Body>
                        </Accordion.Item>

                        <hr />

                        <Accordion.Item eventKey="2" className="accordion-item faq_item_design_wrapper">
                            <Accordion.Header className="accordion-header">
                                {/* <button className="faq_title_style_one accordion-button"> */}
                                    Are there any additional charges or hidden fees?
                                {/* </button> */}
                            </Accordion.Header>
                            <Accordion.Body className="accordion-body faqontentanswer">
                                <p>The charges displayed during the booking process include the rental fee, taxes, and any applicable fees. We strive to keep our pricing clean and upfront, ensuring no surprises when you pick up the car.</p>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>
        </div>
    );
};

export default Faq;
