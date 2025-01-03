import React from 'react';
import Jumbotron from '../components/Jumbotron';

const Home = () => {
    return (
        <div>
            <Jumbotron />
            <section style={{ backgroundColor: 'grey', color: 'white', padding: '20px' }}>
                <h2>Introduction</h2>
                <p>Your custom software development partner for web and mobile applications.</p>
            </section>
            <section style={{ backgroundColor: 'gold', color: 'black', padding: '20px' }}>
                <h2>Development Process</h2>
                <p>We follow a streamlined process to deliver high-quality solutions.</p>
            </section>
            <section style={{ backgroundColor: 'grey', color: 'white', padding: '20px' }}>
                <h2>Case Studies</h2>
                <p>Coming Soon...</p>
            </section>
            <section style={{ backgroundColor: 'gold', color: 'black', padding: '20px' }}>
                <h2>Get in Touch</h2>
                <form>
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <textarea placeholder="Your message" />
                    <button>Send</button>
                </form>
            </section>
        </div>
    );
};

export default Home;