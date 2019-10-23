import React, { useState } from "react";
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
// import { graphql, useStaticQuery } from "gatsby";
// import Img from "gatsby-image";
import {
  MOBILE_WIDTH,
} from 'src/constants/app';
import Byzantine from 'src/images/partner/byzlab.svg';
import KryptoGO from 'src/images/partner/kryptogo.svg';
import Portto from 'src/images/partner/portto.svg';
import Solar from 'src/images/partner/sola.svg';
import AbcLab from 'src/images/partner/abclab.png';
import Authme from 'src/images/partner/authme.png';
import BiiLabs from 'src/images/partner/biilabs.svg';
import Bito from 'src/images/partner/bito.svg';
import Dapppocket from 'src/images/partner/dapppocket.svg';
import NCKU from 'src/images/partner/ncku.png';
import Tokamak from 'src/images/partner/tokamak.png';
import Fcu from 'src/images/partner/fcu.png';

const Wrapper = styled.div`
  font-family: Avenir;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 0px;
  /* justify-content: center; */
  @media screen and (max-width: ${MOBILE_WIDTH}px) {
    /* padding: 50px 10px; */
  }
`;

const GridLayout = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
  /* border: 1px solid #DDD; */
`;

const Item = styled.div`
  flex: 1 0 21%;
  display: flex;
  justify-content: center;
  margin: 10px;
  cursor: pointer;
  @media screen and (max-width: ${MOBILE_WIDTH}px) {
    flex: 1 0 34%;
    margin: 0px;
  }
`;

const Logo = styled.img`
  /* border: 1px solid red; */
  height: 100px;
`;

const PartnerLogo = styled.div`
  /* height: 100px; */
  display: flex;
  align-items: center;
  justify-content: center;
  /* fill: #585858; */
  @media screen and (max-width: ${MOBILE_WIDTH}px) {
    height: auto;
    /* width: 48%; */
    /* border: 1px solid red; */
    /* border: 1px solid red; */
  }
`;

const COMMENT_HEIGHT = 280;

const Comment = styled.div`
  padding: 36px 0px;
  position: absolute;
  color: #e05b21;
  width: 80vw;
  max-width: 813px;
  height: ${COMMENT_HEIGHT}px;
  box-shadow: 0 2px 30px 0 rgba(0, 0, 0, 0.1);
  background-color: white;
  bottom: -${COMMENT_HEIGHT / 5}px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CommentPadding = styled.div`
  position: relative;
  height: ${COMMENT_HEIGHT}px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PartnerInfo = {
  byzantine: {
    name: 'Byzantine Lab',
    commenter: '林冠吾, CEO',
    comment: 'I like to eat pizza, how about you?',
    logo: <Logo src={Byzantine} />,
    link: 'https://byzantine-lab.io',
  },
  sola: {
    name: 'Sola',
    commenter: '不認識, ',
    comment: 'I like to drink beer',
    logo: <Logo src={Solar} />,
    link: 'https://www.solabloc.com'
  },
  portto: {
    name: 'Portto.',
    commenter: '玄哥, C玄O',
    comment: 'I am Portto, Portto is me',
    logo: <Logo src={Portto} />,
    link: 'https://portto.io/'
  },
  kryptogo: {
    name: 'Krypto GO',
    commenter: '歐柯登, CEO',
    comment: 'KordanGO is a company yoyoyo',
    logo: <Logo src={KryptoGO} />,
    link: 'https://kryptogo.com/'
  },
  biiLabs: {
    name: 'BiiLabs',
    commenter: '123',
    comment: 'abc123',
    logo: <Logo src={BiiLabs} />,
    link: 'https://biilabs.io/',
  },
  abclab: {
    name: 'ABC Lab',
    commenter: '123',
    comment: 'abc123',
    logo: <Logo src={AbcLab} />,
    link: 'https://abclabs.org'
  },
  authme: {
    name: 'Authme',
    commenter: '123',
    comment: 'abc123',
    logo: <Logo src={Authme} />,
    link: 'https://authme.com'
  },
  bito: {
    name: 'Bito Pro',
    commenter: '123',
    comment: 'abc123',
    logo: <Logo src={Bito} />,
    link: 'https://www.bitopro.com'
  },
  Dapppocket: {
    name: 'Dapp Pocket',
    commenter: '123',
    comment: 'abc123',
    logo: <Logo src={Dapppocket} />,
    link: 'https://www.dapppocket.io'
  },
  NCKU: {
    name: 'NCKU',
    commenter: '123',
    comment: 'abc123',
    logo: <Logo src={NCKU} />,
    link: 'https://dlt.csie.ncku.edu.tw'
  },
  Tokamak: {
    name: 'Tokamak',
    commenter: '123',
    comment: 'abc123',
    logo: <Logo src={Tokamak} />,
    link: 'https://tokamaklabs.io'
  },
  nchu: {
    name: 'NCHU',
    commenter: '123',
    comment: 'abc123',
    logo: <Logo src={Fcu} />,
    link: 'http://140.120.40.109:8585/'
  },
};

const PartnerComment = styled.div`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  padding: 20px 0px;
`;
const CommentLogo = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  fill: #e05b21;
`;
const Commenter = styled.div`
  /* padding-bottom: 30px; */
`

const MainnetLaunch = styled.div`
  color: #e05b21;
  font-weight: bold;
  font-size: 40px;
  text-align: center;
  @media screen and (max-width: ${MOBILE_WIDTH}px) {
    font-size: normal;
  }
`;

const PartnerList = () => {
  const [selectedPartner, setSelectedPartner] = useState(PartnerInfo.kryptogo);
  const { comment, logo, commenter, name } = selectedPartner;
  return (
    <Wrapper>
      <GridLayout>
        {Object.keys(PartnerInfo).map(
          (it, key) => (<Item
            key={key}
            onClick={() => {
              setSelectedPartner(PartnerInfo[it]);
              window.open(PartnerInfo[it].link);
            }}
          >
            <PartnerLogo>{PartnerInfo[it].logo}</PartnerLogo>
          </Item>)
        )}
      </GridLayout>
      {/* <CommentPadding>
        <Comment>
          <PartnerComment>"{comment}"</PartnerComment>
          <CommentLogo>{logo}</CommentLogo>
          <Commenter>{commenter} - {name}</Commenter>
        </Comment>
      </CommentPadding> */}
    </Wrapper>
  );
};

export default PartnerList;
