import React from "react";
import { graphql, useStaticQuery } from 'gatsby';
import styled, { keyframes } from "styled-components";
import Link from 'src/components/Link';
import { FormattedMessage } from 'react-intl';
import Layout from "../components/layout";
import SEO from "../components/seo";
import BackgroundImage from 'gatsby-background-image';
import {
  MAIN_AREA_DESKTOP_HEIGHT,
  MAIN_AREA_MOBILE_HEIGHT,
  MOBILE_WIDTH,
} from 'src/constants/app';
import PartnerList from 'src/components/LandingPage/PartnerList';
import Tech from 'src/components/LandingPage/Tech';
import chain_lines from 'src/images/main-chainlines-3.svg';
const CIRCLE_SHADOW = '0 0 10px 2px rgba(255, 255, 0, 0.5)';

const rotate = keyframes`
  0% {
    transform: scale(1, 0.8) rotate(5deg) skew(0deg, 0deg);
  }
  50% {
    transform: scale(1, 1.2) rotate(0deg) skew(-10deg, 0deg);
  }
  100% {
    transform: scale(1, 0.8) rotate(5deg) skew(0deg, 0deg);
  }
`;

const ChainLine = styled.img`
  position: absolute;
  width: 120%;
  top: 100px;
  animation: ${rotate} 10s ease-in-out infinite;
  @media screen and (max-width: 1300px) {
    top: 180px;
  }
  @media screen and (max-width: ${MOBILE_WIDTH}px) {
    top: 120px;
    width: 800px;
  }
`;

const BigCircle = styled.div`
  z-index: 500;
  position: relative;
  width: 400px;
  height: 400px;
  border-radius: 100%;
  border: 3px solid rgba(255, 255, 255, 0.9);
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow:  inset ${CIRCLE_SHADOW}, ${CIRCLE_SHADOW};
  @media screen and (max-width: ${MOBILE_WIDTH}px) {
    width: 300px;
    height: 300px;
  }
`;
const Padding = styled.div`
  flex: 1;
`;
const BigTitle = styled.div`
  white-space: nowrap;
  text-align: center;
  color: white;
  font-size: 50px;
  font-weight: bold;
  margin: 10px;
  text-shadow: 0 0 10px rgba(100, 100, 0, 0.3);
  @media screen and (max-width: ${MOBILE_WIDTH}px) {
    font-size: 35px;
  }
`;
const BigContext = styled.div`
  color: white;
  text-align: center;
  padding: 10px;
`;

const Sections = styled.div`
`;
const SectionWrapper = styled.div`
  padding: 60px 20px;
  &:nth-child(even) {
    background-color: #F8F8F8;
  }
  &:nth-child(odd) {
    background-color: white;
  }
  @media screen and (max-width: ${MOBILE_WIDTH}px) {
    padding: 60px 5px;
  }
`;
const SectionTitle = styled.div`
  text-align: center;
  font-weight: bold;
  font-size: 30px;
  padding: 25px;
  margin-bottom: 60px;
  color: #282625;
`;
const Section = ({ children, title }) => (
  <SectionWrapper>
    {title && (<SectionTitle>{title}</SectionTitle>)}
    {children}
  </SectionWrapper>
);

const MainBgImg = ({ className }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "main_background.png" }) {
        childImageSharp {
          fluid(maxWidth: 3000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return <BackgroundImage
    Tag="section"
    className={className}
    fluid={data.placeholderImage.childImageSharp.fluid}
  >
    <BigCircle>
      <Padding />
      <BigTitle>
        <FormattedMessage
          id="Tangerine Network"
          defaultMessage="Tangerine Network"
        />
      </BigTitle>
      <BigContext>
        Tangerine Network is a distributed ledger technology designed to solve the problems inherent in other blockchain systems.
      </BigContext>
      <Padding />
    </BigCircle>
    <ChainLine src={chain_lines} />
  </BackgroundImage>;
}

const MainArea = styled(MainBgImg)`
  position: relative;
  width: 100%;
  height: ${MAIN_AREA_DESKTOP_HEIGHT}px;
  overflow: hidden;
  @media screen and (max-width: ${MOBILE_WIDTH}px) {
    height: ${MAIN_AREA_MOBILE_HEIGHT}px;
  }
  display: flex;
  align-items: center;
  justify-content: center;
`;

const IndexPage = React.memo(({ pathContext: { locale } }) => {
  return (
    <Layout locale={locale}>
      <MainArea />
      <SEO title="Home" />
      <Sections>
        <Section><PartnerList /></Section>
        <Section
          title={
            <FormattedMessage
              id="Technology"
              defaultMessage="Technology"
            />
          }
        >
          <Tech />
        </Section>
        <Section>123</Section>
        <Section>123</Section>
        <Section>123</Section>
        <Section>123</Section>
      </Sections>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  );
});

export default IndexPage
