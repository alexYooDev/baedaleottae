import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { USER_LOCATION_URL } from '../../assets/data/requestUrls';
import { userGu, userLocation } from '../../store/store';
import styled from 'styled-components';

const ConfirmPage = () => {
  const [message, setMessage] = useState('');
  const [buttonOn, setButtonOn] = useState(true);
  const [userGPS, setUserGPS] = useRecoilState(userLocation);
  const setUserDistrict = useSetRecoilState(userGu);
  const navigate = useNavigate();

  /* 좌표 정보를 가져온다. */

  const cors = axios.create({
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  });

  useEffect(() => {
    const getDistrict = async () => {
      const res = await cors.post(USER_LOCATION_URL, userGPS);
      const region = await res.data.region;
      setUserDistrict(region);
    };
    console.log(userGPS);
    getDistrict();
  }, [userGPS]);

  const handleToReport = () => {
    navigate('/service/regional/report');
  };

  const handleToMain = () => {
    navigate('/');
  };

  const handleSetMessage = () => {
    setMessage(
      `죄송합니다. 현 서비스는 서울시 만을 범위로 사용가능하십니다. 5초 뒤 메인화면으로 이동합니다.`
    );

    setButtonOn(false);
    setTimeout(() => {
      handleToMain();
    }, 5000);
  };

  return (
    <ConfirmPageContainer>
      <ConfirmCard>
        <ConfirmMessage>
          해당 서비스는 서울시를 제공 범위로 제한하고 있습니다.
        </ConfirmMessage>
        <ConfirmMessage>
          서울시 시민 혹은 서울에 현재 재류하고 계십니까?
        </ConfirmMessage>
        {buttonOn ? (
          <>
            <ConfirmButton onClick={handleToReport}>예</ConfirmButton>
            <ConfirmButton onClick={handleSetMessage}>아니오</ConfirmButton>
          </>
        ) : (
          <WarningMessage>{message}</WarningMessage>
        )}
      </ConfirmCard>
    </ConfirmPageContainer>
  );
};

const ConfirmPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.75);
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
`;

const ConfirmMessage = styled.div`
  font-size: 18px;
`;

const WarningMessage = styled.p``;

const ConfirmCard = styled.div`
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  background-color: white;
  padding: 1rem;
  text-align: center;
  width: 30rem;
  z-index: 11;
  position: fixed;
  top: 10vh;
  left: calc(50% - 15rem);
`;

const ConfirmButton = styled.button`
  width: 120px;
  height; 80px;
  background: none;
  border: none;
  cursor: pointer;
`;

export default ConfirmPage;
