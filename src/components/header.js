import { Link } from "gatsby";
import React from "react";
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

const Wrapper = styled.header`
  position: fixed;
  width: 100%;
  z-index: 1000;
  min-height: ${p => p.height}px;
  height: ${p => p.height}px;
  display: flex;
  align-items: center;
  background-color: orange;
  color: white;
  font-weight: bold;
  font-size: xx-large;
`;

const PlaceHolder = styled.div`
  min-height: ${p => p.height}px;
  height: ${p => p.height}px;
`;

const Header = ({ height }) => (
  <>
    <PlaceHolder height={height} />
    <Wrapper height={height} >
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
  </>
)

export default Header
