import React, { useState } from 'react';
import Jumbotron from '../components/Jumbotron';
import '../assets/CSS/Home.css'; 
import tyler from '../assets/images/tyler.jpg'
import apps from '../assets/images/apps.jpg'
import iphone from '../assets/images/iphone.jpg'
import website from '../assets/images/website.jpg'
import design from '../assets/images/design.jpg'
import odyssey from '../assets/images/odyssey.JPEG'
import kyleandmal from '../assets/images/kyleandmal.png'
import dateish from '../assets/images/dateish.png'
import { FaExternalLinkAlt } from 'react-icons/fa';  // Icon for links
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

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

    const routeToContact = () => {
        navigate('/contact'); 
    }

    const caseStudies = [
        {
            image: odyssey,
            title: "Odyssey Travel",
            link: "/odyssey-travel",
            description: "A travel agency platform designed to streamline itinerary management, bookings, and communication for travel professionals and clients.",
            technologies: ["React Native", "Firebase", "Expo"]
        },
        {
            image: kyleandmal,
            title: "KyleandMal",
            link: "/kyleandmal",
            description: "A website for a local dog grooming business in Tallahassee, FL.",
            technologies: ["React.js", "SEO"]
        },
        {
            image: dateish,
            title: "Dateish",
            link: "/dateish",
            description: "A unique take on a dating app. Dateish provides a platform for people to meet naturally while enjoying music and events through the app.",
            technologies: ["React Native", "GraphQL", "AWS"]
        }
    ];

    return (
        <div className="home-container">
            <Jumbotron />
            
            <div id="about-section" className="about-section">
                <div id="digital-products" className="sub-section">
                    <img src={apps} /> 
                    <div className="text">
                        <h1>Digital products tailored to you</h1> 
                        <p>We create practical digital solutions that make your business workflow easier, so you can focus on what really matters. Whether you need a custom mobile app to enhance customer engagement or a web platform to streamline your operations, we build tools that fit your unique needs.</p>
                    </div>
                </div>
            </div>

            <h2 className="our-services">Our Services</h2>
            <div className="services-section">
                <div className="service mobile-service">
                    <img src={iphone} alt="Mobile Applications Development" />
                    <h3>Mobile Applications Development</h3>
                    <p>Brings your ideas to life with innovative mobile apps that captivate your users and deliver real value.</p>
                </div>

                <div className="service web-service">
                    <div className="service-left">
                        <img src={website} alt="Web Applications Development" />
                        <h3>Web Applications Development</h3>
                    </div>
                    <div className="service-right">
                        <p>Your website should work as hard as you do. We create robust, scalable web platforms that simplify processes.</p>
                    </div>
                </div>

                <div className="service uiux-service">
                    <div className="service-left">
                        <img src={design} alt="UI/UX Design" />
                        <h3>UI/UX Design</h3>
                    </div>
                    <div className="service-right">
                        <p>Your customers deserve an intuitive, engaging experience. We specialize in creating clean, user-friendly interfaces.</p>
                    </div>
                </div>
            </div>

            {/* Case Studies Section */}
            <h2 className="case-studies-header">Case Studies</h2>
            <div className="case-studies-section">
                {caseStudies.map((caseStudy, index) => (
                    <div key={index} className="case-study-card">
                        <img src={caseStudy.image} alt={caseStudy.title} />
                        <h3>
                            {caseStudy.title}
                            <a href={caseStudy.link} className="case-study-link" target="_blank">
                                {/*<FaExternalLinkAlt /> */}
                            </a>
                        </h3>
                        <p>{caseStudy.description}</p>
                        <div className="tech-bubbles">
                            {caseStudy.technologies.map((tech, i) => (
                                <span key={i} className="tech-bubble">{tech}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="contact-banner">
                <h2>Let's get connected.</h2>
                <button onClick={routeToContact} className="contact-button">Contact Us</button>
            </div>
        </div>
    );
};

export default Home;
