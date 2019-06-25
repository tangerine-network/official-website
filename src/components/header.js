import React, { useState } from "react";
import { FormattedMessage } from 'react-intl';
import styled, { keyframes } from 'styled-components';
import {
  HEADER_HEIGHT,
  MOBILE_HEADER_HEIGHT,
  MOBILE_WIDTH,
  MENU_ITEMS,
} from 'src/constants/app';
import Link from 'src/components/Link';
import Logo from 'src/images/real_orange.png';

const LogoImg = styled.img`
  height: 50px;
  width: 50px;
  margin: 0px 20px;
`;
const Title = styled.span`
  font-weight: bold;
  font-size: x-large;
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
  width: 100vw;
  max-width: 100vw;
  z-index: 1000;
  /* left: -16px; */
  top: ${p => p.control ? 0 : -HEADER_HEIGHT}px;
  animation: ${p => p.enableAnimation
    ? (p.control ? popup : hide)
    : ''
  } 0.2s ease-in;
  min-height: ${p => p.height}px;
  height: ${HEADER_HEIGHT}px;
  display: flex;
  align-items: center;
  background-color: white;
  color: black;
  /* padding: 0px 20px; */
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  @media screen and (max-width: ${MOBILE_WIDTH}px) {
    height: ${MOBILE_HEADER_HEIGHT}px;
  }
`;

const PlaceHolder = styled.div`
  min-height: ${HEADER_HEIGHT}px;
  height: ${HEADER_HEIGHT}px;
  @media screen and (max-width: ${MOBILE_WIDTH}px) {
    min-height: ${MOBILE_HEADER_HEIGHT}px;
    height: ${MOBILE_HEADER_HEIGHT}px;
  }
`;

const Padding = styled.div`
  flex: 1;
`;
const MenuItem = styled.div`
  margin: 0px 15px;
  text-align: center;
  cursor: pointer;
  font-size: x-largre;
  &:hover {
    text-shadow: 0 0 0.1px black;
  }
`;
const ItemArea = styled.div`
  display: flex;
  /* border: 1px solid red; */
  margin: 20px;
`;

const Header = ({ showup }) => {
  const [enableAnimation, setEnableAnimation] = useState(false);
  if (!showup && !enableAnimation) {
    setEnableAnimation(true);
  }
  return (
    <>
      <PlaceHolder />
      <Wrapper
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
        <ItemArea>
          {MENU_ITEMS.map(it => (
            <MenuItem key={it.localeKey}>
              <FormattedMessage
                id={it.localeKey}
              />
            </MenuItem>
          ))}
        </ItemArea>
      </Wrapper>
    </>
  );
};

export default Header
