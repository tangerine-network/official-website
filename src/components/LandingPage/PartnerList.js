import React from "react";
import styled from 'styled-components';
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

const Wrapper = styled.div`
  width: 100%;
`;

const GridLayout = styled.div`
  display: grid;
  justify-content: space-evenly;
  grid-template-columns: repeat(auto-fill, 300px);
  grid-gap: 40px 20px;
  /* border: 1px solid red; */
`;

const Item = styled.div`
  text-align: center;
  /* border: 1px solid black; */
`;

const Partners = () => {
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
      taihu: file(relativePath: { eq: "taihu_brew.png" }) {
        childImageSharp {
          fixed(height: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      orange_house: file(relativePath: { eq: "orange_house.png" }) {
        childImageSharp {
          fixed(height: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      gamania: file(relativePath: { eq: "gama_pay.png" }) {
        childImageSharp {
          fixed(height: 80) {
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
