/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
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

const Layout = ({ children, locale }) => {

  return (
    <IntlProvider
      locale={locale}
      messages={messages[locale] || messages['en']}
    >
      <Wrapper>
        <Header />
        <Main>{children}</Main>
        <Footer />
      </Wrapper>
    </IntlProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
