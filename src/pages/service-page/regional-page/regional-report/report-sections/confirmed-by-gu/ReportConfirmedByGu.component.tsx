import React from 'react';
import { ReportDesc } from '../total-confirmed/ReportTotalConfirmed.styles';
import { HighLight } from '../../../../../../components/UI/text/HighLight.styles';
import {
  DescriptionSection,
  GraphContainer,
  ReportSubtitle,
} from './ReportConfirmedByGu.styles';

interface IProps {
  position: number;
  regionRate: number;
  rank: number;
  totalNum: number;
  addNum: number;
  location: string;
}

export const ReportConfirmedByGu: React.FC<IProps> = ({
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
            <ReportDesc style={{ opacity: (position - 2900) / 80 }}>
              <HighLight>"{location}"</HighLight>에는 확진자들이 부쩍 득세하고
              있습니다.
            </ReportDesc>
            <ReportDesc style={{ opacity: (position - 2950) / 80 }}>
              <HighLight>"{location}"</HighLight>의 확진자는 서울 전체 확진자의{' '}
              {regionRate} % 입니다
            </ReportDesc>
          </>
        ) : (
          <>
            <ReportDesc style={{ opacity: (position - 2900) / 80 }}>
              <HighLight>"{location}"</HighLight>는 다른 행정구보다 상대적으로
              안전합니다.
            </ReportDesc>
            <ReportDesc style={{ opacity: (position - 2950) / 80 }}>
              <HighLight>"{location}"</HighLight>의 확진자는 서울 전체 확진자의{' '}
              <HighLight>"{regionRate}%"</HighLight> 입니다
            </ReportDesc>
          </>
        )}
        <ReportDesc style={{ opacity: (position - 3000) / 80 }}>
          누적확진자 수는 <HighLight>{totalNum.toLocaleString()}명</HighLight>{' '}
          입니다.
        </ReportDesc>
        <ReportDesc style={{ opacity: (position - 3000) / 80 }}>
          추가확진자 수는 <HighLight>{addNum.toLocaleString()}명</HighLight>{' '}
          입니다.
        </ReportDesc>
      </ReportSubtitle>
    </DescriptionSection>
  );
};
