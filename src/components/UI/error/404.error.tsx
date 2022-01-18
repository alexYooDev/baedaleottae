import React from 'react';
import { ReactComponent as ERROR_IMG } from '../../../assets/images/takeout_boxes.svg';
import {
  ErrorTitle,
  ErrorSubtitle,
  NoneExistsContainer,
} from './404.error.styles';
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
