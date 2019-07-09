import React, { useState, useEffect } from "react";
import { FormattedMessage } from 'react-intl';
// import { navigate } from '@reach/router';
import styled, { keyframes } from 'styled-components';
import {
  HEADER_HEIGHT,
  MOBILE_HEADER_HEIGHT,
  MOBILE_WIDTH,
  MENU_ITEMS,
} from 'src/constants/app';
import Locales from 'src/constants/locales';
import Link from 'src/components/Link';
import Logo from 'src/images/tangerine-logo.svg';
import memu from 'src/images/menu-mobile.svg';
import closeSvg from 'src/images/close.svg';

const LogoImg = styled.img`
  /* border: 1px solid black; */
  @media screen and (max-width: ${MOBILE_WIDTH}px) {
    height: 30px;
  }
`;
const MenuImg = styled.img`
  height: 25px;
  @media screen and (min-width: ${MOBILE_WIDTH}px) {
    display: none;
  }
  &:hover {
    cursor: pointer;
  }
`;

const popup = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const hide = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const Wrapper = styled.header`
  position: fixed;
  width: 100vw;
  max-width: 100vw;
  z-index: 100;
  /* top: ${p => p.control ? 0 : -HEADER_HEIGHT}px; */
  opacity: ${p => p.control ? 1 : 0};
  /* animation: ${p => p.enableAnimation
    ? (p.control ? popup : hide)
    : ''
  } 0.2s ease-in; */
  animation: ${p => p.control ? popup : hide} 0.2s linear;
  min-height: ${p => p.height}px;
  height: ${HEADER_HEIGHT}px;
  display: flex;
  align-items: center;
  background-color: white;
  color: black;
  padding: 0px 60px;
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.2);
  @media screen and (max-width: ${MOBILE_WIDTH}px) {
    height: ${MOBILE_HEADER_HEIGHT}px;
    padding: 0px 20px;
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
  padding: 10px 0px;
  margin-left: 50px;
  text-align: center;
  cursor: pointer;
  font-size: x-largre;
  &:hover {
    text-shadow: 0 0 0.1px black;
  }
`;
const ItemArea = styled.div`
  display: flex;
  margin: 20px;
  @media screen and (max-width: ${MOBILE_WIDTH}px) {
    display: none;
  }
`;

const MobilePopup = keyframes`
  from {
    opacity: 0;
    z-index: -1;
  }
  to {
    opacity: 1;
    z-index: 1001;
  }
`;
const MobileHide = keyframes`
  from {
    opacity: 1;
    z-index: 1001;
  }
  to {
    opacity: 0;
    z-index: -1;
  }
`;

const MobileMenu = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: ${p => p.show ? 1001 : -1};;
  background-color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  opacity: ${p => p.show ? 1 : 0};
  animation: ${p => (p.show !== null)
    ? (p.show ? MobilePopup : MobileHide)
    : ''
  } 0.2s ease-out;
`;
const CloseIcon = styled.img`
  width: 34px;
  cursor: pointer;
`;

const MobileMenuItem = styled.div`
  margin: 20px 0px;
`;
const LanguageItem = styled(MenuItem)`
  position: relative;
`;
const Dropdown = styled.div`
  min-width: 150px;
  display: ${p => p.show ? 'visible' : 'none'};
  opacity: ${p => p.show ? 1 : 0};
  animation: ${p => p.show ? popup : hide} 0.3s linear;
  position: absolute;
  top: 100%;
  right: 0px;
  padding: 10px;
  text-align: right;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.2);
`;

const Header = ({ showup }) => {
  const [langSelectOn, setLangSelect] = useState();
  const [enableAnimation, setEnableAnimation] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(null);
  useEffect(() => {
    if (!showup && !enableAnimation) {
      setEnableAnimation(true);
    }
  });

  return (
    <>
      <MobileMenu show={mobileMenu}>
        <CloseIcon
          onClick={() => {
            setMobileMenu(false);
          }}
          src={closeSvg}
        />
        <Padding />
        {MENU_ITEMS.map(it => (
          <Link key={it.localeKey} to={it.link}>
            <MobileMenuItem onClick={() => setMobileMenu(false)}>
              <FormattedMessage
                id={it.localeKey}
              />
            </MobileMenuItem>
          </Link>
        ))}
        <Padding />
        {Object.keys(Locales).map((it, key) => (it !== 'default') && (
          <Link
            ignoreLocale
            title={Locales[it].locale}
            to={Locales[it].path}
            key={it}
          >
            <MobileMenuItem
              onClick={() => setMobileMenu(false)}
            >
              {Locales[it].locale}
            </MobileMenuItem>
          </Link>
        ))}
        <Padding />
        <Padding />
        <Padding />
      </MobileMenu>
      <PlaceHolder />
      <Wrapper
        control={showup}
        enableAnimation={enableAnimation}
      >
        <LogoImg src={Logo} />
        {/* <Title>
          <Link
            to="/"
          >
            <FormattedMessage
              id="Tangerine Network"
              defaultMessage="Tangerine Network"
            />
          </Link>
        </Title> */}
        <Padding />
        <ItemArea>
          {MENU_ITEMS.map(it => (
            <Link key={it.localeKey} to={it.link}>
              <MenuItem
                key={it.localeKey}
              >
                <FormattedMessage
                  id={it.localeKey}
                />
              </MenuItem>
            </Link>
          ))}
          <LanguageItem
            key="Language"
            onMouseEnter={() => setLangSelect(true)}
            onMouseLeave={() => setLangSelect(false)}
          >
            {/* <FormattedMessage
              id="Language"
            /> */}
            Language ▾
            <Dropdown show={langSelectOn}>
              {Object.keys(Locales).map((it, key) => (it !== 'default') && (
                <Link
                  ignoreLocale
                  title={Locales[it].locale}
                  to={Locales[it].path}
                  key={it}
                >
                  <MobileMenuItem>{Locales[it].locale}</MobileMenuItem>
                </Link>
              ))}
            </Dropdown>
          </LanguageItem>
        </ItemArea>
        <MenuImg
          onClick={() => {
            setMobileMenu(true);
          }}
          src={memu}
        />
      </Wrapper>
    </>
  );
};

export default Header
