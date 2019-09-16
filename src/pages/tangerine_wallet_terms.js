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
const SectionSubTitle = styled.div`
  margin-top: 20px;
  font-size: large;
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
      <SubTitle>Terms of Use</SubTitle>
      <CommonTerms />
      <SectionTitle>1. Eligibility</SectionTitle>
      <SectionContent>
        <HighLight>
          You hereby represent and warrant that you are fully able and competent to enter into the terms, conditions, obligations, affirmations, representations and warranties set forth in these Terms and to abide by and comply with these Terms.
        </HighLight>
      </SectionContent>
      <SectionContent>
        Tangerine Wallet is a global platform and by accessing the Content or Services, you are representing and warranting that you are of the legal age of majority in your jurisdiction as is required to access such Services and Content and enter into arrangements as provided by the Service. You further represent that you are otherwise legally permitted to use the service in your jurisdiction including owning cryptographic tokens of value, and interacting with the Services or Content in any way.
      </SectionContent>
      <SectionContent>
        <HighLight>
          You further represent you are responsible for ensuring compliance with the laws of your jurisdiction and acknowledge that Tangerine Wallet is not liable for your compliance with such laws.
        </HighLight>
      </SectionContent>
      <SectionTitle>2. Representations, Warranties and Risks</SectionTitle>
      <SectionSubTitle>2.1 Warranty Disclaimer</SectionSubTitle>
      <SectionContent>
        <HighLight>You expressly understand and agree that your use of the Service is at your sole risk.</HighLight> The Service (including the Service and the Content) are provided on an “AS IS” and “as available” basis, without warranties of any kind, either express or implied, including, without limitation, implied warranty of merchantability, fitness for a particular purpose or non-infringement.
      </SectionContent>
      <SectionContent>
        You acknowledge that Tangerine Wallet has no control over, and no duty to take any action regarding: which users gain access to or use the Service; what affects the Content may have on you; how you may interpret or use the Content; or what actions you may take as a result of having been exposed to the Content. You release Tangerine Wallet from all liability for you having acquired or not acquired Content through the Service. Tangerine Wallet makes no representations concerning any Content contained in or accessed through the Service, and Tangerine Wallet will not be responsible or liable for the accuracy, copyright compliance, legality or decency of material contained in or accessed through the Service.
      </SectionContent>
      <SectionContent>
        <HighLight>You acknowledge that Tangerine Wallet is not responsible for transferring, safeguarding, or maintaining your private keys or any digital currency associated therewith.</HighLight> If you lose, mishandle or have stolen associated digital currency private keys, you acknowledge that you may not be able to recover associated digital currency, and that Tangerine Wallet is not responsible for such loss. You acknowledge that Tangerine Wallet is not responsible for any loss, damage or liability arising from your failure to comply with the terms hereunder.
      </SectionContent>
      <SectionTitle>2.2 Sophistication, Risk and Volatility in Blockchain or Cryptographic System</SectionTitle>
      <SectionContent>
        You represent that you understand the inherent risks associated with cryptographic systems; and warrant that you have an understanding of the usage and intricacies of native cryptographic tokens, like Tangerine Network, Ether (ETH) and Bitcoin (BTC), smart contract based tokens such as those that follow the Ethereum Token Standard (https://github.com/ethereum/EIPs/issues/20), and blockchain-based software systems.
      </SectionContent>
      <SectionContent>
        You acknowledge and understand that Cryptography is a progressing field. Advances in code cracking or technical advances such as the development of quantum computers may present risks to cryptocurrencies and Services of Content, which could result in the theft or loss of your cryptographic tokens or property.
      </SectionContent>
      <SectionContent>
        You understand that Tangerine Network, Ethereum and other blockchain technologies and associated currencies or tokens are highly volatile due to many factors including but not limited to adoption, speculation, technology and security risks. You also acknowledge that the cost of transacting on such technologies is variable and may increase at any time causing impact to any activities taking place on the Tangerine Network or Ethereum blockchain. You acknowledge these risks and represent that Tangerine Wallet cannot be held liable for such fluctuations or increased costs.
      </SectionContent>
      <SectionContent>
        You acknowledge that <HighLight>EVM (Ethereum Virtual Machine) based applications</HighLight> are code subject to flaws and acknowledge that you are solely responsible for evaluating any code provided by the Services or Content and the trustworthiness of any third-party websites, products, smart-contracts, or Content you access or use through the Service. You further expressly acknowledge and represent that <HighLight>EVM based applications</HighLight> can be written maliciously or negligently, that Tangerine Wallet cannot be held liable for your interaction with such applications and that such applications may cause the loss of property or even identity.
      </SectionContent>
      <SectionTitle>3. Account Password and Security</SectionTitle>
      <SectionContent>
        <HighLight>When setting up an account within Tangerine Wallet, you will be responsible for keeping your own account secrets, which may be a twelve-word seed phrase, an account file, or other locally stored secret information.</HighLight>
        Tangerine Wallet encrypts this information locally with a password you provide, that we never send to our servers.
      </SectionContent>
      <SectionContent>
        You agree to
        <br />(a) never use the same password for Tangerine Wallet that you have ever used outside of this service
        <br />(b) keep your secret information and password confidential and do not share them with anyone else
      </SectionContent>
    </Wrapper>
  </Layout>
);

export default Terms;
