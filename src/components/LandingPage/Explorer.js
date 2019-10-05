import React from "react";
import styled from 'styled-components';
import { MOBILE_WIDTH } from 'src/constants/app';
import { FormattedMessage } from 'react-intl';
import explorerLogo from 'src/images/explorer-logo.svg';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  padding: 100px 0px;
  overflow: hidden;
  justify-content: center;
  @media screen and (max-width: ${MOBILE_WIDTH}px) {
    flex-direction: column;
    padding: 80px 0px;
    align-items: center;
  }
`;

const Section = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: ${p => p.align || 'flex-start'};
  padding: 20px;
  margin-bottom: 100px;
  z-index: 10;
  @media screen and (max-width: ${MOBILE_WIDTH}px) {
    margin-bottom: 0px;
    align-items: center;
  }
`;
const TextArea = styled.div`
  width: 386px;
  @media screen and (max-width: ${MOBILE_WIDTH}px) {
    width: 100%;
    height: auto;
    text-align: center;
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

const Link  = styled.div`
  width: 100%;
  margin-top: 50px;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  &:hover {
    cursor: pointer;
  }
  @media screen and (max-width: ${MOBILE_WIDTH}px) {
    margin-top: 25px;
    text-align: center;
    justify-content: center;
  }
`;

const Logo = styled.img`
  position: absolute;
  height: 800px;
  margin-left: 200px;
  bottom: -450px;
  @media screen and (max-width: ${MOBILE_WIDTH}px) {
    flex-direction: column;
    padding: 40px 0px;
    width: 90%;
    margin-left: 0px;
    bottom: auto;
  }
`;

const ArrowIcon = styled.span`
  font-weight: normal;
  margin-left: 30px;
  @media screen and (max-width: ${MOBILE_WIDTH}px) {
    margin-left: 15px;
  }
`;

const Explorer = () => (
  <Wrapper>
    <Logo src={explorerLogo} />
    <Section />
    <Section>
      <TextArea>
        <Title><FormattedMessage id="tangerine-explorer" /></Title>
        <SubTitle><FormattedMessage id="tangerine-explorer-description" /></SubTitle>
      </TextArea>
      <Link onClick={() => window.open('https://tangerine.garden')}>
        <FormattedMessage id="see_how_it_works" /><ArrowIcon>></ArrowIcon>
      </Link>
    </Section>
    <Section />
    <Section />
  </Wrapper>
);

export default Explorer;
