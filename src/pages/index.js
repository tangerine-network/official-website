import React, { useState } from "react";
// import { graphql, useStaticQuery } from 'gatsby';
import styled, { keyframes } from "styled-components";
// import Link from 'src/components/Link';
import { FormattedMessage } from 'react-intl';
import Layout from "../components/layout";
// import SEO from "../components/seo";
// import BackgroundImage from 'gatsby-background-image';
import {
  HEADER_HEIGHT,
  MAIN_AREA_DESKTOP_HEIGHT,
  MOBILE_HEADER_HEIGHT,
  MOBILE_WIDTH,
} from 'src/constants/app';
import Bubble from 'src/components/Bubble';
import PartnerList from 'src/components/LandingPage/PartnerList';
import Contact from 'src/components/LandingPage/Contact';
import Tech from 'src/components/LandingPage/Tech';
import Wallet from 'src/components/LandingPage/Wallet';
import Explorer from 'src/components/LandingPage/Explorer';
import Resources from 'src/components/LandingPage/Resources';
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const Sections = styled.div`
`;
const SectionWrapper = styled.div`
  &:nth-child(even) {
    background-color: #FBFBFB;
  }
  &:nth-child(odd) {
    background-color: white;
  }
`;
const SectionTitle = styled.div`
  text-align: center;
  font-weight: bold;
  font-size: 30px;
  padding: 100px 0px;
  color: #282625;
`;
const Section = ({ children, title, id }) => (
  <SectionWrapper id={id}>
    {title && (<SectionTitle>{title}</SectionTitle>)}
    {children}
  </SectionWrapper>
);

const Landing = styled.div`
  position: relative;
  width: 100%;
  /* height: ${MAIN_AREA_DESKTOP_HEIGHT}px; */
  height: calc(100vh - ${HEADER_HEIGHT}px);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: ${MOBILE_WIDTH}px) {
    height: calc(100vh - ${MOBILE_HEADER_HEIGHT}px);
    /* flex-direction: column; */
  }

`;
const TitleSection = styled.div`
  /* border: 1px solid #EEE; */
  width: 100%;
  max-width: 900px;
  padding: 0px 40px;
  z-index: 10;
  font-family: Montserrat;
  @media screen and (max-width: ${MOBILE_WIDTH}px) {
    padding: 0px 20px;
    position: absolute;
    top: 50%;
    /* left: 20px; */
  }
`;
const Title = styled.div`
  /* border: 1px solid red; */
  font-weight: bolder;
  font-size: 70px;
  line-height: 70px;
  @media screen and (max-width: ${MOBILE_WIDTH}px) {
    font-size: 50px;
    line-height: 50px;
  }
`;
const SecondTitle = styled.div`
    font-weight: bolder;
    font-size: 70px;
    line-height: 70px;
    @media screen and (max-width: ${MOBILE_WIDTH}px) {
      font-size: 40px;
      line-height: 40px;
    }
`
const SubTitle = styled.div`
  font-size: 25px;
  margin-top: 20px;
  @media screen and (max-width: ${MOBILE_WIDTH}px) {
    margin-top: 10px;
    font-size: 17px;
  }
`;
const HightLight = styled.span`
  color: #e05b21;
`;

const movementEffect = keyframes`
  0% {
    height: 650px;
    width: 650px;
  }
  50% {
    height: 710px;
    width: 710px;
  }
  100% {
    height: 650px;
    width: 650px;
  }
`

const movementEffectMobile = keyframes`
  0% {
    height: 290px;
    width: 290px;
  }
  50% {
    height: 310px;
    width: 310px;
  }
  100% {
    height: 290px;
    width: 290px;
  }
`

const CircleBackground = styled.div`
  position: absolute;
  background: radial-gradient(closest-side, rgba(224, 91, 33, 1) 30%, white 100%);
  animation: ${movementEffect} 8s ease-in-out infinite;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: ${MOBILE_WIDTH}px) {
    animation: ${movementEffectMobile} 5s ease-in-out infinite;
  }
`;

const ExploreButton = styled.button`
  background-color: #e05b21;
  padding: 15px 30px;
  border-radius: 5px;
  color: white;
  border: none;
  border: none;
  font-weight: bold;
  margin-top: 50px;
  cursor: pointer;
`;

const LaunchImageWrapper = styled.div`
  position: absolute;
  z-index: 10;
  width: 1100px;
  margin-left: 100px;
  @media screen and (max-width: ${MOBILE_WIDTH}px) {
    /* position: relative; */
    /* width: 100%; */
    margin-left: 0px;
    width: 130%;
    top: 10px;
  }
`;

const IndexPage = ({ pageContext: { locale }, intl }) => {
  const [showCircle, setShowCircle] = useState();
  const query = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "mainnet-launch-landing-image.png" }) {
        childImageSharp {
          fluid(maxWidth: 1100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <Layout locale={locale}>
      <Sections>
        <Landing>
          <LaunchImageWrapper>
            <Img
              fluid={query.file.childImageSharp.fluid}
            />
          </LaunchImageWrapper>
          {/* <Bubble
            onFinish={() => setShowCircle(true)}
          />
          {showCircle && <CircleBackground />} */}
          <TitleSection>
            {/* <Title>Build </Title> */}
            {/* <SecondTitle>For a Better Future</SecondTitle> */}
            <Title>Mainnet </Title>
            <SecondTitle><HightLight>Launched!</HightLight></SecondTitle>
            {/* <SubTitle>A next-generation blockchain built on fast, fair, and secure consensus protocol</SubTitle> */}
            <ExploreButton>Go Explore!</ExploreButton>
          </TitleSection>
        </Landing>
        {/* <Section><PartnerList /></Section> */}
        {/* <Section><Contact /></Section> */}
        <Section
          id="technology"
          title={
            <FormattedMessage
              id="Technology"
              defaultMessage="Technology"
            />
          }
        >
          <Tech />
        </Section>
        <Section><Wallet /></Section>
        <Section><Explorer /></Section>
        <Section
          id="resources"
          title={
            <FormattedMessage
              id="Tech Support"
            />
          }
        >
          <Resources />
        </Section>
        {/* <Section id="harvest">
          <Harvest />
        </Section> */}
        <Section><Contact /></Section>
      </Sections>
      {/* <Link to="/page-2/">Go to page 2</Link> */}
    </Layout>
  );
};

export default IndexPage;
