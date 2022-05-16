import React, { useState } from 'react';
import { HighLight } from '../UI/text/HighLight.styles';
import styled, { css } from 'styled-components';

import { riskScoreParser } from '../../assets/data/riskScoreParser';
import BackDrop from '../UI/BackDrop/BackDrop.component';
import prophet from '../../../../../../assets/images/dataset/prophet.png';
import prophet2 from '../../../../../../assets/images/dataset/prophet2.png';

type StyleProps = {
  addOnOpen?: boolean;
  imgUrl?: string;
};

type Props = {
  location: any;
  score: any;
  population: number;
  family: number;
  facillity: number;
  rate: number;
  stack: number;
};

export const ReportThreatMap: React.FC<Props> = ({
  location,
  score,
  population,
  family,
  facillity,
  children,
  rate,
  stack,
}) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      <DescriptionSection>
        <GraphContainer>
          <ReportSubtitle>
            내 행정구: <HighLight>"{location}"</HighLight> 위험도 지도
          </ReportSubtitle>
          {children}
        </GraphContainer>
        <ReportSubtitle>
          <p>
            파란색 테두리로 표시된 <HighLight>"{location}"</HighLight>의 현재
            위험도는 {score}점,
          </p>
          <p>
            <HighLight>{riskScoreParser(score)}</HighLight>
            등급은 입니다.
          </p>
          {score >= 60 ? (
            <p>
              오늘은 <HighLight>"배달날"</HighLight>입니다. 얌전히 집콕하고
              식사하시지요!
            </p>
          ) : (
            <p>
              오늘은 <HighLight>"외식 가능날"</HighLight>
              입니다. 기분전환 겸 간만에 외식 한번 할까요?
            </p>
          )}
          <AddOnButton onClick={handleOpen}>
            위험도 산출 방식이 궁금하다면
          </AddOnButton>
        </ReportSubtitle>
      </DescriptionSection>
      {open && (
        <>
          <BackDrop onCancel={handleOpen} />
          <AddOn addOnOpen={open}>
            <AddOnCloseButton onClick={handleOpen}>x</AddOnCloseButton>
            <AddOnTitle>코로나 위험도 산출 공식</AddOnTitle>
            <AddOnDesc>
              최근 5일 간의 신규 코로나 확진자 (40점) + 3일 간의 코로나 증감
              예측치 (30점) + 생활인구 점수 (10점) + 평균가구 점수(15점) +
              다중이용시설 분포 점수 (5점)
            </AddOnDesc>
            <ContentDivider />
            <AddOnDesc>
              <AddOnName>내 지역</AddOnName>:{' '}
              <HighLight>"{location}"</HighLight>
            </AddOnDesc>
            <AddOnDesc>
              <AddOnName>종합 위험도 점수</AddOnName>:{' '}
              <HighLight>{score} 점</HighLight>
            </AddOnDesc>
            <section>
              <AddOnDesc>
                <AddOnName>등급표</AddOnName>:{' '}
                <HighLight>{riskScoreParser(score)}</HighLight>
              </AddOnDesc>
              <GradeList>
                <li>
                  30점 미만 = <HighLight>{riskScoreParser(29)}</HighLight>
                </li>
                <li>
                  60점 미만 = <HighLight>{riskScoreParser(59)}</HighLight>
                </li>
                <li>
                  60점 이상 = <HighLight>{riskScoreParser(60)}</HighLight>
                </li>
              </GradeList>
            </section>
            <ContentDivider />
            <RateDesc>
              이후 3일 동안의 코로나 증감률 예측치는
              <HighLight> {rate}%</HighLight> 입니다.
            </RateDesc>
            <ElementDescSection>
              <RateSection>
                <AddOnDesc>
                  <DescName>코로나 누적지수</DescName>:{' '}
                  <HighLight>{stack}</HighLight>
                </AddOnDesc>
                <AddOnDesc>
                  <DescName>생활인구 지수</DescName>:{' '}
                  <HighLight>{population}</HighLight>
                </AddOnDesc>
                <AddOnDesc>
                  <DescName>평균 가구 수</DescName>:{' '}
                  <HighLight>{family}</HighLight>
                </AddOnDesc>
                <AddOnDesc>
                  <DescName>대중이용시설 분포</DescName>:{' '}
                  <HighLight>{facillity}</HighLight>
                </AddOnDesc>
              </RateSection>
              <AddOnGraphContainer imgUrl={prophet}></AddOnGraphContainer>
              <AddOnGraphContainer imgUrl={prophet2}></AddOnGraphContainer>
            </ElementDescSection>
            <ReportTitle>Prophet을 사용한 예상/학습 결과 그래프</ReportTitle>
          </AddOn>
        </>
      )}
    </>
  );
};

const DescriptionSection = styled.section`
  margin-bottom: 5%;
  display: flex;
  align-items: center;
`;

const AddOnButton = styled.button`
  background-color: white;
  width: 248px;
  height: 64px;
  font-size: 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 1px 2px 1px 1px darkgrey;
  postition: absolute;
  box-sizing: border-box;
  padding: 0;
  margin: 20px 0;
  :hover {
    background-color: #88aed0;
    transition: ease-in 185ms;
    box-shadow: 1px 2px 1px 1px grey;
    border-color: wheat;
    color: white;
  }
`;

const GraphContainer = styled.div`
  text-align: center;
  border-radius: 6px;
  background-color: white;
  height: -moz-fit-content;
  width: 34.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const AddOn = styled.div<StyleProps>`
  display: none;
  background-color: white;
  border-radius: 6px;
  background-color: white;
  padding: 1rem;
  text-align: center;
  width: 70rem;
  height: 48rem;
  z-index: 10;
  position: fixed;
  top: 5vh;
  left: calc(50%- 50rem);
  ${({ addOnOpen }: StyleProps) =>
    addOnOpen &&
    css`
      display: block;
    `}
`;

const AddOnCloseButton = styled.button`
  position: absolute;
  right: 10px;
  top: 0;
  border: none;
  background: none;
  font-size: 25px;
  cursor: pointer;
`;

const AddOnTitle = styled.h2`
  font-size: 20px;
`;

const AddOnDesc = styled.p`
  word-break: keep-all;
`;

const AddOnName = styled.span`
  font-size: bold;
`;

const GradeList = styled.ul`
  list-style: none;
  padding: 0;
`;

const RateDesc = styled.p`
  text-align: center;
  font-size: 20px;
`;

const ContentDivider = styled.hr`
  font-size: 2px;
`;

const ElementDescSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const RateSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const AddOnGraphContainer = styled.div<StyleProps>`
  height: 270px;
  width: 420px;
  margin-top: 0;
  ${({ imgUrl }: StyleProps) => css`
    background-image: url(${imgUrl});
  `}
  background-size: cover;
  background-position: center;
`;

const ReportTitle = styled.h1`
  font-size: 40px;
  text-align: center;
`;

const DescName = styled.span`
  font-size: 18px;
`;

const ReportSubtitle = styled.div`
  font-size: 24px;
  text-align: center;
  margin-left: 40px;
  word-break: all;
`;
