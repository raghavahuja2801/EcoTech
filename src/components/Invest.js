import React from 'react';
import styled from 'styled-components';
import Edata from './LearnInvesting';
import Navbar from './Navbar';
import Footer from './Footer';

const globalFontFamily = `'Helvetica Neue', sans-serif`;

const LearningContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 1rem;
  background: #fff;
`;

const SectionTitle = styled.h2`
  font-family: ${globalFontFamily};
  font-size: 2rem;
  color: #333;
  margin-bottom: 2rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #eaeaea;
`;

const ArticleContainer = styled.div`
  margin-bottom: 3rem;
`;

const ArticleTitle = styled.h3`
  font-family: ${globalFontFamily};
  color: #222;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const ArticleContent = styled.p`
  font-family: ${globalFontFamily};
  color: #666;
  font-size: 1rem;
  line-height: 1.6;
`;

const EducationSection = ({ title, articles }) => {
  return (
    <ArticleContainer>
      <SectionTitle>{title}</SectionTitle>
      {Object.entries(articles).map(([articleTitle, articleContent]) => (
        <div key={articleTitle}>
          <ArticleTitle>{articleTitle}</ArticleTitle>
          <ArticleContent>{articleContent}</ArticleContent>
        </div>
      ))}
    </ArticleContainer>
  );
};

const LearnInvestingPage = () => {
  const data = Edata;
  return (
    <div>
      <Navbar />
    <LearningContainer>
      {Object.entries(data.education).map(([sectionTitle, articles]) => (
        <EducationSection
          key={sectionTitle}
          title={sectionTitle}
          articles={articles}
        />
      ))}
    </LearningContainer>
    <Footer />
    </div>
  );
};

export default LearnInvestingPage;
