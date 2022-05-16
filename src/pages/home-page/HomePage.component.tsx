import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/UI/header/Header.component';
import { SeoulMap } from '../../assets/data/Graphs/SeoulMap';
import teamImg from '../../assets/images/team/team.png';
import IntroLottie from '../../components/UI/IntroLottie/IntroLottie.component';
import { HOME_IMG_CONFIG } from '../../assets/data/homeImgConfig';
import { useFetchGraph } from '../../hooks/useFetchJson';

import styled, { css } from 'styled-components';
import {
  pageDefault,
  customAnimation,
} from '../../components/UI/global/css.styles';

type StyleProps = {
  position: number;
  toLeft?: boolean;
  toRight?: boolean;
  fadeIn?: boolean;
  aniLevitate?: boolean;
};

const HomePage: React.FC = () => {
  const [position, setPosition] = useState(0);
  const [height, setHeight] = useState(0);
  const seoulMapJson = useFetchGraph(`seoul_risk_map_all`);

  const navigate = useNavigate();

  const homePageRef = useRef<any>(null);

  /* 홈페이지 크기를 지정 */
  useEffect(() => {
    setHeight(homePageRef.current.scrollHeight);
  }, []);

  const handleScroll = () => {
    setPosition(window.scrollY);
  };

  /* 서비스 소개 섹션으로 스크롤 */
  const handleToService = () => {
    navigate('/service');
  };

  /* 팀 소개 섹션으로 스크롤 */
  const handleToTeamSection = () => {
    navigate('/team');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Header viewHeight={height} />
      <HomePageContainer ref={homePageRef}>
        <ContentsContainer>
          <IntroLottie />
          <TextWrapper>
            <TitleContainer position={position}>배달어때?</TitleContainer>
            <SubtitleContainer aniLevitate position={position}>
              오늘 배달시키기 딱 좋은 날이구나!
            </SubtitleContainer>
            <DescContainer aniLevitate position={position}>
              외식할 만큼 안전할 지
            </DescContainer>
            <DescContainer aniLevitate position={position}>
              집콕하면서 배달 시킬 지 고민될 땐
            </DescContainer>
            <DescContainer aniLevitate position={position}>
              배달어때?
            </DescContainer>
            <Notice>
              해당 서비스는 서울시에 거주하는/재류하는 사용자를 대상으로 합니다.
            </Notice>
            <StartButton onClick={handleToService}>바로 시작하기!</StartButton>
          </TextWrapper>
        </ContentsContainer>
      </HomePageContainer>
      <RegIntroContainer>
        <ContentsContainer>
          <SeoulMap data={seoulMapJson.data} layout={seoulMapJson.layout} />
          <TextWrapper>
            <TitleContainer position={position}>집콕 배달 추천</TitleContainer>
            <IntroductionTitle
              style={{ opacity: (position - 320) / 80 }}
              position={position}
            >
              오늘이 나가먹을 상인가?!
            </IntroductionTitle>
            <DescContainer
              style={{ opacity: (position - 380) / 80 }}
              position={position}
            >
              코로나 상황에 따른
            </DescContainer>
            <DescContainer
              style={{ opacity: (position - 380) / 80 }}
              position={position}
            >
              당신의 지역의 안전도를 확인하세요.
            </DescContainer>
            <DescContainer
              style={{ opacity: (position - 440) / 80 }}
              position={position}
            >
              그리고, 오늘이 안전한 외식날인지
            </DescContainer>
            <DescContainer
              style={{ opacity: (position - 500) / 80 }}
              position={position}
            >
              위험해서 집콕할 배달날인지 파악하세요.
            </DescContainer>
          </TextWrapper>
        </ContentsContainer>
      </RegIntroContainer>
      <TeamIntroContainer>
        <ContentsContainer>
          <TeamImage src={teamImg} style={HOME_IMG_CONFIG} alt='team' />
          <TextWrapper>
            <TitleContainer
              style={{ opacity: (position - 1100) / 80 }}
              position={position}
            >
              팀 소개
            </TitleContainer>
            <IntroductionTitle
              style={{ margin: 0, opacity: (position - 1160) / 80 }}
              position={position}
            >
              멋진 사람들, "언더톡의 반란"을
            </IntroductionTitle>
            <IntroductionTitle
              style={{ margin: 0, opacity: (position - 1220) / 80 }}
              position={position}
            >
              소개합니다.
            </IntroductionTitle>
            <DescContainer
              style={{ opacity: (position - 1280) / 80 }}
              position={position}
            >
              개발에 대한 열정으로 똘똘 뭉친
            </DescContainer>
            <DescContainer position={position}>
              멋진 반란을 꾀하는 그들,
            </DescContainer>
            <DescContainer position={position}>
              우리 개발팀을 만나보세요.
            </DescContainer>
            <StartButton onClick={handleToTeamSection}>
              팀 소개로 이동
            </StartButton>
          </TextWrapper>
        </ContentsContainer>
      </TeamIntroContainer>
    </>
  );
};

