import React, { Suspense, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFetchGraph } from '../../hooks/useFetchJson';

import Loading from '../../components/UI/loading/Loading.component';
import { useRecoilState } from 'recoil';
import { userLocation } from '../../store/store';
import styled from 'styled-components';

const SeoulMap = React.lazy(() =>
  import('../../assets/data/Graphs/SeoulMap').then(({ SeoulMap }) => ({
    default: SeoulMap,
  }))
);

const ServiceStartPage = () => {
  const navigate = useNavigate();

  /* 사용자가 동의서에 체크 했는지 판단 */
  const [checked, setChecked] = useState(false);
  const [userGPS, setUserGPS] = useRecoilState(userLocation);

  /* 서울 전체 지도를 불러옴 */
  const seoulMapJson = useFetchGraph('seoul_risk_map_all');

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserGPS({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          alert('GPS 정보 접근을 거부하셨습니다.');
        },
        {
          enableHighAccuracy: false,
          maximumAge: 0,
          timeout: Infinity,
        }
      );
    }
  };
  getLocation();

  const handleCheck = () => {
    setChecked(false);
    if (!checked) {
      setChecked(true);
    }
  };

  /* memory leak 방지 코드 */
  useEffect(() => {
    return () => setChecked(false);
  }, []);

  /* 좌표 가져오기 함수를 실행, 확인 페이지로 이동 */
  const handleClick = () => {
    navigate('/service/confirm');
  };

  return (
    <BackgroundContainer>
      <GPSRequestContainer>
        <RequestTitleContainer>
          해당 서비스는 사용자님의 위치정보를 필요로 해요.
        </RequestTitleContainer>
        <ExampleTitle>서울시 전체 코로나 위험도</ExampleTitle>
        <Suspense fallback={<Loading />}>
          <SeoulMap data={seoulMapJson.data} layout={seoulMapJson.layout} />
        </Suspense>
        <RequestDescContainer>
          보시는 것처럼 사용자님의 현재 위치 정보를 통해, 위치하신 지역의 코로나
          위험도를 분석하고 근방 배달음식점을 파악해야 하기 때문이죠.
        </RequestDescContainer>
        <RequestDescContainer>
          회원님의 GPS 정보 사용에 동의하시겠습니까?
        </RequestDescContainer>
        <ApprovalContainer onChange={handleCheck}>
          <ApproveLabel htmlFor='approval'>
            <ApprovalCheck
              type='checkbox'
              id='approval'
              defaultChecked={checked}
            />
            위치 정보 제공을 동의합니다.
          </ApproveLabel>
        </ApprovalContainer>
        <ToServiceBtnContainer>
          <ToServiceBtn
            type='button'
            id='toRegional'
            onClick={handleClick}
            disabled={checked === false}
          >
            나의 지역 안전확인
          </ToServiceBtn>
        </ToServiceBtnContainer>
      </GPSRequestContainer>
    </BackgroundContainer>
  );
};

const BackgroundContainer = styled.div`
  background: linear-gradient(
    rgba(244, 255, 252, 0),
    rgb(238, 253, 250),
    rgb(235, 252, 248)
  );
  width: 100vw;
  height: 100vh;
`;

const GPSRequestContainer = styled.div`
  text-align: center;
  border-radius: 6px;
  box-shadow: 0 2px 8px rgb(0 0 0 / 26%);
  height: -moz-fit-content;
  background-color: white;
  width: 45rem;
  margin: 30px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RequestTitleContainer = styled.h2`
  font-size: 30px;
  font-weight: bold;
  line-height: 20px;
  word-break: keep-all;
`;

const RequestDescContainer = styled.p`
  position: relative;
  font-size: 20px;
  font-weight: bold;
  word-break: keep-all;
  margin: 20px 46px;
`;

const ApprovalContainer = styled.form`
  margin: 0 auto;
  border-radius: 5px;
  background-color: lightgrey;
  width: 215px;
  height: 30px;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;

  &:active {
    background-color: grey;
  }
`;

const ApproveLabel = styled.label`
  padding-top: 4px;
  height: 100%;
  text-align: center;
  padding; 5px;
  cursor: pointer;
  line-height: 20px;
`;

const ApprovalCheck = styled.input`
  display: none;
  background-color: grey;

  &:checked {
    display: inline;
    background-color: lightgrey;
  }
`;

const ToServiceBtnContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const ExampleTitle = styled.h2`
  margin: 0;
`;

const ToServiceBtn = styled.button`
  font: inherit;
  font-weight: bold;
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  font-size: 1.05rem;
  border: none;
  border-radius: 7px;
  justify-content: space-between;
  width: fit-content;
  margin: 15px 5px;

  &:hover {
    transition: ease-in 200ms;
    background-color: white;
    box-shadow: 1px 1px 2px 1px grey;
  }
`;

export default ServiceStartPage;
