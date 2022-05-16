import React, { SetStateAction, useEffect } from 'react';
import { Dispatch } from 'react';

import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../../assets/delivery.svg';

type Props = {
  serviceStatic?: boolean;
  viewHeight?: any
  onSetViewHeight: Dispatch<SetStateAction<number>>;
};

const TeamHeader: React.FC<Props> = ({ viewHeight, onSetViewHeight }) => {
  /* 스크롤 액션을 위한 뷰 포트에 따른 위치 지정, 화면 렌더링 이후 저장*/
  useEffect(() => {
    onSetViewHeight(() => viewHeight);
  }, []);

  return (
    <HeaderContainer>
      <div>
        <LogoContainer to='/'>
          <Logo />
          <LogoTitle>배달어때</LogoTitle>
        </LogoContainer>
      </div>
      <LinkContainer>
        <LeaderLink
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          팀 리더
        </LeaderLink>
        <FrontendLink
          onClick={() => {
            window.scrollTo({
              top: viewHeight,
              behavior: 'smooth',
            });
          }}
        >
          프론트엔드 개발자
        </FrontendLink>
        <BackendLink
          onClick={() => {
            window.scrollTo({
              top: viewHeight * 2,
              behavior: 'smooth',
            });
          }}
        >
          백엔드 개발자
        </BackendLink>
        <DA1Link
          onClick={() => {
            window.scrollTo({
              top: viewHeight * 3,
              behavior: 'smooth',
            });
          }}
        >
          데이터 분석가 No.1
        </DA1Link>
        <DA2Link
          onClick={() => {
            window.scrollTo({
              top: viewHeight * 4,
              behavior: 'smooth',
            });
          }}
        >
          데이터 분석가 No.2
        </DA2Link>
      </LinkContainer>
    </HeaderContainer>
  );
};

const linkCSS = css`
  background-color: #fd7555;
  color: white;
  text-decoration: none;
  font-size: 16px;
  border-radius: 4px;
  padding: 12px 20px;
  border: none;
  cursor: pointer;

  &:hover {
    transition: ease-in-out 200ms;
    padding: 11px 18px;
    font-weight: bold;
    font-size: 17px;
  }
`;

const HeaderContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  background-color: #fd7555;
  align-items: center;
  height: 65px;
  width: 100vw;
  position: fixed;
  top: 0;
  z-index: 100;
`;

const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  height: 100%;
  text-decoration: none;
  > svg {
    height: 40px;
  }
`;

const LogoTitle = styled.div`
  color: white;
  margin-left: 5px;
  font-size: 23px;
  transition: 200ms ease-in;
`;

/* 해당 링크 페이지에 따라 밑줄 위치가 이동하는 식으로 구현한다. */
const LinkContainer = styled.div``;

const LeaderLink = styled.button`
  ${linkCSS}
`;

const FrontendLink = styled.button`
  ${linkCSS}
`;

const BackendLink = styled.button`
  ${linkCSS}
`;
const DA1Link = styled.button`
  ${linkCSS}
`;
const DA2Link = styled.button`
  ${linkCSS}
`;

export default TeamHeader;
