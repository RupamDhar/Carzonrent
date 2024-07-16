import { useEffect } from 'react';
import React from 'react';
import TravelSolutions from '../components/TravelSolutions';
import TravelExperience from '../components/TravelExperience';
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar';
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
            <Navbar />


            <HeroSection />


            <TravelExperience />


            <TravelSolutions />
        </>
    );
}

export default App;
