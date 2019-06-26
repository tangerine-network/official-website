import React from "react";
import { graphql, useStaticQuery } from 'gatsby';
import styled from "styled-components";
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


const BigCircle = styled.div`
  position: relative;
  width: 400px;
  height: 400px;
  border-radius: 100%;
  border: 3px solid white;
  display: flex;
  flex-direction: column;
  align-items: center;
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
`;
const BigContext = styled.div`
  color: white;
  text-align: center;
  padding: 10px;
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
