import React, { useState } from "react";
import styled from 'styled-components';
// import { graphql, useStaticQuery } from "gatsby";
// import Img from "gatsby-image";
import {
  MOBILE_WIDTH,
} from 'src/constants/app';
import Byzantine from 'src/images/partner/Byzantine.inline.svg';
import KryptoGO from 'src/images/partner/kryptogo.inline.svg';
import Portto from 'src/images/partner/portto.inline.svg';
import Solar from 'src/images/partner/solar.inline.svg';

const Wrapper = styled.div`
  font-family: Avenir;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
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
  }
`;

const PartnerLogo = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  fill: #585858;
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
`;

const CommentPadding = styled.div`
  position: relative;
  height: ${COMMENT_HEIGHT}px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const PartnerInfo = {
  byzantine: {
    name: 'Byzantine Lab',
    commenter: '林冠吾, CEO',
    comment: 'I like to eat pizza, how about you?',
    logo: <Byzantine />,
  },
  sola: {
    name: 'Sola',
    commenter: '不認識, ',
    comment: 'I like to drink beer',
    logo: <Solar />,
  },
  portto: {
    name: 'Portto.',
    commenter: '玄哥, C玄O',
    comment: 'I am Portto, Portto is me',
    logo: <Portto />,
  },
  kryptogo: {
    name: 'Krypto GO',
    commenter: '歐柯登, CEO',
    comment: 'KordanGO is a company yoyoyo',
    logo: <KryptoGO />,
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

const PartnerList = () => {
  const [selectedPartner, setSelectedPartner] = useState(PartnerInfo.kryptogo);
  const { comment, logo, commenter, name } = selectedPartner;
  return (
    <Wrapper>
      <GridLayout>
        {Object.keys(PartnerInfo).map(
          (it, key) => (<Item
            key={key}
            onClick={() => setSelectedPartner(PartnerInfo[it])}
          >
            <PartnerLogo>{PartnerInfo[it].logo}</PartnerLogo>
          </Item>)
        )}
        {Object.keys(PartnerInfo).map(
          (it, key) => (<Item
            key={key}
            onClick={() => setSelectedPartner(PartnerInfo[it])}
          >
            <PartnerLogo>{PartnerInfo[it].logo}</PartnerLogo>
          </Item>)
        )}
      </GridLayout>
      <CommentPadding>
        <Comment>
          <PartnerComment>"{comment}"</PartnerComment>
          <CommentLogo>{logo}</CommentLogo>
          <Commenter>{commenter} - {name}</Commenter>
        </Comment>
      </CommentPadding>
    </Wrapper>
  );
};

export default PartnerList;
