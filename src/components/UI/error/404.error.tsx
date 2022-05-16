import React from 'react';
import { ReactComponent as ERROR_IMG } from '../../../assets/images/takeout_boxes.svg';
import styled from 'styled-components';
import { HOME_IMG_CONFIG } from '../../../assets/data/homeImgConfig';

const Error404: React.FC = () => {
  return (
    <NoneExistsContainer>
      <ErrorTitle>존재하지 않는 페이지입니다.</ErrorTitle>
      <ErrorSubtitle>
        링크를 잘못 입력하셨거나 페이지가 삭제/이동되었을 수 있습니다.
      </ErrorSubtitle>
      <ERROR_IMG style={HOME_IMG_CONFIG} />
    </NoneExistsContainer>
  );
};

export default Error404;

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
