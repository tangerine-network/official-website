import React from "react";
import styled from 'styled-components';
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

const Wrapper = styled.div``;

export const Partners = () => {
  const data = useStaticQuery(graphql`
    query {
      stone: file(relativePath: { eq: "stone.png" }) {
        childImageSharp {
          fixed(height: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      flyingMokney: file(relativePath: { eq: "flyingMonkey.png" }) {
        childImageSharp {
          fixed(height: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      taihu: file(relativePath: { eq: "taihu.png" }) {
        childImageSharp {
          fixed(height: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  return [
    <Img key="stone" fixed={data.stone.childImageSharp.fixed} />,
    <Img key="flying monkey" fixed={data.flyingMokney.childImageSharp.fixed} />,
    <Img key="taihu" fixed={data.taihu.childImageSharp.fixed} />
  ];
  // return null;
}


const PartnerList = () => (
  <Wrapper>
    <Partners />
  </Wrapper>
);

export default PartnerList;
