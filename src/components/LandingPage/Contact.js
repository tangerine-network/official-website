import React from "react";
import styled from 'styled-components';
import { MOBILE_WIDTH } from 'src/constants/app';
import { FormattedMessage } from 'react-intl';

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
  & > a {
    text-decoration: none;
    color: white;
  }
`;

const Contact = () => (
  <Wrapper>
    <Title><FormattedMessage id="get_involved" /></Title>
    <Email>
      <a href="mailto:contact@tangerine-network.io">
        contact@tangerine-network.io
      </a>
    </Email>
  </Wrapper>
);

export default Contact;
