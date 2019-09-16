import React from "react";
import styled from "styled-components";
const Wrapper = styled.div`
`;

const Time = styled.div`
  font-weight: bold;
  font-size: large;
`;

const Section = styled.div`
  padding: 20px 0px;
`;

const Underline = styled.span`
  font-weight: bold;
  text-decoration: underline;
`;

const CommonTerms = () => (
  <Wrapper>
    <Time>Last updated: September 16, 2019</Time>
    <Section>
      By using the Services, you accept our <a href="/tangerine_wallet_terms" >Terms of Use</a> and <a href="/tangerine_wallet_privacy">Privacy Policy.</a> <br />
      <Underline>
        If you DO NOT agree with any part of the terms of use or privacy policy,
        please STOP using any of the services and UNINSTALL the software immediately.
      </Underline>
    </Section>
    <Section>
    Tangerine Wallet provides a platform to manage accounts for Tangerine Network and allow websites or applications to interact with Tangerine Network blockchain, while keeping the user in control over the approval of transactions.
    </Section>
    <Section>
    Tangerine Wallet is a software distribution based on MetaMask (<a href="https://github.com/MetaMask/metamask-extension/blob/master/LICENSE" >MIT licensed</a>) with minimum modifications such as:
<br />1. Images and wordings
<br />2. Blockchain system (Ethereum is replaced by Tangerine Network)
    </Section>
    <Section>
      <Underline>
        Please note that Tangerine Wallet DOES NOT connect to Ethereum blockchain by default.
      </Underline>
    </Section>
  </Wrapper>
);

export default CommonTerms;
