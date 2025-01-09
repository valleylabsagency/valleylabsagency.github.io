// src/pages/Home.jsx

import React, { useState } from 'react';
import Jumbotron from '../components/Jumbotron';
import '../assets/CSS/Home.css'; // Import the CSS file

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
            
            <section className="section introduction">
                <h2>Introduction</h2>
                <p>
                    We are your custom software development partner, specializing in building intuitive and robust web and mobile applications tailored to your business needs.
                </p>
            </section>
            
            <section className="section development-process">
                <h2>Development Process</h2>
                <p>
                    Our development process is streamlined and client-focused. We collaborate closely with you at every stage, ensuring quality, transparency, and timely delivery of high-quality solutions.
                </p>
            </section>
            
            <section className="section recent-projects">
                <h2>Recent Projects</h2>
                <div className="project-display">
                    <h3>{projects[currentProjectIndex]}</h3>
                    <div className="project-navigation">
                        <button onClick={showPreviousProject} className="nav-button">◀</button>
                        <button onClick={showNextProject} className="nav-button">▶</button>
                    </div>
                </div>
            </section>
            
            <section className="section get-in-touch">
                <h2>Get in Touch</h2>
                <form className="contact-form">
                    <div className="form-group">
                        <input type="text" placeholder="Name" required />
                    </div>
                    <div className="form-group">
                        <input type="email" placeholder="Email" required />
                    </div>
                    <div className="form-group">
                        <textarea placeholder="Your message" rows="5" required></textarea>
                    </div>
                    <button type="submit" className="submit-button">Send</button>
                </form>
            </section>
        </div>
    );
};

export default Home;
