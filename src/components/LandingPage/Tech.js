import React from "react";
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import fastSVG from 'src/images/tech-fast.svg';
import fairSVG from 'src/images/tech-fair.svg';
import secureRandomnessSVG from 'src/images/tech-secure-randomness.svg';
import {
  MOBILE_WIDTH,
} from 'src/constants/app';

const items = [{
  img: fastSVG,
  title: 'Fast',
  content: 'tech-fast-description'
}, {
  img: secureRandomnessSVG,
  title: 'Secure Randomness',
  content: 'tech-secure-randomness'
}, {
  img: fairSVG,
  title: 'Fair',
  content: 'tech-fair-description'
}];

const Wrapper = styled.div`
  padding: 0px 100px 60px;
  @media screen and (max-width: ${MOBILE_WIDTH}px) {
    padding: 0px 50px 60px;
  }
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  margin-top: 80px;
  @media screen and (min-width: ${MOBILE_WIDTH}px) {
    &:nth-child(even) {
      flex-direction: row-reverse;
    }
  }
  @media screen and (max-width: ${MOBILE_WIDTH}px) {
    flex-direction: column;
  }
`;
const ImgWrapper = styled.div`
  flex: 1;
  text-align: center;
`;
const Img = styled.img`
  height: 235px;
  @media screen and (max-width: ${MOBILE_WIDTH}px) {
    height: 200px;
  }
`;
const Desc = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (min-width: ${MOBILE_WIDTH}px) {
    ${p => p.reverse && `
      align-items: flex-end;
    `}
  }
  @media screen and (max-width: ${MOBILE_WIDTH}px) {
    text-align: center;
    font-size: small;
  }
`;
const Title = styled.div`
  color: #c45b26;
  font-weight: bold;
  font-size: x-large;
  margin: 20px 0px;
`;
const Content = styled.div`

  font-size: larger;
  color: #282625;
  @media screen and (min-width: ${MOBILE_WIDTH}px) {
    ${p => p.reverse && 'text-align: right;'}
    max-width: 280px;
  }
`;
const Padding = styled.div`
  width: 76px;
`;
const Footer = () => (
  <Wrapper>
    {items.map((it, key) => (
      <Item key={key}>
        <ImgWrapper>
          <Img src={it.img} alt={it.title} />
        </ImgWrapper>
        <Padding />
        <Desc reverse={(key % 2) > 0}>
          <Title>
            <FormattedMessage
              id={it.title}
            />
          </Title>
          <Content reverse={(key % 2) > 0}>
            <FormattedMessage
              id={it.content}
            />
          </Content>
        </Desc>
      </Item>
    ))}
  </Wrapper>
);

export default Footer;
