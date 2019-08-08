import React from "react";
import styled from 'styled-components';
import { MOBILE_WIDTH } from 'src/constants/app';
import { FormattedMessage } from 'react-intl';

const Wrapper = styled.div`
  display: flex;
  padding: 100px 0px;
  @media screen and (max-width: ${MOBILE_WIDTH}px) {
    flex-direction: column;
    padding: 40px 0px;
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
const TextArea = styled.div`
  width: 386px;
  @media screen and (max-width: ${MOBILE_WIDTH}px) {
    width: 100%;
    height: auto;
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

const Explorer = () => (
  <Wrapper>
    <Section align="flex-end">
      <TextArea>
        <Title><FormattedMessage id="tangerine-explorer" /></Title>
        <SubTitle><FormattedMessage id="tangerine-explorer-description" /></SubTitle>
      </TextArea>

    </Section>
    <Section>
      s
    </Section>
  </Wrapper>
);

export default Explorer;
