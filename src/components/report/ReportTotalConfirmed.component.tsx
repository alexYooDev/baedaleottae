import React from 'react';

import styled from 'styled-components';
import { HighLight } from '../UI/text/HighLight.styles';

type Props = {
  position: number;
  totalNum: number;
  additionalNum: number;
  date: string;
};

export const ReportTotalConfirmed: React.FC<Props> = ({
  totalNum,
  additionalNum,
  date,
  position,
  children,
}) => {
  return (
    <DescriptionSection style={{ opacity: (position - 1900) / 80 }}>
      <ReportSubtitle>
        <p style={{ opacity: (position - 2000) / 80 }}>
          <HighLight>"{date}일"</HighLight> 기준으로,
        </p>
        <p style={{ opacity: (position - 2050) / 80 }}>
          서울시 전체 확진자 수는{' '}
          <HighLight>{totalNum.toLocaleString()}명</HighLight>
          이며,
        </p>
        <p style={{ opacity: (position - 2100) / 80 }}>
          서울시 추가 확진자 수는{' '}
          <HighLight>{additionalNum.toLocaleString()}명</HighLight>
          입니다.{' '}
        </p>
      </ReportSubtitle>
      <GraphContainer>
        <ReportSubtitle>서울시 전체 확진자 현황</ReportSubtitle>
        {children}
      </GraphContainer>
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
  width: 34.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ReportSubtitle = styled.div`
  font-size: 24px;
  margin-right: 40px;
  text-align: center;
  word-break: all;
`;
