import React from "react";
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { MOBILE_WIDTH } from 'src/constants/app';

import lightHouse from 'src/images/light-house.svg';

const Wrapper = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 0px 60px;
`;

const LightHouseImage = styled.img`
  width: 75px;
`;
const Card = styled.div`
  border-radius: 5px;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
  width: 100%;
  padding: 30px 60px;
  @media screen and (min-width: ${MOBILE_WIDTH}px) {
    max-width: 784px;
  }
  @media screen and (max-width: ${MOBILE_WIDTH}px) {
    width: 90%;
    padding: 20px;
  }
`;

const Title = styled.div`
  color: #c45b26;
  font-size: larger;
  font-weight: bold;
  margin: 20px 0px;
`;
const Content = styled.div`
  color: #282625;
  font-size: normal;
`;
const ExtLink = styled.div`
  color: #c45b26;
  font-weight: bold;
  margin-top: 20px;;
  cursor: pointer;
`;

const Resources = () => (
  <Wrapper>
    <Card>
      <LightHouseImage src={lightHouse} />
      <Title>
        <FormattedMessage
          id="dapp-dev-guide"
        />
      </Title>
      <Content>哈囉哈囉123, 你好哈哈哈</Content>
      <ExtLink>      
        <FormattedMessage
          id="Learn More"
        /> 
        >
      </ExtLink>
    </Card>
  </Wrapper>
);

export default Resources;
