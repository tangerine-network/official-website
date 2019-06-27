import React from "react";
import styled from 'styled-components';
import { MOBILE_WIDTH } from 'src/constants/app';
import { FormattedMessage } from 'react-intl';

import HarvestProgramSvg from 'src/images/harvest-program.svg';

const Wrapper = styled.div`
  display: flex;
  @media screen and (max-width: ${MOBILE_WIDTH}px) {
    flex-direction: column;
    padding: 20px 0px;
  }
`;

const HarvestLogo = styled.img`
  @media screen and (min-width: ${MOBILE_WIDTH}px) {
    max-width: 481px;
  }
  @media screen and (max-width: ${MOBILE_WIDTH}px) {
    width: 95%;
    height: auto;
    margin: 10px 0px;
  }
`;
const ContextArea = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Context = styled.div`
  /* border: 1px solid red; */
  /* width: 300px; */
  padding: 20px;
  @media screen and (max-width: ${MOBILE_WIDTH}px) {
    width: 100%;
  }
`;

const Title = styled.div`
  color: #c45b26;
  font-size: x-large;
  font-weight: bold;
  margin: 20px 0px;
`;
const Description = styled.div`
`;
const Button = styled.button`
  border-radius: 5px;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.2);
  padding: 8px 20px;
  color: #c45b26;
  font-weight: bold;
  border: none;
  margin-top: 30px;
  background-color: white;
  &:hover {
    background-color: #EEE;
    cursor: pointer;
  }
`;

const Harvest = () => (
  <Wrapper>
    <HarvestLogo src={HarvestProgramSvg} />
    <ContextArea>
      <Context>
        <Title>
          <FormattedMessage
            id={"Harvest Program"}
          />
        </Title>
        <Description>
          <FormattedMessage
            id={"harvest-description"}
          />
        </Description>
        <Button>
          <FormattedMessage
            id={"Join Partner Program"}
          />
        </Button>
      </Context>
    </ContextArea>
  </Wrapper>
);

export default Harvest;
