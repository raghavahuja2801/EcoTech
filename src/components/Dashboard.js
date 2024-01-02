import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import Footer from './Footer';

// Styled components for the dashboard layout
const DashboardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 20px;
  padding: 20px;
`;

const WelcomeMessage = styled.div`
  grid-column: span 12;
  background: #fff;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
`;

const PortfolioSummary = styled.div`
  grid-column: span 3;
  background: #fff;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
`;

const WeightVsWeather = styled.div`
  grid-column: span 6;
  background: #fff;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
`;

const StepGoal = styled.div`
  grid-column: span 3;
  background: #fff;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
`;

const AccountActivity = styled.div`
  grid-column: span 4;
  background: #fff;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
`;

const PortfolioSuggestions = styled.div`
  grid-column: span 8;
  background: #fff;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
`;

// Dashboard component
const Dashboard = () => {
  // You would fetch the data for these components using APIs
  return (
    <div>
        <Navbar />
    <DashboardContainer>
      <WelcomeMessage>
        Welcome message!
        {/* Welcome message content */}
      </WelcomeMessage>
      <PortfolioSummary>
        Portfolio Summary
        {/* Portfolio summary content */}
      </PortfolioSummary>
      <WeightVsWeather>
        Weight Vs Weather
        {/* Weight vs Weather chart */}
      </WeightVsWeather>
      <StepGoal>
        Step Goal
        {/* Step goal content */}
      </StepGoal>
      <AccountActivity>
        Account Activity
        {/* Account activity content */}
      </AccountActivity>
      <PortfolioSuggestions>
        Portfolio suggestions
        {/* Portfolio suggestions content */}
      </PortfolioSuggestions>
    </DashboardContainer>
    <Footer />
    </div>
  );
};

export default Dashboard;
