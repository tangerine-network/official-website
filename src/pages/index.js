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
    className={className}
    fluid={data.placeholderImage.childImageSharp.fluid}
  />;
}

const StyledMainBg = styled(MainBgImg)`
  position: relative;
  width: 100%;
  height: ${MAIN_AREA_DESKTOP_HEIGHT}px;
  overflow: hidden;
  @media screen and (max-width: ${MOBILE_WIDTH}px) {
    height: ${MAIN_AREA_MOBILE_HEIGHT}px;
  }
`;

const IndexPage = React.memo(({ pathContext: { locale } }) => {
  return (
    <Layout locale={locale}>

      <StyledMainBg />
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
      <FormattedMessage
        id="Tangerine Network"
        defaultMessage="Tangerine Network"
      />
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  );
});

export default IndexPage
