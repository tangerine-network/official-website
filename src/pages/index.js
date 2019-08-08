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
import PartnerList from 'src/components/LandingPage/PartnerList';
import Contact from 'src/components/LandingPage/Contact';
import Tech from 'src/components/LandingPage/Tech';
import Wallet from 'src/components/LandingPage/Wallet';
import Explorer from 'src/components/LandingPage/Explorer';
import Resources from 'src/components/LandingPage/Resources';
import Harvest from 'src/components/LandingPage/Harvest';
// import chain_lines from 'src/images/main-chainlines-2.svg';
// import chain_lines_blur from 'src/images/main-chainlines-3.svg';
// const CIRCLE_SHADOW = '0 0 10px 2px rgba(255, 255, 0, 0.5)';

// const rotate = keyframes`
//   0% {
//     -webkit-transform: scale(1, 0.8) skew(0deg, 0deg);
//     transform: scale(1, 0.8) skew(0deg, 0deg);
//   }
//   50% {
//     -webkit-transform: scale(1, 1.1) skew(-10deg, 0deg);
//     transform: scale(1, 1.1) skew(-10deg, 0deg);
//   }
//   100% {
//     -webkit-transform: scale(1, 0.8) skew(0deg, 0deg);
//     transform: scale(1, 0.8) skew(0deg, 0deg);
//   }
// `;

// const ChainLine = styled.img`
//   content: url(${chain_lines_blur});
//   position: absolute;
//   width: 110%;
//   top: 50px;
//   animation: ${rotate} 6s ease-in-out infinite;
//   @media screen and (max-width: 1300px) {
//     width: 120%;
//     top: 180px;
//   }
//   @media screen and (max-width: ${MOBILE_WIDTH}px) {
//     top: 120px;
//     width: 800px;
//     content: url(${chain_lines});
//   }

// `;

// const BigCircle = styled.div`
//   z-index: 500;
//   position: relative;
//   width: 400px;
//   height: 400px;
//   border-radius: 100%;
//   border: 3px solid rgba(255, 255, 255, 0.9);
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   box-shadow:  inset ${CIRCLE_SHADOW}, ${CIRCLE_SHADOW};
//   @media screen and (max-width: ${MOBILE_WIDTH}px) {
//     width: 273px;
//     height: 273px;
//   }
// `;
// const Padding = styled.div`
//   flex: 1;
// `;
// const BigTitle = styled.h1`
//   white-space: nowrap;
//   text-align: center;
//   color: white;
//   font-size: 50px;
//   font-weight: bold;
//   margin: 10px;
//   text-shadow: 0 0 10px rgba(100, 100, 0, 0.3);
//   @media screen and (max-width: ${MOBILE_WIDTH}px) {
//     font-size: 33px;
//   }
// `;
// const BigContext = styled.h2`
//   color: white;
//   text-align: center;
//   padding: 10px;
//   font-size: 16px;
// `;

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

// const MainBgImg = ({ className }) => {
//   const data = useStaticQuery(graphql`
//     query {
//       placeholderImage: file(relativePath: { eq: "main_background.png" }) {
//         childImageSharp {
//           fluid(maxWidth: 3000) {
//             ...GatsbyImageSharpFluid
//           }
//         }
//       }
//     }
//   `)
//   return <BackgroundImage
//     Tag="section"
//     className={className}
//     fluid={data.placeholderImage.childImageSharp.fluid}
//   >
//     <BigCircle>
//       <Padding />
//       <BigTitle>
//         <FormattedMessage
//           id="Tangerine Network"
//           defaultMessage="Tangerine Network"
//         />
//       </BigTitle>
//       <BigContext>
//         <FormattedMessage
//           id="tangerine-description"
//         />
//       </BigContext>
//       <Padding />
//     </BigCircle>
//     <ChainLine src={chain_lines} />
//   </BackgroundImage>;
// }

// const MainArea = styled(MainBgImg)`
//   position: relative;
//   width: 100%;
//   height: ${MAIN_AREA_DESKTOP_HEIGHT}px;
//   overflow: hidden;
//   @media screen and (max-width: ${MOBILE_WIDTH}px) {
//     height: ${MAIN_AREA_MOBILE_HEIGHT}px;
//   }
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

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

const IndexPage = ({ pageContext: { locale }, intl }) => {
  return (
    <Layout locale={locale}>
      <Sections>
        <Landing />
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
        <Section id="harvest">
          <Harvest />
        </Section>
        <Section><Contact /></Section>
      </Sections>
      {/* <Link to="/page-2/">Go to page 2</Link> */}
    </Layout>
  );
};

export default IndexPage;
