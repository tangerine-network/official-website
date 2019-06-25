import React, { useState } from "react";
import { FormattedMessage } from 'react-intl';
import styled, { keyframes } from 'styled-components';
import { HEADER_HEIGHT } from 'src/constants/app';
import Link from 'src/components/Link';
import Logo from 'src/images/real_orange.png';

const LogoImg = styled.img`
  height: 50px;
  width: 50px;
`;
const Title = styled.span`
  font-weight: bold;
  font-size: xx-large;
  margin: 0px 20px;
  a {
    text-decoration: none;
    color: black;
  }
`;

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
    top: -${HEADER_HEIGHT + 5}px;
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
  background-color: white;
  color: black;
  padding: 0px 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
`;

const PlaceHolder = styled.div`
  min-height: ${p => p.height}px;
  height: ${p => p.height}px;
`;

const Padding = styled.div`
  padding: 1;
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
        <LogoImg src={Logo} />
        <Title>
          <Link
            to="/"
          >
            <FormattedMessage
              id="Tangerine Network"
              defaultMessage="Tangerine Network"
            />
          </Link>
        </Title>
        <Padding />
      </Wrapper>
    </>
  );
};

export default Header
