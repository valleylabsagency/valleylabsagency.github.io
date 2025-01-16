import React from 'react';
import styled from 'styled-components';

const Contact = () => {
  return (
    <Container>
      {/* Heading Section */}
      <HeadingSection>
        <MainHeading>Ready? Let's Talk</MainHeading>
        <SubHeading>Our team is ready to respond to every inquiry, no matter the size of your goals. Tell us a little about yourself, and we'd love to get connected.</SubHeading>
      </HeadingSection>

      {/* Contact Form */}
      <FormSection>
        <Form>
          <Input type="text" placeholder="Your Name" />
          <Input type="email" placeholder="Your Email" />
          <TextArea placeholder="Your Message"></TextArea>
          <SubmitButton>Submit</SubmitButton>
        </Form>
      </FormSection>

      {/* Contact Info Box */}
      <ContactBox>
        <BigText>Valley Labs</BigText>
        <MediumText>Email:</MediumText>
        <SmallText>tyler@valleylabsagency.com</SmallText>
        <MediumText>Phone:</MediumText>
        <SmallText>(850) 900-6732</SmallText>
      </ContactBox>
    </Container>
  );
};

export default Contact;

// Styled Components
const Container = styled.div`
  padding: 5rem 0;
  font-family: 'Mukta', sans-serif;
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
`;

const SubHeading = styled.h2`
  font-size: 32px;
  color: rgba(118, 185, 240, 1);
  font-weight: 300;
  margin-bottom: 1rem;
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
