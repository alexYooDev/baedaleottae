import React from 'react';

import {
  DescriptionSection,
  ReportSubtitle,
  GraphContainer,
  ReportDesc,
} from './ReportThreatRank.styles';
import { HighLight } from '../../../../../../components/UI/text/HighLight.styles';

interface IProps {
  rank: number;
  position: number;
  location: string;
}

export const ReportThreatRank: React.FC<IProps> = ({
  rank,
  position,
  location,
  children,
}) => {
  return (
    <>
      <DescriptionSection style={{ opacity: (position - 300) / 80 }}>
        <ReportSubtitle>
          <ReportDesc style={{ opacity: (position - 400) / 80 }}>
            현재 당신의 행정구: <HighLight>"{location}"</HighLight>의 위험도
            순위는 <HighLight>"{rank}위"</HighLight>
            입니다.
          </ReportDesc>
          {Number(rank) < Number(25 / 2) ? (
            <>
              <ReportDesc style={{ opacity: (position - 450) / 80 }}>
                서울시 내 타 행정구에 비해 <HighLight>"위험권"</HighLight>에
                속해 있습니다.
              </ReportDesc>
              <ReportDesc style={{ opacity: (position - 500) / 80 }}>
                역시 이불 밖은 위험해! 한동안 외출은 삼가주세요.
              </ReportDesc>
            </>
          ) : (
            <>
              <ReportDesc style={{ opacity: (position - 450) / 80 }}>
                서울시 내 타 행정구 대비 위험도 <HighLight>"하위권"</HighLight>
                에 속합니다.
              </ReportDesc>
              <ReportDesc style={{ opacity: (position - 500) / 80 }}>
                그래도 외출 시엔, 방역 수칙을 철저히 지켜 지역사회를 보호합시다.
              </ReportDesc>
            </>
          )}
        </ReportSubtitle>
        <GraphContainer>
          <ReportSubtitle>
            <HighLight>"{location}"</HighLight> 위험도 순위
          </ReportSubtitle>
          {children}
        </GraphContainer>
      </DescriptionSection>
    </>
  );
};
