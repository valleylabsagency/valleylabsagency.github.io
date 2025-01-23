import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef(); // Create a reference for the form
  const [status, setStatus] = useState({ message: '', type: '' }); // For showing submission status
  const [opacity, setOpacity] = useState(1); // Controls opacity for fade-out

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ message: 'Submitting...', type: 'info' });
    setOpacity(1); // Reset opacity when a new message is set

    emailjs
      .sendForm(
        'service_ch1wbye', // Replace with your service ID
        'template_ixbtfmc', // Replace with your template ID
        formRef.current, // Pass the form reference
        'Ran8EZha4UhUPMb11' // Replace with your public key
      )
      .then(
        () => {
          setStatus({ message: 'Message sent successfully!', type: 'success' });
          formRef.current.reset(); // Clear the form after submission
        },
        (error) => {
          console.error('Failed to send email:', error);
          setStatus({ message: 'Failed to send message. Please try again.', type: 'error' });
        }
      );

    // Gradually fade out the alert
    setTimeout(() => {
      const fadeOut = setInterval(() => {
        setOpacity((prev) => {
          if (prev <= 0.1) {
            clearInterval(fadeOut); // Stop fading once opacity is near zero
            setStatus({ message: '', type: '' }); // Hide the alert completely
            return 0;
          }
          return prev - 0.1; // Decrease opacity gradually
        });
      }, 200); // Adjust the interval to control the speed of fading
    }, 2000); // Start fading after 3 seconds
  };

  return (
    <Container>
      {/* Alert Section */}
      {status.message && (
        <Alert type={status.type} style={{ opacity }}>
          {status.message}
        </Alert>
      )}

      {/* Heading Section */}
      <HeadingSection>
        <MainHeading>Ready? Let's Talk</MainHeading>
        <SubHeading>
          Our team is ready to respond to every inquiry, no matter the size of your goals. Tell us a little about yourself, and we'd love to get connected.
        </SubHeading>
      </HeadingSection>

      {/* Contact Form */}
      <FormSection>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />
          <Input
            type="email"
            name="reply_to"
            placeholder="Your Email"
            required
          />
          <TextArea
            name="message"
            placeholder="Your Message"
            required
          ></TextArea>
          <SubmitButton type="submit">Submit</SubmitButton>
        </Form>
      </FormSection>

      {/* Contact Info Box */}
      <ContactBox>
        <BigText>Valley Labs</BigText>
        <MediumText>Email:</MediumText>
        <SmallText>tyler@valleylabsagency.com</SmallText>
        <MediumText>Phone:</MediumText>
        <SmallText>(448) 488-3464</SmallText>
      </ContactBox>
    </Container>
  );
};

export default Contact;

// Styled Components
const Container = styled.div`
  padding: 20em 0;
  font-family: 'Mukta', sans-serif;
  @media (max-width: 542px) {
    padding: 25em 0;
  }
`;

const HeadingSection = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const MainHeading = styled.h1`
  font-size: 66px;
  color: rgba(6, 27, 176, 1);
  font-weight: 700;
  margin-bottom: 1rem;
  @media (max-width: 700px) {
    font-size: 40px;
  }
`;

const SubHeading = styled.h2`
  font-size: 32px;
  color: rgba(118, 185, 240, 1);
  font-weight: 300;
  margin-bottom: 1rem;
  width: 1032px;
  margin: auto;

  @media (max-width: 1056px) {
    width: 700px !important;
  }

  @media (max-width: 700px) {
    width: 400px !important;
    font-size: 24px;
  }
  @media (max-width: 408px) {
    width: 300px !important;
    font-size: 22px;
  }
`;

const FormSection = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 4rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 60%;
  max-width: 800px;
  gap: 1.5rem;
`;

const Input = styled.input`
  padding: 1rem;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

const TextArea = styled.textarea`
  padding: 1rem;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  height: 150px;
`;

const SubmitButton = styled.button`
  padding: 1rem;
  font-size: 18px;
  color: white;
  background-color: rgba(6, 27, 176, 1);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background-color: rgba(6, 27, 176, 0.9);
  }
`;

const Alert = styled.div`
  position: fixed;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  z-index: 50;
  transition: opacity 0.5s ease-in-out;

  ${({ type }) =>
    type === 'success' &&
    `
    color: white;
    background-color: rgba(6, 27, 176, 1);
  `}

  ${({ type }) =>
    type === 'error' &&
    `
    color: white;
    background-color: #d9534f; /* Bootstrap danger red */
  `}

  ${({ type }) =>
    type === 'info' &&
    `
    color: white;
    background-color: rgba(0, 123, 255, 1); /* Bootstrap info blue */
  `}
`;

const ContactBox = styled.div`
  background-color: rgba(6, 27, 176, 1);
  color: white;
  width: 50%;
  margin: 0 auto;
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
`;

const BigText = styled.h1`
  font-size: 36px;
  margin-bottom: 1rem;
`;

const MediumText = styled.h2`
  font-size: 24px;
  color: rgba(200, 200, 200, 1);
  margin-bottom: 0.5rem;
`;

const SmallText = styled.p`
  font-size: 20px;
  margin-bottom: 1rem;
`;
