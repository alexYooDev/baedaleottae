import React from 'react';

import {
  DescriptionSection,
  ReportSubtitle,
  GraphContainer,
  ReportDesc,
} from './ReportTotalConfirmed.styles';
import { HighLight } from '../../../../../../components/UI/text/HighLight.styles';

interface IProps {
  position: number;
  totalNum: number;
  addNum: number;
  date: string;
}

export const ReportTotalConfirmed: React.FC<IProps> = ({
  totalNum,
  addNum,
  date,
  position,
  children,
}) => {
  return (
    <DescriptionSection style={{ opacity: (position - 1900) / 80 }}>
      <ReportSubtitle>
        <ReportDesc style={{ opacity: (position - 2000) / 80 }}>
          <HighLight>"{date}일"</HighLight> 기준으로,
        </ReportDesc>
        <ReportDesc style={{ opacity: (position - 2050) / 80 }}>
          서울시 전체 확진자 수는{' '}
          <HighLight>{totalNum.toLocaleString()}명</HighLight>
          이며,
        </ReportDesc>
        <ReportDesc style={{ opacity: (position - 2100) / 80 }}>
          서울시 추가 확진자 수는{' '}
          <HighLight>{addNum.toLocaleString()}명</HighLight>
          입니다.{' '}
        </ReportDesc>
      </ReportSubtitle>
      <GraphContainer>
        <ReportSubtitle>서울시 전체 확진자 현황</ReportSubtitle>
        {children}
      </GraphContainer>
    </DescriptionSection>
  );
};
