import React, { useState } from "react";
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { MOBILE_WIDTH } from 'src/constants/app';
// import Slide from 'react-reveal/Fade';
import app from '../../services/app';

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
    margin-top: 20px;
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


const FaucetWrapper = styled.div`
  @media screen and (max-width: ${MOBILE_WIDTH}px) {
    width: 90vw;
    padding: 30px;
  }
  @media screen and (min-width: ${MOBILE_WIDTH}px) {
    min-width: 750px;
    padding: 40px;
  }
`;

const AddressInput = styled.input`
  padding: 10px 8px;
  border: 1px solid #979797;
  margin: 40px 0px;
  width: 100%;
`;

const Button = styled.div`
  padding: 10px 20px;
  background: #c45b26;
  color: white;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  display: inline-block;
`;

const requestTan = async (address) => fetch(
  'https://api.tangerine.garden/v1/network/faucet',
  {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ address })
  }
).then(async (res) => {
  if (res.status !== 200) {
    throw new Error('Cannot request TAN');
  }
  const result = await res.json();
  return result;
})

const CloseRow = styled.div`
  text-align: right;
`;
const CloseButton = styled.span`
  cursor: pointer;
`;

const Error = styled.div`
  color: red;
`;

const TransactionLink = styled.div`
  font-weight: bold;
  cursor: pointer;
`;

const Faucet = () => {
  const [addr, setAddr] = useState('');
  const [loading, setLoading] = useState();
  const [error, setError] = useState();
  const [txHash, setTxHash] = useState();
  return (
    <FaucetWrapper>
      <CloseRow>
        <CloseButton onClick={app.closeModal}>X</CloseButton>
      </CloseRow>
      <Title>
        <FormattedMessage id={'get_mainnet_token'} />
      </Title>
      <AddressInput
        value={addr}
        onChange={e => setAddr(e.target.value)}
        placeholder={'0x'}
      />
      {txHash && (
        <div>
          Successfully requested TAN! <br />
          <TransactionLink
            onClick={() => window.open(`https://tangerine.garden/transaction/${txHash}`)}
          >
            View Transaction
          </TransactionLink>
        </div>
      )}
      {!loading && (
        <Button
          onClick={async () => {
            setLoading(true);
            try {
              const res = await requestTan(addr);
              const { result } = res || {};
              if (result && result.txhash) {
                setTxHash(result.txhash);
              } else {
                throw new Error('txhash not found');
              }
              console.log(res);
            } catch (e) {
              setError('Try again later');
            }
          }}
        >
          GET TAN
        </Button>
      )}
      {error && <Error>Try Again Later</Error>}
    </FaucetWrapper>
  );
}

const ResourceItems = [
  {
    title: 'Faucet',
    customs: [{
      title: 'get_mainnet_token',
      onClick: () => app.openModal(<Faucet />)
    }],
  },
  {
    title: 'Paper',
    // content: 'read_the_paper',
    links: [
      // {
      //   title: 'Manifesto',
      //   link: 'https://byzantine-lab.gitlab.io/wiki/#/Dapp-Development-Guide'
      // },
      {
        title: 'Consensus_Algorithm',
        link: 'https://arxiv.org/abs/1907.03437'
      }
    ]
  },
  {
    title: 'dev-guide',
    content: 'build_your_dapps',
    links: [{
      title: 'Resource_Wiki',
      link: 'https://tangerine-network.github.io/wiki/#/Dapp-Development-Guide?id=dapp-development-guide'
    }, {
      title: 'github',
      link: 'https://https://github.com/tangerine-network'
    }]
  },
];

const Resources = () => (
  <Wrapper>
    <Padding />
    {(ResourceItems).map((resource, key) => (
      <Card key={key}>
        <Title>
          <FormattedMessage id={resource.title} />
        </Title>
        {resource.content && (
          <Content><FormattedMessage id={resource.content} /></Content>
        )}
        <Padding />
        {(resource.links || []).map((link, key) => (
          <ExtLink onClick={() => window.open(link.link)} key={key}>
            <FormattedMessage id={link.title} />
            <Padding />
            >
          </ExtLink>
        ))}
        {(resource.customs || []).map((custom, key) => (
          <ExtLink onClick={custom.onClick} key={key}>
            <FormattedMessage id={custom.title} />
            <Padding />
            >
          </ExtLink>
        ))}
      </Card>
    ))}
    <Padding />
  </Wrapper>
);

export default Resources;
