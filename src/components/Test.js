import React from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import Navbar from './Navbar';

const Layout = styled.div`
  display: flex;
  position: relative;
`;

const StickyMenu = styled.div`
  position: sticky;
  top: 20px; // Adjust this value as needed to fit your header or desired position
  align-self: flex-start;
  padding: 10px;
  background: #f7f7f7;
  border-radius: 8px;
  height: max-content;
`;

const MenuLink = styled.a`
  display: block;
  margin-bottom: 10px;
  cursor: pointer;
  text-decoration: none;
  color: #0275d8;

  &:hover {
    text-decoration: underline;
  }
`;

const ContentArea = styled.div`
  flex-grow: 1;
  padding-left: 20px; // To provide some spacing from the menu
`;

// Styled components
const PageContainer = styled.div`
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
  line-height: 1.6;
`;

const Section = styled.section`
  margin-bottom: 2rem;
  padding: 1rem;
`;

const Title = styled.h2`
  font-size: 2rem;
  color: #0275d8;
`;

const Subtitle = styled.h3`
  font-size: 1.5rem;
  color: #5cb85c;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  color: #555;
`;

const List = styled.ul`
  list-style-position: inside;
`;

const ListItem = styled.li`
  margin-bottom: 0.5rem;
`;


// Scroll to a section with a smooth animation
const scrollToSection = (sectionId) => {
  document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
};

const LearnInvesting = () => (
  <div>
    <Navbar />
  <Layout>
    <StickyMenu>
      <MenuLink onClick={() => scrollToSection('investment-basics')}>Investment Basics</MenuLink>
      <MenuLink onClick={() => scrollToSection('types-of-investments')}>Types of Investments</MenuLink>
      {/* Add more menu links here */}
    </StickyMenu>

    <ContentArea>
    <PageContainer>
    <Section id='investment-basics'>
      <Title>Investment Basics</Title>
      <Subtitle>What is Investing?</Subtitle>
      <Paragraph>Investing is the act of allocating resources, usually money, with the expectation of generating an income or profit. It’s how you take charge of your financial security. Not only does investing allow you to grow your wealth, but it can also provide an additional income stream in the future, whether that's in the form of retirement income or as a financial safety net.</Paragraph>
      <Subtitle>Risk vs. Reward</Subtitle>
      <Paragraph>Investing is not without its risks, but it also comes with the reward of potentially high returns. Different types of investments come with different levels of risk. Hence, understanding your personal risk tolerance is crucial. It’s important to weigh the potential risks against the rewards and to consider how investing fits into your financial goals.</Paragraph>
      {/* Add more subsections and content here */}
    </Section>

    <Section id='types-of-investments'>
      <Title>Types of Investments</Title>
      <Subtitle>Stocks</Subtitle>
      <Paragraph>Stocks represent shares of ownership in a company. When you buy a stock, you become a shareholder, meaning you own a small piece of that company. As the company's value grows, so does the value of the stock you own, which can result in capital gains when you sell your shares. Conversely, if the company loses value, your shares will decrease in value.

Investing in stocks involves buying these shares to sell them at a higher price or to earn dividends, which are a share of the company's profits distributed to shareholders. Stock investments are usually made through a stock market where public companies are listed. The stock market facilitates the buying and selling of these stocks between investors on a platform provided by stock exchanges, like the New York Stock Exchange or the NASDAQ, with prices determined by supply and demand.

Successful stock investing requires research, patience, and a willingness to take calculated risks for the potential of substantial rewards.</Paragraph>
      {/* Repeat for Bonds, Mutual Funds, ETFs, etc. */}
    </Section>

    {/* Repeat the pattern for other sections */}
    <Section>
      <Title>Market Fundamentals</Title>
      {/* Content */}
    </Section>

    <Section>
      <Title>Financial Planning</Title>
      {/* Content */}
    </Section>

    {/* ... more sections ... */}

    <Section>
      <Title>Glossary</Title>
      <List>
        <ListItem>Asset Allocation: The process of spreading investments across various types of assets.</ListItem>
        {/* Add more glossary terms here */}
      </List>
    </Section>

    {/* FAQ and Community Q&A Section */}
    <Section>
      <Title>FAQs and Community Q&A</Title>
      {/* Content */}
    </Section>
  </PageContainer>
   
    </ContentArea>
  </Layout>
  <Footer />
  </div>
);

export default LearnInvesting;
