import React from "react";
// import { graphql, useStaticQuery } from 'gatsby';
import styled from "styled-components";
// import Link from 'src/components/Link';
import { FormattedMessage } from 'react-intl';
import Layout from "../components/layout";
// import SEO from "../components/seo";
// import BackgroundImage from 'gatsby-background-image';
import {
  MAIN_AREA_DESKTOP_HEIGHT,
  MAIN_AREA_MOBILE_HEIGHT,
  MOBILE_WIDTH,
} from 'src/constants/app';
import Bubble from 'src/components/Bubble';
import PartnerList from 'src/components/LandingPage/PartnerList';
import Contact from 'src/components/LandingPage/Contact';
import Tech from 'src/components/LandingPage/Tech';
import Wallet from 'src/components/LandingPage/Wallet';
import Explorer from 'src/components/LandingPage/Explorer';
import Resources from 'src/components/LandingPage/Resources';

const Sections = styled.div`
`;
const SectionWrapper = styled.div`
  &:nth-child(even) {
    background-color: #F8F8F8;
  }
  &:nth-child(odd) {
    background-color: white;
  }
`;
const SectionTitle = styled.div`
  text-align: center;
  font-weight: bold;
  font-size: 30px;
  /* border: 1px solid red; */
  padding: 60px 0px;
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
  height: ${MAIN_AREA_DESKTOP_HEIGHT}px;
  overflow: hidden;
  @media screen and (max-width: ${MOBILE_WIDTH}px) {
    height: ${MAIN_AREA_MOBILE_HEIGHT}px;
  }
  display: flex;
  align-items: center;
  justify-content: center;
`;
const TitleSection = styled.div`
  border: 1px solid #EEE;
  width: 100%;
  max-width: 900px;
  padding: 0px 40px;
  z-index: 10;
  @media screen and (max-width: ${MOBILE_WIDTH}px) {
    padding: 0px 20px;
  }
`;
const Title = styled.div`
  font-weight: bolder;
  font-size: 70px;
  @media screen and (max-width: ${MOBILE_WIDTH}px) {
    font-size: 50px;
  }
`;
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

const CircleBackground = styled.div`
  border-radius: 100%;
  height: 700px;
  width: 700px;
  position: absolute;
  background: radial-gradient(closest-side, rgba(224, 91, 33, 1) 50%, rgba(224, 91, 33, 0) 95%);
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: ${MOBILE_WIDTH}px) {
    height: 400px;
    width: 400px;
  }
`;


const IndexPage = ({ pageContext: { locale }, intl }) => {
  return (
    <Layout locale={locale}>
      <Sections>
        <Landing>
          <CircleBackground>
            <Bubble />
          </CircleBackground>
          <TitleSection>
            <Title>BUILD <HightLight>TRUST</HightLight></Title>
            <Title>GO VIRAL</Title>
            <SubTitle>Ignite your idea with Tangerine Network</SubTitle>
          </TitleSection>
        </Landing>
        <Section><PartnerList /></Section>
        <Section><Contact /></Section>
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
