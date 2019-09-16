import React from "react";
import styled from "styled-components";
import Layout from "../components/layout";
import CommonTerms from '../components/common_tems';
import { MOBILE_WIDTH } from 'src/constants/app';

const Wrapper = styled.div`
  padding: 60px;
  @media screen and (max-width: ${MOBILE_WIDTH}px) {
    padding: 20px;
  }
`;

const MainTitle = styled.div`
  font-size: xx-large;
  font-weight: bold;
`;
const SubTitle = styled.div`
  font-size: large;
`;
const SectionTitle = styled.div`
  margin-top: 40px;
  font-size: x-large;
  font-weight: bold;
`;
const SectionContent = styled.div`
  padding: 20px 0px;
`;

const HighLight = styled.span`
  text-decoration: underline;
  font-weight: bold;
`;

const Terms = ({ pageContext: { locale }, intl }) => (
  <Layout locale={locale}>
    <Wrapper>
      <MainTitle>Tangerine Wallet</MainTitle>
      <SubTitle>Privacy Policy</SubTitle>
      <CommonTerms />
      <SectionContent>
        Given the fact that Tangerine Wallet is based on MetaMask and only few changes were made, most of the wallet’s functionalities remains identical, which includes data collecting. <HighLight>Data collected from Tangerine Wallet will be sent to MetaMask servers</HighLight> and those data will be treated as data collected from the original MetaMask wallet. <HighLight>No privacy data will be sent to our server.</HighLight> Besides our Privacy Policy page, we encourage you to visit MetaMask’s <a href="https://metamask.io/privacy.html">Privacy Policy</a> page to learn more details. (MetaMask’s privacy policy applies to their website and mobile app as well, hence some of the policies are not applicable to Tangerine Wallet. Such as ‘Social Media Widget’, ‘Google Analytics’, etc.)
      </SectionContent>
      <SectionTitle>IMPORTANT: Information we will never collect</SectionTitle>
      <SectionContent>
        We will not collect your private key, wallet seed, addresses, transactions, balances, hashes, full IP address or any personal information. Also we will never ask you to share your private keys or wallet seed. Never trust anyone or any site that asks you to enter your private keys or wallet seed.
      </SectionContent>
      <SectionTitle>What We Collect</SectionTitle>
      <SectionContent>
        With your consent, your click & pageview events will be collected and sent anonymously to MetaMask in order to improve their service. Despite the fact that Tangerine Wallet does not handle your data, MetaMask, on the other hand, might use the data in the ways as they described in their <a href="https://metamask.io/privacy.html">Privacy Policy</a>, which includes but not limited to “disclosing information to third parties”.
      </SectionContent>
      <SectionContent>
        However, you can choose not to share data with MetaMask. Just simply disable the option “Participate in MetaMetrics” under “Settings / Security & Privacy”. You may send a request to <a href="mailto:privacy@metamask.io">privacy@metamask.io</a> regarding your personal information. You may also take GDPR-aligned actions, such as “Opt-out”, “Correct”, “Delete”, “Transfer”. For further details please visit MetaMask’s <a href="https://metamask.io/privacy.html">Privacy Policy</a>.
      </SectionContent>
      <SectionContent>
        <HighLight>
        In conclusion, by using Tangerine Wallet, you agree with the condition that click & pageview events will be handled by MetaMask under your consent and Tangerine Wallet is not responsible for any further actions.
        </HighLight>
      </SectionContent>
    </Wrapper>
  </Layout>
);

export default Terms;
