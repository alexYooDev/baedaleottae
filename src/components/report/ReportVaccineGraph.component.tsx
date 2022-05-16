import React from 'react';
import styled from 'styled-components';

import { HighLight } from '../UI/text/HighLight.styles';

type Props = {
  secondVacRate: number;
  thirdVacRate: number;
  date: string;
  position: number;
};

export const ReportVaccineGraph: React.FC<Props> = ({
  secondVacRate,
  thirdVacRate,
  date,
  position,
  children,
}) => {
  return (
    <DescriptionSection style={{ opacity: (position - 1200) / 80 }}>
      <GraphContainer>
        <ReportSubtitle>서울시 백신 접종률</ReportSubtitle>
        {children}
      </GraphContainer>
      <ReportSubtitle>
        <p>
          <HighLight>"{date}일"</HighLight> 기준으로,
        </p>
        <p style={{ opacity: (position - 1300) / 80 }}>
          현재 서울시의 2차 백신 접종률은{' '}
          <HighLight>"{secondVacRate.toFixed(2)}%"</HighLight>
          입니다.
        </p>
        <p style={{ opacity: (position - 1350) / 80 }}>
          현재 서울시의 3차 백신 접종률은{' '}
          <HighLight>"{thirdVacRate.toFixed(2)}%"</HighLight>
          입니다.
        </p>
        <p style={{ opacity: (position - 1400) / 80 }}>
          <HighLight>"{secondVacRate}%"</HighLight>를 따라잡을 때까지 영차 영차!
        </p>
      </ReportSubtitle>
    </DescriptionSection>
  );
};

const DescriptionSection = styled.section`
  display: flex;
  align-items: center;
`;

const GraphContainer = styled.div`
  text-align: center;
  border-radius: 6px;
  background-color: white;
  height: -moz-fit-content;
  width: 39.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ReportSubtitle = styled.div`
  font-size: 24px;
  margin-left: 40px;
  word-break: all;
`;
