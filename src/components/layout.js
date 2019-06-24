/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useCallback, useRef, useState } from "react";
import styled from "styled-components";
import { addLocaleData } from "react-intl";
import PropTypes from "prop-types";
import { IntlProvider } from 'react-intl';
import en from 'react-intl/locale-data/en';
import zh from 'react-intl/locale-data/zh';
import messages_zh from "../translations/zh-Hant.json";
import messages_en from "../translations/en.json";
import Header from "./header"
import Footer from './footer';

import './layout.css';

addLocaleData([...en, ...zh]);

const messages = {
  'zh-Hant': messages_zh,
  'en': messages_en
};

const Wrapper = styled.div`
  height: 100vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  border: 1px solid red;
  flex: 1;
`;

const HEADER_HEIGHT = 90;
let previousScrollPosition = 0;

const Layout = ({ children, locale }) => {

  const [headerState, setHeaderState] = useState(true);
  const wrapperRef = useRef(null);

  const scrollHandler = useCallback(() => {
    // console.log(wrapperRef.current.scrollTop);
    const scrollTop = wrapperRef.current.scrollTop;
    if ((scrollTop <= HEADER_HEIGHT) && !headerState) {
      // console.log('on');
      setHeaderState(true);
    } else if (headerState &&
      scrollTop > HEADER_HEIGHT &&
      previousScrollPosition < scrollTop
      ) {
        setHeaderState(false);
        // console.log('off');
    } else if (!headerState &&
      scrollTop < previousScrollPosition
      ) {
        setHeaderState(true);
        // console.log('on');
    }
    previousScrollPosition = scrollTop;
  }, [headerState]);

  return (
    <IntlProvider
      locale={locale}
      messages={messages[locale] || messages['en']}
    >
      <Wrapper
        onScroll={scrollHandler}
        ref={wrapperRef}
      >
        <Header height={HEADER_HEIGHT} />
        <Main>
          {children}
          {children}
          {children}
          {children}
          {children}
          {children}
        </Main>
        <Footer />
      </Wrapper>
    </IntlProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
