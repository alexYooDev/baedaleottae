import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../../assets/delivery.svg';

type Props = {
  serviceStatic?: boolean;
  viewHeight?: any;
};

const Header: React.FC<Props> = ({ viewHeight }) => {
  return (
    <HeaderContainer>
      <div>
        <LogoContainer to='/'>
          <Logo />
          <LogoTitle>배달어때</LogoTitle>
        </LogoContainer>
      </div>
      <LinkContainer>
        <ToMainIntro
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          메인
        </ToMainIntro>
        <ToServiceIntro
          onClick={() => {
            window.scrollTo({ top: viewHeight, behavior: 'smooth' });
          }}
        >
          서비스 소개
        </ToServiceIntro>
        <ToTeamIntro
          onClick={() => {
            window.scrollTo({ top: viewHeight * 2, behavior: 'smooth' });
          }}
        >
          팀 소개
        </ToTeamIntro>
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
`;

/* 해당 링크 페이지에 따라 밑줄 위치가 이동하는 식으로 구현한다. */
const LinkContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  place-items: center;
`;

const ToMainIntro = styled.button`
  ${linkCSS}
`;

const ToServiceIntro = styled.button`
  ${linkCSS}
`;

const ToTeamIntro = styled.button`
  ${linkCSS}
`;

export default Header;
