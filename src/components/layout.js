/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useCallback, useState, useEffect } from "react";
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
import og_image from 'src/images/og-image.png';
import appService from '../services/app';
import Header from "./header"
import Footer from './footer';

addLocaleData([...en, ...zh]);

const messages = {
  'zh-Hant': messages_zh,
  'en': messages_en
};

const Wrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  -webkit-overflow-scrolling: touch;
`;

const Main = styled.main`
  flex: 1;
`;

let previousScrollPosition = 0;

const schema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "url": "https://tangerine-network.io",
  "name": "Tangerine Network",
  "description": "A next-generation blockchain built on fast, fair, and secure consensus protocol",
  "logo": site_logo,
  "foundingDate": "2019",
  "member": [
    {
      "@type": "Organization",
      "name": "Byzantine Lab",
      "url": "https://byzantine-lab.io",
      "sameAs": [
        "https://www.linkedin.com/company/byzantine-lab/",
        "https://www.facebook.com/Byzantine-Lab-460839568073884/"
      ]
    },
    {
      "@type": "Organization",
      "name": "Block Tempo",
      "url": "https://www.blocktempo.com",
      "sameAs": [
        "https://www.facebook.com/BlockTempo/",
        "https://www.linkedin.com/company/blocktempo/"
      ]
    },
    {
      "@type": "Organization",
      "name": "CoolBitX",
      "url": "https://coolbitx.com/",
      "sameAs": [
        "https://www.facebook.com/pages/Coolbitx-Technology/1855137411406678",
        "http://linkedin.com/company/coolbitx/"
      ]
    },
    {
      "@type": "Organization",
      "name": "Dapp Pocket",
      "url": "https://www.dapppocket.io/",
      "sameAs": [
        "https://www.facebook.com/DappPocket/",
        "https://www.linkedin.com/company/dapp-pocket/"
      ]
    },
    {
      "@type": "Organization",
      "name": "KryptoGO",
      "url": "https://kryptogo.app/",
      "sameAs": [
        "https://www.facebook.com/kryptogo/",
        "https://www.linkedin.com/company/kryptogo/"
      ]
    },
    {
      "@type": "Organization",
      "name": "LiMaGo",
      "url": "https://limago123.com/",
      "sameAs": []
    },
    {
      "@type": "Organization",
      "name": "Lootex",
      "url": "https://lootex.io/",
      "sameAs": [
        "https://www.facebook.com/lootex.io/",

      ]
    },
    {
      "@type": "Organization",
      "name": "Mithril",
      "url": "https://mith.io/",
      "sameAs": [
        "https://www.facebook.com/MithrilOfficial/",
        "https://www.linkedin.com/company/mithio/"
      ]
    },
    {
      "@type": "Organization",
      "name": "Pelith",
      "url": "https://pelith.com/",
      "sameAs": [
        "https://www.linkedin.com/company/pelith/"
      ]
    },
    {
      "@type": "Organization",
      "name": "Portto",
      "url": "https://portto.io/",
      "sameAs": [
        "https://www.facebook.com/portto.io",
        "https://www.linkedin.com/company/portto/"
      ]
    },
    {
      "@type": "Organization",
      "name": "SOLA Bloc",
      "url": "https://www.solabloc.com/",
      "sameAs": [
        "https://www.facebook.com/SOLABloc/",
        "https://www.linkedin.com/company/solabloc/"
      ]
    },
    {
      "@type": "Organization",
      "name": "TOKAMAKLABS",
      "url": "https://tokamaklabs.io/",
      "sameAs": [
        "https://www.facebook.com/TokamakLabs/",
        "https://www.linkedin.com/company/tokamak-labs/"
      ]
    },
    {
      "@type": "Organization",
      "name": "YZU CIS Lab / 元智大學 / Cryptography and Information Security Lab",
      "url": "https://wycchen.github.io/cislab/",
      "sameAs": [
        "https://wycchen.github.io/",
        "https://www.yzu.edu.tw"
      ]
    },
    {
      "@type": "Organization",
      "name": "台大共識實驗室 / NTU ABC Lab",
      "url": "https://www.csie.ntu.edu.tw/~liao/",
      "sameAs": [
        "https://www.csie.ntu.edu.tw/",
      ]
    },
    {
      "@type": "Organization",
      "name": "中興大學資訊管理學系 資訊與網路安全管理實驗室 / Information and network security laboratory",
      "url": "http://www.dgdel.nchu.edu.tw/intro_lab.php",
      "sameAs": []
    },
    {
      "@type": "Organization",
      "name": "逢甲大學 PDP Lab",
      "url": "http://140.134.25.125",
      "sameAs": []
    },
    {
      "@type": "Organization",
      "name": "快速密碼學實驗室 / fast crypto lab",
      "url": "http://ee.ntu.edu.tw/article/teacher.person/jobSN/3/navSN/530/webSN/645/teacherSN/122",
      "sameAs": [
        "https://www.facebook.com/fastcryptolab/",
        "https://github.com/fast-crypto-lab"
      ]
    },
    {
      "@type": "Organization",
      "name": "BitoEX",
      "url": "https://www.bitoex.com/",
      "sameAs": [
        "https://www.facebook.com/bitoex/",
        "https://www.linkedin.com/company/bitoex/"
      ]
    },
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "contact@tangerine-network.io",
    "contactType": "Customer service",
    "url": "https://tangerine-netowrk.io/",
  },
  "owns": [
    {
      "@type": "product",
      "name": "Tangerine Network",
      "url": "https://tangerine-network.io",
      "color": "#e05b21",
    }
  ]
};
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

      <link rel="canonical" href={`${site.siteMetadata.siteUrl}`} />
      <link rel="alternate" hreflang="en" href={`${site.siteMetadata.siteUrl}/en`} />
      <link rel="alternate" hreflang="zh-Hant" href={`${site.siteMetadata.siteUrl}/zh-Hant`} />

      <meta property="tangerine:image" content={site_logo} />
      <meta name="google-site-verification" content="v2itVXrzyROVzjVLUgDj6dhY5OuEvp8ez3EhUecuTR4" />
      <meta name="description" content={intl.formatMessage({ id: 'tangerine-description' })} />
      <meta itemprop="type" content="website" />
      <meta itemprop="image" content={site_logo} />

      <meta property="og:title" content={intl.formatMessage({ id: 'Tangerine Network' })} />
      <meta property="og:description" content={intl.formatMessage({ id: 'tangerine-description' })} />
      <meta property="og:type" content="website"/>
      <meta property="og:image" content={og_image} />
      <meta property="og:site_name" content={intl.formatMessage({ id: 'Tangerine Network' })}/>
      <meta property="og:url" content={site.siteMetadata.siteUrl} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={intl.formatMessage({ id: 'Tangerine Network' })} />
      <meta name="twitter:image" content={intl.formatMessage({ id: 'tangerine-description' })} />
      <meta name="twitter:image:src" content={og_image} />
      <meta name="twitter:site" content={intl.formatMessage({ id: 'Tangerine Network' })} />
      <meta name="twitter:creator" content={intl.formatMessage({ id: 'Tangerine Network' }) } />
      <meta name="twitter:description" content={intl.formatMessage({ id: 'tangerine-description' })} />

      <meta name="twitter:data1" value="5 min read" />
      <meta name="twitter:app:name:iphone" content={intl.formatMessage({ id: 'Tangerine Network' }) } />

      <meta name="keywords" lang="en" content="tangerine network, blockchain, decentralized, byzantine consensus algorithm"/>
      <meta name="keywords" lang="zh" content="柑橘網路, 去中心化, 區塊鏈, 拜占庭共識演算法"/>

      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
});

const ModalBackground = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  opacity: ${p => p.show ? 1 : 0};
  z-index: 1000;
  transition: 0.3s opacity ease-out;
  pointer-events: ${p => p.show ? 'auto' : 'none'};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ModalArea = styled.div`
  background: white;
