import React, { SetStateAction, useEffect } from 'react';
import { Dispatch } from 'react';
import {
  HeaderContainer,
  LeaderLink,
  FrontendLink,
  BackendLink,
  DA1Link,
  DA2Link,
  LogoTitle,
  LogoContainer,
  LinkContainer,
} from './TeamHeader.styles';
import { ReactComponent as Logo } from '../../../assets/delivery.svg';

interface Props {
  serviceStatic?: boolean;
  viewHeight?: any;
  onSetViewHeight: Dispatch<SetStateAction<number>>;
}

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

export default TeamHeader;
