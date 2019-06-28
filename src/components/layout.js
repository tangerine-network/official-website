/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useCallback, useRef, useState } from "react";
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components";
import { addLocaleData, injectIntl, IntlProvider } from "react-intl";
import PropTypes from "prop-types";
import en from 'react-intl/locale-data/en';
import zh from 'react-intl/locale-data/zh';
import throttle from 'lodash-es/throttle';
import messages_zh from "../translations/zh-Hant.json";
import messages_en from "../translations/en.json";
import site_logo from 'src/images/site_logo.png';
import Header from "./header"
import Footer from './footer';
import {
  GET_WIDTH,
  MOBILE_WIDTH,
  MAIN_AREA_DESKTOP_HEIGHT,
  MAIN_AREA_MOBILE_HEIGHT,
} from 'src/constants/app';

addLocaleData([...en, ...zh]);

const messages = {
  'zh-Hant': messages_zh,
  'en': messages_en
};

const Wrapper = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  max-width: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  -webkit-overflow-scrolling: touch;
`;

const Main = styled.main`
  flex: 1;
`;

let previousScrollPosition = 0;

const InjectedSEO = injectIntl(({ intl }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            siteUrl
          }
        }
      }
    `
  );
  return (
    <Helmet
      htmlAttributes={{
        lang: intl.locale || 'en',
      }}
    >
      <title>{intl.formatMessage({ id: 'Tangerine Network' })}</title>

      <link rel="alternate" hreflang="en" href={`${site.siteMetadata.siteUrl}`} />
      <link rel="alternate" hreflang="en" href={`${site.siteMetadata.siteUrl}/en`} />
      <link rel="alternate" hreflang="zh-Hant" href={`${site.siteMetadata.siteUrl}/zh-Hant`} />

      <meta name="description" content={intl.formatMessage({ id: 'tangerine-description' })} />
      <meta name="keywords" content="tangerine, blockchain, decentralized"/>
      <meta itemprop="type" content="website" />
      <meta itemprop="image" content={site_logo} />

      <meta property="og:title" content={intl.formatMessage({ id: 'Tangerine Network' })} />
      <meta property="og:description" content={intl.formatMessage({ id: 'tangerine-description' })} />
      <meta property="og:type" content="website"/>
      <meta property="og:image" content={site_logo} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={intl.formatMessage({ id: 'Tangerine Network' })} />
      <meta name="twitter:image" content={intl.formatMessage({ id: 'tangerine-description' })} />
      <meta name="twitter:image:src" content={site_logo} />
      <meta name="twitter:site" content={intl.formatMessage({ id: 'Tangerine Network' })} />
      <meta name="twitter:creator" content={intl.formatMessage({ id: 'Tangerine Network' }) } />
      <meta name="twitter:description" content={intl.formatMessage({ id: 'tangerine-description' })} />

      <meta name="twitter:data1" value="5 min read" />
      <meta name="twitter:app:name:iphone" content={intl.formatMessage({ id: 'Tangerine Network' }) } />
    </Helmet>
  );
});

const Layout = ({ children, locale }) => {

  const [showHeader, setShowheader] = useState(true);
  const wrapperRef = useRef(null);

  const scrollHandler = useCallback(throttle(() => {
    const scrollTop = wrapperRef.current.scrollTop;
    const TOP_AREA = (GET_WIDTH() > MOBILE_WIDTH)
      ? MAIN_AREA_DESKTOP_HEIGHT
      : MAIN_AREA_MOBILE_HEIGHT;

    if ((scrollTop <= TOP_AREA) && !showHeader) {
      setShowheader(true);
    } else if (showHeader &&
      scrollTop > (TOP_AREA) &&
      previousScrollPosition < scrollTop
    ) {
        setShowheader(false);
    } else if (!showHeader &&
      scrollTop < previousScrollPosition
      ) {
        setShowheader(true);
    }
    previousScrollPosition = scrollTop;
  }, 100), [showHeader]);

  return (
    <IntlProvider
      locale={locale}
      messages={messages[locale] || messages['en']}
    >
      <Wrapper
        onScroll={scrollHandler}
        ref={wrapperRef}
      >

        <InjectedSEO />
        <Header showup={showHeader} />
        <Main>
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
