import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';


const HomePageContainer = styled.div`
  display: flex;
  border-radius: 2%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: auto;
  margin: 0 15px;
  padding: 40px 10px;
  background-color: #f0f2f5;
  color: #333;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Content = styled.div`
  text-align: left;
  max-width: 600px;
  
  @media (max-width: 768px) {
    margin: 20px;
    text-align: center;
  }
`;

const Title = styled.h1`
  font-size: 48px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const Subtitle = styled.p`
  font-size: 20px;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    justify-content: center;
  }

`;

const Button = styled.button`
  background-color: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin-right: 20px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  &:hover {
    background-color: #333;
  }

  @media (max-width: 768px) {

  }
`;

const ImagePlaceholder = styled.div`
  background-color: #ccc;
  width: 400px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 300px; // Adjust the size as per your mobile design
    height: 200px; // Adjust the size as per your mobile design
    margin-top: 20px;
  }
`;

// Additional styled-components for the new section
const FeaturesSection = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 50px 20px;
  background-color: #fff; // Adjust the background color as needed

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Feature = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 300px;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

const FeatureIcon = styled.img` // Assuming you're using icons
  width: 48px;
  height: 48px;
  margin-bottom: 20px;
`;

const FeatureTitle = styled.h3`
  margin-bottom: 15px;
  font-size: 18px;
  font-weight: bold;
`;

const FeatureDescription = styled.p`
  margin-bottom: 20px;
`;

const FeatureButton = styled.button`
  padding: 10px 20px;
  border: none;
  background-color: #000;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #333;
  }
`;




const Home = () => {

  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate('/login');
  };
  return (
    <div>
      <Navbar />
      <HomePageContainer>
      <Content>
        <Title>Learn and refine your investment strategies</Title>
        <Subtitle>
          Experience the thrill of investing without the risk. Join our intuitive
          investment simulator platform and grow your financial acumen in a risk-
          free, real-time market environment.
        </Subtitle>
        <ButtonContainer>
        <Button onClick={handleStartClick}>Get Started</Button>
        <Button>Learn More</Button>
        </ButtonContainer>
      </Content>
      <ImagePlaceholder>
        <span>Profile Image</span>
      </ImagePlaceholder>
    </HomePageContainer>
    <FeaturesSection>
        <Feature>  
          <FeatureIcon src="./Images/settings.png" alt="Engage Icon" />
          <FeatureTitle>Engage with interactive features to enhance your learning</FeatureTitle>
          <FeatureDescription>
            Access a wide range of educational resources to grow your financial acumen.
          </FeatureDescription>
          <FeatureButton>Learn More</FeatureButton>
        </Feature>

        <Feature>
          <FeatureIcon src="path_to_informed_icon.png" alt="Informed Icon" />
          <FeatureTitle>Stay informed with real-time market data and analysis</FeatureTitle>
          <FeatureDescription>
            Make informed investment decisions based on accurate information.
          </FeatureDescription>
          <FeatureButton>Sign Up</FeatureButton>
        </Feature>

        <Feature>
          <FeatureIcon src="path_to_community_icon.png" alt="Community Icon" />
          <FeatureTitle>Connect with a community of like-minded investors</FeatureTitle>
          <FeatureDescription>
            Share insights and learn from experienced professionals.
          </FeatureDescription>
          <FeatureButton>Join Now</FeatureButton>
        </Feature>
      </FeaturesSection>
      <Footer />
    </div>
  );
};

export default Home;
