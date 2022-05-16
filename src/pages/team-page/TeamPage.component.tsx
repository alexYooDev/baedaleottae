import { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { pageDefault } from '../../components/UI/global/css.styles';

import HWANIK_FACE_IMG from '../../../assets/images/team/hwanIk_face.png';
import HWANIK_FULL_IMG from '../../../assets/images/team/hwanIk_full.png';
import SANG_FACE_IMG from '../../../assets/images/team/Sang_face.png';
import SANG_FULL_IMG from '../../../assets/images/team/Sang_full.png';
import SUNGMIN_FACE_IMG from '../../../assets/images/team/sungMin_face.png';
import SUNGMIN_FULL_IMG from '../../../assets/images/team/sungMin_full.png';
import SUHYEN_FACE_IMG from '../../../assets/images/team/suHyen_face.png';
import SUHYEN_FULL_IMG from '../../../assets/images/team/suHyen_full.png';
import HYEONHEE_FACE_IMG from '../../../assets/images/team/hyeonHee_face.png';
import HYEONHEE_FULL_IMG from '../../../assets/images/team/hyeonHee_full.png';

import TeamHeader from './TeamHeader.component';

const TeamPage = () => {
  const [viewHeight, setViewHeight] = useState(0);
  const [position, setPosition] = useState(0);

  const sectionRef = useRef<any>(null);

  /* 버튼 스크롤링을 위한 전체 페이지 크기를 저장 */
  useEffect(() => {
    setViewHeight(sectionRef.current.clientHeight + 65);
  }, []);

  const handleScroll = () => {
    setPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <TeamPageContainer ref={sectionRef}>
      <TeamHeader viewHeight={viewHeight} onSetViewHeight={setViewHeight} />
      <MemberContainer>
        <MemberName>윤상</MemberName>
        <FirstParagraph>
          <ProfileImage
            src={SANG_FACE_IMG}
            alt='Team Leader, backend developer'
          />
          <MemberDescription>
            <Introduction>
              안녕하세요! 백엔드, 서버 개발자로서 성장중인 윤상 입니다. 배달어때
              프로젝트에선 플라스크를 이용한 백엔드 코딩과 데이터 크롤링(공공API
              및 구글MAPS API 활용), 서버 DB세팅 및 배포를 담당 하였습니다!
            </Introduction>
          </MemberDescription>
        </FirstParagraph>
        <SecondParagraph>
          <ProfileImage
            src={SANG_FULL_IMG}
            alt='Team Leader, backend developer'
          />
          <MemberDescription>
            <Introduction>
              평소 코딩하는것을 즐겁게 생각하였고, 학부생 시절에도 알고리즘
              강의를 가장 재밋게 들었던 기억이 있어 지속적으로 개발자로서
              성장하고 싶어 엘리스에 지원하였고 열심히 성장 중입니다!
            </Introduction>
            <Introduction>
              취미는 온라인 게임, 영화보기, 달리기 및 운동하기 입니다 (가끔
              알고리즘 문제를 풀기도 합니다..)!
            </Introduction>
          </MemberDescription>
        </SecondParagraph>
      </MemberContainer>
      <MemberContainer>
        <MemberName style={{ opacity: (position - 200) / 80 }}>
          유환익
        </MemberName>
        <FirstParagraph>
          <ProfileImage
            style={{ opacity: (position - 380) / 80 }}
            src={HWANIK_FACE_IMG}
            alt='frontend developer'
          />
          <MemberDescription>
            <Introduction style={{ opacity: (position - 470) / 80 }}>
              안녕하세요! 프론트엔드 개발자 + 미래 사업가 유환익입니다.
              프론트엔드 개발자로서 사람들의 정보 격차를 줄이고 모두에게 평등한
              세상을 만드는 데에 기여하는 것을 목표로 하고 있습니다. 따라서,
              사용자의 서비스 접근성과 편의성, 유쾌하고 명시적인 UI 및 UX를
              만드는 데에 포커스를 두고 있습니다.
            </Introduction>
          </MemberDescription>
        </FirstParagraph>
        <SecondParagraph>
          <ProfileImage
            style={{ opacity: (position - 600) / 100 }}
            src={HWANIK_FULL_IMG}
            alt='frontend developer'
          />
          <MemberDescription>
            <Introduction style={{ opacity: (position - 700) / 100 }}>
              사용자와 직접 소통하며 서비스를 보다 어려움 없이 마음 편하게
              이용할 수 있게 돕는 프론트엔드 개발자를 지망하고 있습니다. 더 나은
              세상을 만드는 데에 기여하는 개발자/사업가가 되기 위한 레이스를
              하고 있습니다.
            </Introduction>
            <Introduction style={{ opacity: (position - 740) / 100 }}>
              맛집 발굴에도 진심인 Foodie 입니다. 네이버 지도와 구글 맵에 저만의
              맛집넷을 만드는 재미로 살고 있습니다.
            </Introduction>
          </MemberDescription>
        </SecondParagraph>
      </MemberContainer>
      <MemberContainer>
        <MemberName style={{ opacity: (position - 1100) / 100 }}>
          최성민
        </MemberName>
        <FirstParagraph>
          <ProfileImage
            style={{ opacity: (position - 1200) / 100 }}
            src={SUNGMIN_FACE_IMG}
            alt='backend developer'
          />
          <MemberDescription>
            <Introduction style={{ opacity: (position - 1250) / 100 }}>
              안녕하세요. 백엔드 개발파트를 맡은 최성민이라고 합니다. 이번
              프로젝트에서 뛰어나신 팀원분들과 함께 서버 개발과 DB 구축 등에
              기여할 수 있었습니다.
            </Introduction>
          </MemberDescription>
        </FirstParagraph>
        <SecondParagraph>
          <ProfileImage
            style={{ opacity: (position - 1500) / 100 }}
            src={SUNGMIN_FULL_IMG}
            alt='backend developer'
          />
          <MemberDescription>
            <Introduction style={{ opacity: (position - 1520) / 100 }}>
              예전부터 it 스타트업에 관심을 갖고 있었는데 정신을 차리니 직접
              개발을 배우고 있습니다. 개발과 소통은 물론이고 시장과 서비스에
              대한 이해가 뛰어난 개발자로 성장하는 것을 목표로 하고 있습니다.
            </Introduction>
            <Introduction style={{ opacity: (position - 1550) / 100 }}>
              작년말부터 친구들과 축구학원을 다니기 시작해서 요즘은 축구가 가장
              큰 취미입니다. 나중에 프리미어리그에서 봬요.
            </Introduction>
          </MemberDescription>
        </SecondParagraph>
      </MemberContainer>
      <MemberContainer>
        <MemberName style={{ opacity: (position - 1900) / 100 }}>
          김수현
        </MemberName>
        <FirstParagraph>
          <ProfileImage
            style={{ opacity: (position - 2100) / 100 }}
            src={SUHYEN_FACE_IMG}
            alt='data analylist'
          />
          <MemberDescription>
            <Introduction style={{ opacity: (position - 2100) / 100 }}>
              안녕하세요. 배달어때 프로젝트에서 데이터 분석을 맡은 김수현입니다.
              재미있는 프로젝트를 멋진 팀원분들과 함께하게 되어 영광입니다
            </Introduction>
          </MemberDescription>
        </FirstParagraph>
        <SecondParagraph>
          <ProfileImage
            style={{ opacity: (position - 2300) / 100 }}
            src={SUHYEN_FULL_IMG}
            alt='data analylist'
          />
          <MemberDescription>
            <Introduction style={{ opacity: (position - 2350) / 100 }}>
              데이터 분석 및 모델링을 통해 미래를 예측하여 세상에 도움이 되고
              싶어서 데이터 분석/사이언티스트를 목표로 하게 되었습니다. 여러
              데이터를 분석해보며 더 성장하고 더 나아갈 것입니다!
            </Introduction>
            <Introduction style={{ opacity: (position - 2400) / 100 }}>
              좋아하는 것은 아바라 마시며 코딩하기, 간맥하기, 여행다니기 입니다.
            </Introduction>
          </MemberDescription>
        </SecondParagraph>
      </MemberContainer>
      <MemberContainer>
        <MemberName style={{ opacity: (position - 2750) / 100 }}>
          강현희
        </MemberName>
        <FirstParagraph>
          <ProfileImage
            style={{ opacity: (position - 2850) / 100 }}
            src={HYEONHEE_FACE_IMG}
            alt='data analylist'
          />
          <MemberDescription>
            <Introduction>
              안녕하세요 이번 프로젝트에서 데이터 분석을 맡은 강현희입니다. 서버
              엔지니어로 일했던 경력이 있으며, 원하는 기능 및 프로그램을 직접
              만들어 낼 수 있는 개발자들이 부러워 개발자를 목표로 하게
              되었습니다.
            </Introduction>
          </MemberDescription>
        </FirstParagraph>
        <SecondParagraph>
          <ProfileImage src={HYEONHEE_FULL_IMG} alt='data analylist' />
          <MemberDescription>
            <Introduction>
              배달어때 서비스를 팀원들과 함께 만들어 가며 개발자의 노고와
              즐거움을 함께 느낄 수 있었습니다.
            </Introduction>
            <Introduction>
              좋아하는건 의자에 누워 책 읽기, 에일 맥주 마시기 그리고 식물
              키우기 입니다.
            </Introduction>
          </MemberDescription>
        </SecondParagraph>
      </MemberContainer>
    </TeamPageContainer>
  );
};

const TeamPageContainer = styled.div`
  ${pageDefault}
`;

const MemberName = styled.h2`
  font-size: 3rem;
`;

const MemberContainer = styled.div`
  padding: 50px;
`;

const FirstParagraph = styled.div`
  display: flex;
`;

const SecondParagraph = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

const ProfileImage = styled.img`
  width: 300px;
  border-radius: 50%;
`;

const Introduction = styled.p`
  font-size: 100%;
  word-break: keep-all;
`;

const MemberDescription = styled.p`
  font-size: 22px;
`;

export default TeamPage;
