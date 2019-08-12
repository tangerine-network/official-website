import React from "react";
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { MOBILE_WIDTH } from 'src/constants/app';
import Slide from 'react-reveal/Fade';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 0px 60px;
  @media screen and (max-width: ${MOBILE_WIDTH}px) {
    flex-direction: column;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #DDD;
  flex: 1;
  height: 300px;
  padding: 30px;
  @media screen and (max-width: ${MOBILE_WIDTH}px) {
    padding: 20px;
    width: 90%;
    height: 200px;
  }
`;

const Title = styled.div`
  color: #c45b26;
  font-size: larger;
  font-weight: bold;
`;
const Content = styled.div`
  color: #282625;
  font-size: normal;
`;
const ExtLink = styled.div`
  cursor: pointer;
  display: flex;
  margin-top: 10px;
`;
const Padding = styled.div`
  flex: 1;
`;


const ResourceItems = [{
  title: 'Faucet',
  content: 'read_the_paper',
  links: [{
    title: 'get_mainnet_token',
    link: 'https://byzantine-lab.gitlab.io/wiki/#/Dapp-Development-Guide'
  }]
}, {
  title: 'Paper',
  content: 'read_the_paper',
  links: [{
    title: 'Manifesto',
    link: 'https://byzantine-lab.gitlab.io/wiki/#/Dapp-Development-Guide'
  }, {
    title: 'Consensus_Algorithm',
    link: 'https://byzantine-lab.gitlab.io/wiki/#/Dapp-Development-Guide'
  }]
}, {
  title: 'dev-guide',
  content: 'build_your_dapps',
  links: [{
    title: 'Resource_Wiki',
    link: 'https://byzantine-lab.gitlab.io/wiki/#/Dapp-Development-Guide'
  }]
}]

const Resources = () => (
  <Slide bottom>
    <Wrapper>
      <Padding />
      {(ResourceItems).map((resource, key) => (
        <Card key={key}>
          <Title>
            <FormattedMessage id={resource.title} />
          </Title>
          <Content><FormattedMessage id={resource.content} /></Content>
          <Padding />
          {(resource.links || []).map((link, key) => (
            <ExtLink onClick={() => window.open(link.link)} key={key}>
              <FormattedMessage id={link.title} />
              <Padding />
              >
            </ExtLink>
          ))}
        </Card>
      ))}
      <Padding />
    </Wrapper>
  </Slide>
);

export default Resources;
