import React, { useState } from 'react';
import styled from 'styled-components';

const projects = [
  {
    id: 1,
    name: "Odyssey Travel",
    type: "Web Application",
    image: "/path/to/odyssey-image.jpg",
    description: "Odyssey Travel is a web application that helps users find and book travel experiences."
  },
  {
    id: 2,
    name: "Dibacco Importing and Distributing",
    type: "Enterprise Website",
    image: "/path/to/dibacco-image.jpg",
    description: "A comprehensive website for Dibacco, streamlining their import and distribution processes."
  },
  {
    id: 3,
    name: "Brewzle",
    type: "Mobile Application",
    image: "/path/to/brewzle-image.jpg",
    description: "Brewzle is a mobile app for beer enthusiasts to explore breweries, beers, and events."
  }
];

const CaseStudies = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <Container>
      <h1>Case Studies</h1>
      <CardContainer>
        {projects.map(project => (
          <Card key={project.id} onClick={() => openModal(project)}>
           {/*<img src={project.image} alt={project.name} /> */}
            <h2>{project.name}</h2>
            <p>{project.type}</p>
          </Card>
        ))}
      </CardContainer>

      {selectedProject && (
        <ModalOverlay onClick={closeModal}>
          <ModalContent onClick={e => e.stopPropagation()}>
            <CloseButton onClick={closeModal}>X</CloseButton>
            <img src={selectedProject.image} alt={selectedProject.name} style={{ width: '100%', borderRadius: '8px' }} />
            <h2>{selectedProject.name}</h2>
            <p><strong>Type:</strong> {selectedProject.type}</p>
            <p>{selectedProject.description}</p>
          </ModalContent>
        </ModalOverlay>
      )}
    </Container>
  );
};

export default CaseStudies;

const Container = styled.div`
  padding: 5rem 2rem;
  text-align: center;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Card = styled.div`
  width: 220px;
  margin: 1rem;
  padding: 1rem;
  background: var(--light-grey);
  border-radius: 8px;
  cursor: pointer;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);

  img {
    width: 100%;
    height: 140px;
    object-fit: cover;
    border-radius: 4px;
  }

  h2 {
    margin: 1rem 0 0.5rem;
  }

  p {
    margin: 0;
    color: var(--dark-grey);
  }

  &:hover {
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  }
`;

const ModalOverlay = styled.div`
  /* Same as About modal overlay */
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
  /* Same as About modal content styling */
  background: white;
  padding: 2rem;
  border-radius: 8px;
  max-width: 500px;
  width: 90%;
  position: relative;
  text-align: left;
`;

const CloseButton = styled.button`
  /* Same as About close button styling */
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
