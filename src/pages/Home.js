// src/pages/Home.jsx

import React, { useState } from 'react';
import Jumbotron from '../components/Jumbotron';
import '../assets/CSS/Home.css'; 
import tyler from '../assets/images/tyler.jpg'
import apps from '../assets/images/apps.jpg'
import iphone from '../assets/images/iphone.jpg'
import website from '../assets/images/website.jpg'
import design from '../assets/images/design.jpg'

const Home = () => {
    const projects = [
        "Odyssey Travel",
        "Dibacco Importing and Distributing",
        "Brewzle"
    ];

    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

    const showPreviousProject = () => {
        setCurrentProjectIndex((prevIndex) =>
            prevIndex === 0 ? projects.length - 1 : prevIndex - 1
        );
    };

    const showNextProject = () => {
        setCurrentProjectIndex((prevIndex) =>
            prevIndex === projects.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="home-container">
            <Jumbotron />
            
            <div className="about-section">
                <div className="sub-section">
                    <img src={apps} /> 
                    <div className="text" style={{alignItems: "flex-start"}}>
                        <h1>What Valley Labs Brings</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque volutpat velit vitae orci faucibus, eget laoreet mi ullamcorper. Maecenas finibus egestas arcu, non tempor enim mattis vel. Suspendisse potenti. Pellentesque fringilla nisi lectus, nec dapibus elit sagittis ut. Phasellus vel vulputate nisl. Suspendisse suscipit ultrices nunc, efficitur consectetur nisi facilisis vel. Pellentesque eget ultricies tortor. Nunc urna lorem, sollicitudin eget consectetur vitae, scelerisque nec turpis. Proin egestas lobortis condimentum.</p>
                    </div>
                </div>
                <div className="sub-section" style={{marginTop: "50px"}}>
                    
                    <div className="text" style={{alignItems: "flex-end", marginRight: "50px"}}>
                        <h1>About Tyler Valley</h1>
                        <p style={{textAlign: "right"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque volutpat velit vitae orci faucibus, eget laoreet mi ullamcorper. Maecenas finibus egestas arcu, non tempor enim mattis vel. Suspendisse potenti. Pellentesque fringilla nisi lectus, nec dapibus elit sagittis ut. Phasellus vel vulputate nisl. Suspendisse suscipit ultrices nunc, efficitur consectetur nisi facilisis vel. Pellentesque eget ultricies tortor. Nunc urna lorem, sollicitudin eget consectetur vitae, scelerisque nec turpis. Proin egestas lobortis condimentum.</p>
                    </div>
                    <img src={tyler} />
                </div>
            </div>
            <div className="services-section">
                <h2>Our Services</h2>
                
                <div className="service mobile-service">
                    <img src={iphone} alt="Mobile Applications Development" />
                    <h3>Mobile Applications Development</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque volutpat velit vitae orci faucibus, eget laoreet mi ullamcorper...</p>
                </div>

                <div className="service web-service">
                    <div className="service-left">
                        <img src={website} alt="Web Applications Development" />
                        <h3>Web Applications Development</h3>
                    </div>
                    <div className="service-right">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque volutpat velit vitae orci faucibus, eget laoreet mi ullamcorper...</p>
                    </div>
                </div>

                <div className="service uiux-service">
                    <div className="service-left">
                        <img src={design} alt="UI/UX Design" />
                        <h3>UI/UX Design</h3>
                    </div>
                    <div className="service-right">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque volutpat velit vitae orci faucibus, eget laoreet mi ullamcorper...</p>
                    </div>
                </div>
            </div>
            <div className="contact-banner">
                <h2>Interested? Let's get connected</h2>
                <button className="contact-button">Contact Us</button>
            </div>
        </div>
    );
};

export default Home;
