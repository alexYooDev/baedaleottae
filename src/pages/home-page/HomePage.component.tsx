import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/UI/header/Header.component';
import { SeoulMap } from '../../assets/data/graphs/SeoulMap';
import teamImg from '../../assets/images/team/team.png';
import IntroLottie from '../../components/UI/introLottie/IntroLottie.component';
import { HOME_IMG_CONFIG } from '../../assets/data/homeImgConfig';
import { useFetchGraph } from '../../hooks/useFetchJson';

import {
  HomePageContainer,
  ContentsContainer,
  TextWrapper,
  TitleContainer,
  SubtitleContainer,
  DescContainer,
  StartButton,
  RegIntroContainer,
  TeamIntroContainer,
  TeamImage,
  Notice,
  IntroductionTitle,
} from './HomePage.styles';

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
              멋진 사람들, "언더톢의 반란"을
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

export default HomePage;
