import React from "react";
import styled from 'styled-components';
import { MOBILE_WIDTH } from 'src/constants/app';
const Wrapper = styled.footer`
  padding: 123px 20px 30px;
  color: white;
  text-align: center;
  background-color: #282625;
  font-family: Lato;
  @media screen and (max-width: ${MOBILE_WIDTH}px) {
    font-size: small;
  }
`;

const Footer = () => (
  <Wrapper>
    © Copyright 2019 Tangerine Network - All Rights Reserved.
  </Wrapper>
);

export default Footer;
