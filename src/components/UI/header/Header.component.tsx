import React from 'react';
import {
  HeaderContainer,
  ToMainIntro,
  ToServiceIntro,
  ToTeamIntro,
  LogoContainer,
  LinkContainer,
  LogoTitle,
} from './Header.styles';
import { ReactComponent as Logo } from '../../../assets/delivery.svg';

interface Props {
  serviceStatic?: boolean;
  viewHeight?: any;
}

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

export default Header;
