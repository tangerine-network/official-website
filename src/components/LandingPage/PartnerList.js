import React from "react";
import styled from 'styled-components';
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import {
  MOBILE_WIDTH,
} from 'src/constants/app';
const Wrapper = styled.div`
  width: 100%;
  padding: 50px 100px;
  @media screen and (max-width: ${MOBILE_WIDTH}px) {
    padding: 50px 10px;
  }
`;

const GridLayout = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Item = styled.div`
  flex: 1 0 16%;
  display: flex;
  /* padding: 30px 10px; */
  justify-content: center;
  /* border: 1px solid black; */
  margin: 10px;
  height: 60px;
  @media screen and (max-width: ${MOBILE_WIDTH}px) {
    flex: 1 0 34%;
  }
`;

const Partners = () => {
  const data = useStaticQuery(graphql`
    query {
      stone: file(relativePath: { eq: "stone2.png" }) {
        childImageSharp {
          fixed(height: 60) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      flyingMokney: file(relativePath: { eq: "flyingMonkey.png" }) {
        childImageSharp {
          fixed(height: 60) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      taihu: file(relativePath: { eq: "taihu_brew.png" }) {
        childImageSharp {
          fixed(height: 60) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      orange_house: file(relativePath: { eq: "orange_house.png" }) {
        childImageSharp {
          fixed(height: 60) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      gamania: file(relativePath: { eq: "gama_pay.png" }) {
        childImageSharp {
          fixed(height: 60) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  return [
    <Img fixed={data.stone.childImageSharp.fixed} />,
    <Img fixed={data.flyingMokney.childImageSharp.fixed} />,
    <Img fixed={data.taihu.childImageSharp.fixed} />,
    <Img fixed={data.orange_house.childImageSharp.fixed} />,
    <Img fixed={data.gamania.childImageSharp.fixed} />,
  ].map((it, key) => <Item key={key}>{it}</Item>);
}

const PartnerList = () => (
  <Wrapper>
    <GridLayout>
      <Partners />
    </GridLayout>
  </Wrapper>
);

export default PartnerList;
