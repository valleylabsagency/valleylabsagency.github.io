import React from 'react';
import styled from 'styled-components';

const Contact = () => (
  <Container>
    <h1>Contact Us</h1>
    <p>
      Ready to bring your vision to life? Get in touch with Valley Labs for a free consultation. 
      Our team is here to help you at every step, from initial concept to final deployment.
    </p>
    <p>
      Email: tyler@valleylabsagency.com<br/>
      Phone: (850) 900-6732
    </p>
    {/* Add a contact form or additional contact info as needed */}
  </Container>
);

export default Contact;

const Container = styled.div`
  padding: 5rem 2rem;
  text-align: center;
`;
