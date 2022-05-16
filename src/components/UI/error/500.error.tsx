import React from 'react';
import { ReactComponent as ERROR_IMG } from '../../../assets/images/takeout_boxes.svg';
import { HOME_IMG_CONFIG } from '../../../assets/data/homeImgConfig';
import styled from 'styled-components';

const Error500: React.FC = () => {
  return (
    <NoneExistsContainer>
      <ErrorTitle>
        서버가 내부 공사중 입니다. 잠시 후에 다시 와주세요.
      </ErrorTitle>
      <ErrorSubtitle>
        빠른 시간 내에 공사를 마치고 있어요. 조금만 기다려주세요.
      </ErrorSubtitle>
      <ERROR_IMG style={HOME_IMG_CONFIG} />
    </NoneExistsContainer>
  );
};

const NoneExistsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ErrorSubtitle = styled.p`
  font-size: 20px;
`;

const ErrorTitle = styled.h1`
  font-size: 45px;
`;

export default Error500;
