import React from "react";
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import fastSVG from 'src/images/tech-fast.svg';
import fairSVG from 'src/images/tech-fair.svg';
import secureRandomnessSVG from 'src/images/tech-secure-randomness.svg';
import {
  MOBILE_WIDTH,
} from 'src/constants/app';
// import Slide from 'react-reveal/Fade';

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
  display: flex;
  @media screen and (max-width: ${MOBILE_WIDTH}px) {
    flex-direction: column;
  }
`;
const Padding = styled.div`
  flex: 1;
`;
const Item = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 60px;
`;
const ImgWrapper = styled.div`
  flex: 1;
`;
const Img = styled.img`
  width: 100%;
`;
const Desc = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
`;
const Tect = () => (
  <Wrapper>
    <Padding />
    {items.map((it, key) => {
      return (
        <Item key={key} >
          <ImgWrapper >
            <Img src={it.img} alt={it.title} />
          </ImgWrapper>
          <Desc>
            <Title>
              <FormattedMessage
                id={it.title}
              />
            </Title>
            <Content>
              <FormattedMessage
                id={it.content}
              />
            </Content>
          </Desc>
        </Item>
      );
    })}
    <Padding />
  </Wrapper>
);

export default Tect;
