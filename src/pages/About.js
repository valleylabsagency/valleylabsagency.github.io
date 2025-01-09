import React, { useState } from 'react';
import styled from 'styled-components';
import image from '../assets/images/tyler.jpg'

const About = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <Container>
      <h1>Valley Labs Team</h1>
      <Card onClick={openModal}>
        <img src={image} alt="Tyler Valley" />
        <h2>Tyler Valley</h2>
        <p>Founder and Director</p>
      </Card>

      {modalOpen && (
        <ModalOverlay onClick={closeModal}>
          <ModalContent onClick={e => e.stopPropagation()}>
            <CloseButton onClick={closeModal}>X</CloseButton>
            <h2>Tyler Valley</h2>
            <p>Founder and Director</p>
            <p>
              Tyler Valley is the founder and director of Valley Labs. He
              specializes in software development, project management, and
              client relations, ensuring the highest standards for every
              project.
            </p>
          </ModalContent>
        </ModalOverlay>
      )}
    </Container>
  );
};

export default About;

// Styled Components
const Container = styled.div`
  padding: 5rem 2rem;
  text-align: center;
`;

const Card = styled.div`
  display: inline-block;
  width: 200px;
  padding: 1rem;
  margin: 1rem;
  background: var(--light-grey);
  border-radius: 8px;
  cursor: pointer;
  text-align: center;
  &:hover {
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  }
  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
  }
  h2 {
    margin: 1rem 0 0.5rem;
  }
  p {
    margin: 0;
    color: var(--dark-grey);
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  max-width: 500px;
  width: 90%;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: var(--navy);
  color: white;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
  border-radius: 50%;
`;
