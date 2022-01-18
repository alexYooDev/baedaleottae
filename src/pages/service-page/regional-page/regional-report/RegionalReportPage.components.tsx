import React, { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  CONFIRMED_ALL_URL,
  CONFIRMED_BY_GU_URL,
  RISK_RANK_GRAPH_URL,
  RISK_SCORE_DETAIL_URL,
  RISK_SCORE_URL,
  SEOUL_RISK_MAP_URL,
  VAC_GRAPH_URL,
} from '../../../../assets/data/requestUrls';
import {
  ThreatScore,
  ThreatScoreDetail,
  userGu,
} from '../../../../store/store';
import Loading from '../../../../components/UI/loading/Loading.component';

import {
  NextButton,
  ReportTitle,
  ReportContainer,
  ReportSection,
  ButtonWrapper,
  GraphContainer,
} from './RegionalReportPage.styles';
import { ReportThreatMap } from './report-sections/threat-map/ReportThreatMap.component';
import { ReportThreatRank } from './report-sections/threat-rank/ReportThreatRank.component';
import { ReportTotalConfirmed } from './report-sections/total-confirmed/ReportTotalConfirmed.component';
import { ReportConfirmedByGu } from './report-sections/confirmed-by-gu/ReportConfirmedByGu.component';
import { ReportVaccineGraph } from './report-sections/vaccine/ReportVaccineGraph.component';
import { CloseBtn } from '../regional-shops/regional-delivery/delivery-shops-detail/RegionalDeliveryShopDetail.styles';

