import React from "react";
import styled from 'styled-components';
import { MOBILE_WIDTH } from 'src/constants/app';
// import { FormattedMessage } from 'react-intl';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f27038;
  color: white;
  height: 300px;
  @media screen and (max-width: ${MOBILE_WIDTH}px) {
    /* padding: 20px 0px; */
  }
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 30px;
  margin: 15px;
`;
const Email = styled.div`
  font-weight: bold;
  font-size: 20px;
`;

const Contact = () => (
  <Wrapper>
    <Title>Get Involved</Title>
    <Email>contact@tangerine-network.io</Email>
  </Wrapper>
);

export default Contact;
