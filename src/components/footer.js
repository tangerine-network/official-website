import React from "react";
import styled from 'styled-components';

const Wrapper = styled.footer`
  padding: 20px;
  color: white;
  font-size: xx-large;
  background-color: gray;
`;

const Footer = () => (
  <Wrapper>
    我是一個FOOTER
  </Wrapper>
);

export default Footer;
