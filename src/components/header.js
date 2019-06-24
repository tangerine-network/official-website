import { Link } from "gatsby";
import React from "react";
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

const Wrapper = styled.header`
  border: 1px solid red;
  display: flex;
  align-items: center;
  background-color: orange;
  color: white;
  font-weight: bold;
  font-size: xx-large;
  padding: 20px;
`;

const Header = ({ title }) => (
  <Wrapper>
    <Link
      to="/"
      style={{
        color: `white`,
        textDecoration: `none`,
      }}
    >
      <FormattedMessage
        id="Tangerine Network"
        defaultMessage="Tangerine Network"
      />
    </Link>
  </Wrapper>
)

export default Header
