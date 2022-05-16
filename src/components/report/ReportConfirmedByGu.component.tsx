import React from 'react';
import { HighLight } from '../UI/text/HighLight.styles';
import styled from 'styled-components';

type Props = {
  position: number;
  regionRate: number;
  rank: number;
  totalNum: number;
  addNum: number;
  location: string;
};

export const ReportConfirmedByGu: React.FC<Props> = ({
  position,
  rank,
  regionRate,
  totalNum,
  addNum,
  location,
  children,
}) => {
  return (
    <DescriptionSection style={{ opacity: (position - 2900) / 80 }}>
      <GraphContainer>
        <ReportSubtitle>
          <HighLight>"{location}"</HighLight> 확진자 현황
        </ReportSubtitle>
        {children}
      </GraphContainer>
      <ReportSubtitle>
        {rank < 25 / 2 ? (
          <>
            <p style={{ opacity: (position - 2900) / 80 }}>
              <HighLight>"{location}"</HighLight>에는 확진자들이 부쩍 득세하고
              있습니다.
            </p>
            <p style={{ opacity: (position - 2950) / 80 }}>
              <HighLight>"{location}"</HighLight>의 확진자는 서울 전체 확진자의{' '}
              {regionRate} % 입니다
            </p>
          </>
        ) : (
          <>
            <p style={{ opacity: (position - 2900) / 80 }}>
              <HighLight>"{location}"</HighLight>는 다른 행정구보다 상대적으로
              안전합니다.
            </p>
            <p style={{ opacity: (position - 2950) / 80 }}>
              <HighLight>"{location}"</HighLight>의 확진자는 서울 전체 확진자의{' '}
              <HighLight>"{regionRate}%"</HighLight> 입니다
            </p>
          </>
        )}
        <p style={{ opacity: (position - 3000) / 80 }}>
          누적확진자 수는 <HighLight>{totalNum.toLocaleString()}명</HighLight>{' '}
          입니다.
        </p>
        <p style={{ opacity: (position - 3000) / 80 }}>
          추가확진자 수는 <HighLight>{addNum.toLocaleString()}명</HighLight>{' '}
          입니다.
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
  width: 34.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ReportSubtitle = styled.div`
  font-size: 24px;
  text-align: center;
  margin-left: 40px;
  word-break: all;
`;
