import { useEffect } from 'react';
import React from 'react';
import TravelSolutions from '../components/TravelSolutions';
import TravelExperience from '../components/TravelExperience';
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar';
import OurServices from '../components/OurServices';
import CompanyStats from '../components/CompanyStats';
import './App.css';
import SelfDrive from '../components/SelfDrive';
import WhyChooseUs from '../components/WhyChooseUs';
import Faq from '../components/Faq';
import Footer from '../components/Footer';

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
            <Navbar />


            <HeroSection />


            <TravelExperience />


            <TravelSolutions />


            <OurServices />


            <CompanyStats />


            <SelfDrive />


            {/* about us */}
            <div className="about-us-wrapper">
                <div className="about-us">
                    <div className="about-us-header">About Us</div>
                    <div className="about-us-body">
                        Carzonrent is India's leading premium mobility solution provider, covering 79 cities nationwide, founded to revolutionize personal ground transportation. Pioneers of smart mobility, we offer reliable, tech-driven, business class solutions for seamless travel experiences.
                    </div>
                    <button className='read-more-btn'>Read More</button>
                </div>
            </div>


            <WhyChooseUs />


            <Faq />


            <Footer />
        </>
    );
}

export default App;
