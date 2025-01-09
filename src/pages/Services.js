import React from 'react';
import styled from 'styled-components';

const Services = () => (
  <Container>
    <h1>Our Services</h1>
    <p>
      At Valley Labs, we specialize in creating custom web and mobile applications designed to drive business success. Our team leverages cutting-edge technology and industry best practices to deliver solutions that are robust, scalable, and user-friendly.
    </p>
    <p>
      Our projects range from ecommerce platforms and corporate websites to complex mobile apps and enterprise software. We collaborate closely with clients to ensure that our solutions align with their vision and goals.
    </p>
  </Container>
);

export default Services;

const Container = styled.div`
  padding: 5rem 2rem;
  text-align: center;
`;