const RegionalReportPage: React.FC = () => {
  const [position, setPosition] = useState(0);

  const navigate = useNavigate();

  /* 모든 그래프 정보(JSON)를 담을 상태값 */
  const [graphs, setGraphs] = useState<any>([]);

  /* 위험도 점수(String)를 담을 상태값 */
  const [riskScore, setRiskScore] = useRecoilState(ThreatScore);

  /* 상태값 세부 정보 
  - rate: 코로나 증감률 예측치
  - stack: 코로나 누적 점수
  - population: 생활인구 점수
  - family: 평균가구 점수
  - fac: 대중이용 시설 분포 점수
  - rank: 코로나 위험도 순위
  */
  const [riskScoreDetail, setRiskScoreDetail] =
    useRecoilState<any>(ThreatScoreDetail);

  /* 카테고리 페이지 이동 : id 가 toDelivery이면 배달음식 카테고리 페이지으로, 다른 경우 외식 카테고리 페이지로 이동*/
  const handleToCategory = (event: any) => {
    if (event.target.id === 'toDelivery') {
      navigate('/service/regional/delivery-categories/');
    } else {
      navigate('/service/regional/eatout-categories/');
    }
  };

  const cors = axios.create({
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  });

  const userDistrict = useRecoilValue(userGu);
  console.log(userDistrict);

  /* 리포트 페이지 내, 최초 화면 렌더링 이후 실행할 사이드 이펙트*/
  useEffect(() => {
    const getGraph = async () => {
      /* 해당 구의 위험도 지도 요청 */
      const threatMapRes = await cors.get(
        `${SEOUL_RISK_MAP_URL}${userDistrict}`
      );
      const threatMapData = await threatMapRes.data;

      /* 해당 구의 전체 구 대비 위험도 순위 요청*/
      const threatRankRes = await cors.get(
        `${RISK_RANK_GRAPH_URL}${userDistrict}`
      );
      const threatRankData = await threatRankRes.data;

      /* 서울 전체 백신 접종률 그래프 요청 */
      const vaccineRes = await cors.get(VAC_GRAPH_URL);
      const vaccineData = await vaccineRes.data;

      /* 서울 전체 확진자 그래프 요청 */
      const confirmedTotalRes = await cors.get(CONFIRMED_ALL_URL);
      const confirmedTotalData = await confirmedTotalRes.data;

      /* 해당 구 확진자 그래프 요청 */
      const confirmedGuRes = await cors.get(
        `${CONFIRMED_BY_GU_URL}${userDistrict}`
      );
      const confirmedGuData = await confirmedGuRes.data;

      /* 위험도 점수 요청 */
      const riskScoreRes = await cors.get(`${RISK_SCORE_URL}${userDistrict}`);
      const riskScoreData = await riskScoreRes.data;

      /* 위험도 세부 정보 요청 */
      const riskScoreDetailRes = await cors.get(
        `${RISK_SCORE_DETAIL_URL}${userDistrict}`
      );
      const riskScoreDetailData = await riskScoreDetailRes.data;

      /* 그래프 정보 객체 덩어리를 한 배열안에 묶어 Recoil 상태값으로 저장, 
      렌더 단에서 반복문으로 화면에 그려주기 위함*/
      setGraphs([
        threatMapData,
        threatRankData,
        vaccineData,
        confirmedTotalData,
        confirmedGuData,
      ]);

      /* 위험도 점수와 세부 정보 또한 전역 recoil 상태값으로 저장 */
      setRiskScore(riskScoreData);
      setRiskScoreDetail(riskScoreDetailData);
    };
    getGraph();
  }, [userDistrict]);

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
    <ReportContainer>
      {/* 그래프가 로드 되지 않았을 시, 대신 로딩 페이지를 보여줍니다. */}
      {!graphs.length ? (
        <Loading />
      ) : (
        <>
          <ReportTitle style={{ display: 'absolute' }}>
            내 지역 코로나 리포트
          </ReportTitle>
          {graphs.map((graph: any, idx: string) => (
            <ReportSection key={idx} id={idx}>
              <GraphContainer>
                {/* Plot 데이터를 반복문으로 뽑으면서 각각 다른 스타일을 적용하기 위함 */}
                {Number(idx) === 0 ? (
                  <ReportThreatMap
                    key={idx}
                    location={userDistrict}
                    score={riskScore}
                    rate={riskScoreDetail.rate}
                    population={riskScoreDetail.population}
                    family={riskScoreDetail.family}
                    facillity={riskScoreDetail.fac}
                    stack={riskScoreDetail.stack}
                  >
                    <Plot data={graph.data} layout={graph.layout} />
                  </ReportThreatMap>
                ) : Number(idx) === 1 ? (
                  <ReportThreatRank
                    key={idx}
                    position={position}
                    rank={riskScoreDetail.rank}
                    location={userDistrict}
                  >
                    <Plot data={graph.data} layout={graph.layout} />
                  </ReportThreatRank>
                ) : Number(idx) === 2 ? (
                  <ReportVaccineGraph
                    key={idx}
                    position={position}
                    thrVacRate={graphs[2].data[2].text[6]}
                    secVacRate={graphs[2].data[1].text[6]}
                    date={graphs[2].data[0].x[6]}
                  >
                    <Plot data={graph.data} layout={graph.layout} />
                  </ReportVaccineGraph>
                ) : Number(idx) === 3 ? (
                  <ReportTotalConfirmed
                    key={idx}
                    position={position}
                    totalNum={graphs[3].data[0].text[6]}
                    addNum={graphs[3].data[1].text[6]}
                    date={graphs[3].data[0].x[6]}
                  >
                    <Plot data={graph.data} layout={graph.layout} />
                  </ReportTotalConfirmed>
                ) : (
                  <ReportConfirmedByGu
                    key={idx}
                    position={position}
                    totalNum={graphs[4].data[0].text[6]}
                    addNum={graphs[4].data[1].text[6]}
                    rank={riskScoreDetail.rank}
                    regionRate={riskScoreDetail.region_rate}
                    location={userDistrict}
                  >
                    <Plot data={graph.data} layout={graph.layout} />
                  </ReportConfirmedByGu>
                )}
                {/* 그래프 화면 출력이 끝나는 지점 입니다. */}
              </GraphContainer>
            </ReportSection>
          ))}
          {/* 위험도 점수가 60점 이상이라면 내 지역 배달 음식 카테고리로, 
          그렇지 않다면 (외식점 카테고리 또는 배달음식점) 으로 이동을 제한. */}
          <ButtonWrapper>
            {Number(riskScore) >= 60 ? (
              <NextButton id='toDelivery' onClick={handleToCategory}>
                내 지역 배달 음식점 찾으러 가기
              </NextButton>
            ) : (
              <>
                <NextButton id='toDelivery' onClick={handleToCategory}>
                  내 지역 배달 음식점 찾으러 가기
                </NextButton>
                <NextButton id='toEatOut' onClick={handleToCategory}>
                  내 근처 외식점 찾으러 가기
                </NextButton>
              </>
            )}
          </ButtonWrapper>
        </>
      )}
    </ReportContainer>
  );
};

export default RegionalReportPage;