`;

const Layout = ({ children, locale }) => {

  const [displayModal, setDisplayModal] = useState();
  const [modal, setModal] = useState();

  useEffect(() => {
    appService.setOpenModal((content) => {
      setDisplayModal(true);
      setModal(content);
    });
    appService.setCloseModal(() => {
      setDisplayModal(false);
      setTimeout(() => setModal(undefined), 3000);
    });
  }, []);

  const [showHeader, setShowheader] = useState(true);

  const scrollHandler = useCallback(throttle(() => {
    const scrollTop = window.scrollY;
    if ((scrollTop <= 100) && !showHeader) {
      setShowheader(true);
    } else if (showHeader &&
      scrollTop > (100) &&
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

  useEffect(() => {
    const body = document.body;
    body.onscroll = scrollHandler;
  }, [scrollHandler]);

  return (
    <IntlProvider
      locale={locale}
      messages={messages[locale] || messages['en']}
    >
      <Wrapper>
        <ModalBackground
          show={modal && displayModal}
        >
          <ModalArea
            onClick={e => e.stopPropagation()}
          >
            {modal}
          </ModalArea>
        </ModalBackground>
        <InjectedSEO />
        <Header showup={showHeader} />
        <Main>
          {children}
        </Main>
        <Footer />
      </Wrapper>
    </IntlProvider>
  )
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
