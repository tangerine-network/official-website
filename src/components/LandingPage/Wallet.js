import React from "react";
import styled from 'styled-components';
import { MOBILE_WIDTH } from 'src/constants/app';
import WalletSVG from 'src/images/wallet.svg';
import { FormattedMessage } from 'react-intl';

const Wrapper = styled.div`
  display: flex;
  padding: 100px 0px;
  @media screen and (max-width: ${MOBILE_WIDTH}px) {
    flex-direction: column;
    padding: 80px 0px;
  }
`;

const Section = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: ${p => p.align || 'flex-start'};
  /* border: 1px solid #DDD; */
  padding: 20px;
`;
const WalletImg = styled.img`
  width: 386px;
  @media screen and (max-width: ${MOBILE_WIDTH}px) {
    width: 100%;
    /* height: auto; */
  }
`;
const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
  color: #e05b21;
`;
const SubTitle = styled.div`
  font-size: 18px;
  color: #373433;
  margin-bottom: 20px;
`;

const Button = styled.div`
  height: 50px;
  width: 297px;
  display: flex;
  align-items: center;
  padding: 0px 24px;
  border: 1px solid #373433;
  border-radius: 5px;
  font-weight: bold;
  font-size: 16px;
  color: #373433;
  margin-bottom: 16px;
  cursor: pointer;
  @media screen and (max-width: ${MOBILE_WIDTH}px) {
    width: 100%;
    height: 40px;
    font-size: 14px;
    /* font-weight: normal; */
  }
  &:hover {
    background-color: #F8F8F8;
  }
`;
const Padding = styled.div`
  flex: 1;
`;

const Wallet = () => (
  <Wrapper>
    <Section align="flex-end">
      <WalletImg src={WalletSVG} />
    </Section>
    <Section>
      <Title><FormattedMessage id="Tangerine-Wallet" /></Title>
      <SubTitle><FormattedMessage id="browser-extension" /></SubTitle>
      <Padding />
      <Button
        onClick={() => window.open('https://chrome.google.com/webstore/detail/tangerine-wallet/pmfboceaaldgniakejfcfkidccbiimae')}
      >
        <FormattedMessage id="download-chrome-extension" />
        <Padding /> >
      </Button>
      <Button
        onClick={() => window.open('https://addons.mozilla.org/en-US/firefox/addon/tangerine-wallet/')}
      >
        <FormattedMessage id="download-firefox-extension" />
        <Padding /> >
      </Button>
    </Section>
  </Wrapper>
);

export default Wallet;
