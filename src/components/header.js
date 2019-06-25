import { Link } from "gatsby";
import React, { useState } from "react";
import { FormattedMessage } from 'react-intl';
import styled, { keyframes } from 'styled-components';
import { HEADER_HEIGHT } from 'src/constants/app';

const popup = keyframes`
  from {
    top: -${HEADER_HEIGHT}px;
  }
  to {
    top: 0;
  }
`;
const hide = keyframes`
  from {
    top: 0px;
  }
  to {
    top: -${HEADER_HEIGHT}px;
  }
`;

const Wrapper = styled.header`
  position: fixed;
  width: 100%;
  z-index: 1000;
  top: ${p => p.control ? 0 : -HEADER_HEIGHT}px;
  animation: ${p => p.enableAnimation
    ? (p.control ? popup : hide)
    : ''
  } 0.2s ease-in;
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

const Header = ({ height, showup }) => {
  const [enableAnimation, setEnableAnimation] = useState(false);
  if (!showup && !enableAnimation) {
    setEnableAnimation(true);
  }
  return (
    <>
      <PlaceHolder height={height} />
      <Wrapper
        height={height}
        control={showup}
        enableAnimation={enableAnimation}
      >
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
  );
};

export default Header
