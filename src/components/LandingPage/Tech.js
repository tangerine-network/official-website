import React from "react";
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import fastSVG from 'src/images/tech-fast.svg';
import fairSVG from 'src/images/tech-fair.svg';
import secureRandomnessSVG from 'src/images/tech-secure-randomness.svg';

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
  padding: 0px 20px;
`;

const Item = styled.div`
  display: flex;
  &:nth-child(even) {
    flex-direction: row-reverse;
  }
  margin-top: 80px;
`;
const ImgWrapper = styled.div`
  flex: 1;
  text-align: center;
`;
const Img = styled.img`
  height: 235px;
`;
const Desc = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${p => p.reverse && `
    align-items: flex-end;
  `}
`;
const Title = styled.div`
  color: #c45b26;
  font-weight: bold;
  font-size: x-large;
  margin: 10px 0px;
`;
const Content = styled.div`
  font-size: larger;
  color: #282625;
  max-width: 280px;
  ${p => p.reverse && 'text-align: right;'}
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
