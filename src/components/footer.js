import React from "react";
import styled from 'styled-components';

const Wrapper = styled.footer`
  padding: 75px 0px 30px;
  color: white;
  text-align: center;
  background-color: #282625;
  font-family: Lato;
`;

const Footer = () => (
  <Wrapper>
    © Copyright 2019 Tangerine Network - All Rights Reserved.
  </Wrapper>
);

export default Footer;
