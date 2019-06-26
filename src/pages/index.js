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
import chain_lines from 'src/images/main-chainlines.svg';
const CIRCLE_SHADOW = '0 0 10px 2px rgba(255, 255, 0, 0.5)';

const rotate = keyframes`
  0% {
    transform: scale(0.9, 1.1);
  }
  50% {
    transform: scale(1.1, 0.9);
  }
  100% {
    transform: scale(0.9, 1.1);
  }
`;

const ChainLine = styled.img`
  position: absolute;
  width: 150%;
  bottom: 0%;
  animation: ${rotate} 10s ease-in-out infinite;
  @media screen and (max-width: ${MOBILE_WIDTH}px) {
    width: 1000px;
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
  text-shadow: 0 0 10px rgba(100, 100, 0, 0.5);
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
const Section = styled.div`
  padding: 20px;
  &:nth-child(even) {
    background-color: #F8F8F8;
  }
  &:nth-child(odd) {
    background-color: white;
  }
`;

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
      <h1>Hi people testest 2222</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <h1>Hi people testest 2222</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <h1>Hi people testest 2222</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <h1>Hi people testest 2222</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <h1>Hi people testest 2222</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <h1>Hi people testest 2222</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <h1>Hi people testest 2222</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <h1>Hi people testest 2222</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <h1>Hi people testest 2222</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <h1>Hi people testest 2222</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <h1>Hi people testest 2222</h1>
      <p>Welcome to your new Gatsby site.</p>

      <h1>Hi people testest 2222</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <h1>Hi people testest 2222</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <h1>Hi people testest 2222</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <h1>Hi people testest 2222</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <h1>Hi people testest 2222</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <h1>Hi people testest 2222</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <h1>Hi people testest 2222</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <h1>Hi people testest 2222</h1>
      <p>Welcome to your new Gatsby site.</p>

      <FormattedMessage
        id="Tangerine Network"
        defaultMessage="Tangerine Network"
      />
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  );
});

export default IndexPage