const HomePageContainer = styled.div`
  ${pageDefault}
  ${customAnimation}
  background-image: linear-gradient(rgba(244, 255, 252, 0), rgb(238, 253, 250), rgb(235, 252, 248));
`;

const ContentsContainer = styled.article`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-top: 170px;
  margin: 0 10px 0 100px;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

const TitleContainer = styled.h1<StyleProps>`
  font-size: 3rem;
  font-weight: unset;
  margin: 0;
  ${({ position }: StyleProps) =>
    position - 200 <= 0 &&
    css`
      display: block;
      animation: pop-up 2s;
    `}
`;

const SubtitleContainer = styled.h2<StyleProps>`
  font-size: 2.5rem;
  font-weight: unset;
  margin: 14px 0;
  animation: ${({ aniLevitate }: StyleProps) =>
    aniLevitate ? `fadein 2s` : 'none'};
`;

const IntroductionTitle = styled.p<StyleProps>`
  font-size: 2.5rem;
  font-weight: unset;
  margin: 14px 0;
  ${({ position }: StyleProps) =>
    css`
      transform: translateY: ${-position}px;
    `}
`;

const DescContainer = styled.span<StyleProps>`
  position: relative;
  font-size: 2rem;
  font-weight: unset;
  animation: ${({ aniLevitate }: StyleProps) =>
    aniLevitate ? `pop-up 1s ease-in-out` : 'none'};
`;

const ToIntroButton = styled.button`
  background-color: white;
  margin-top: 54px;
  width: 248px;
  height: 64px;
  font-size: 18px;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 1px 2px 1px 1px darkgrey;
  postition: absolute;
  box-sizing: border-box;
  padding: 0;
  :hover {
    background-color: #88aed0;
    transition: ease-in 185ms;
    box-shadow: 1px 2px 1px 1px grey;
    border-color: wheat;
    color: white;
  }
`;

const StartButton = styled.button`
  background-color: white;
  margin-top: 54px;
  width: 248px;
  height: 64px;
  font-size: 18px;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 1px 2px 1px 1px darkgrey;
  postition: absolute;
  box-sizing: border-box;
  padding: 0;
  :hover {
    background-color: #88aed0;
    transition: ease-in 185ms;
    box-shadow: 1px 2px 1px 1px grey;
    border-color: wheat;
    color: white;
  }
`;

const RegIntroContainer = styled.div`
  ${pageDefault}
  background-color: #fffcf5;
`;

const PrefIntroContainer = styled.div`
  backgroundcolor: yellow;
  ${pageDefault};
`;

const TeamIntroContainer = styled.div`
  display: flex;
  align-items: center;
  background: linear-gradient(
    rgb(235, 252, 248),
    rgb(238, 253, 250),
    rgba(244, 255, 252, 0)
  );
  ${pageDefault}
`;

const TeamImage = styled.img`
  width: 100%;
`;

const Notice = styled.p`
  color: darkred;
`;

export default HomePage;
