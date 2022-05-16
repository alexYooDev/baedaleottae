import React, { Suspense } from 'react';
import Loading from '../../../components/UI/loading/Loading.component';
import {
  formatEatOutWeekdayHour,
  formatEatOutWeekendHour,
} from '../../../functions/formatter';

import styled, { css } from 'styled-components';

type Props = {
  onCancel: () => void;
  shopData: any[];
  selected: string;
  viewHeight: number;
};

type StyleProps = {
  imgUrl?: string;
  cardHeight?: number;
};

const RegionalEatOutShopDetail: React.FC<Props> = ({
  onCancel,
  shopData,
  selected,
  viewHeight,
}: Props) => {
  const selectedShop = shopData.filter((item) => item.id === Number(selected));

  const handleCloseModal = () => {
    onCancel();
  };

  const EatOutShopDetailReview = React.lazy(
    () => import('./EatOutShopDetailReview.component')
  );

  return (
    <DetailCardContainer cardHeight={viewHeight}>
      <CloseBtn onClick={handleCloseModal}>x</CloseBtn>
      {selectedShop.map((item, idx) => (
        <div key={idx}>
          <h2>{item.name}</h2>
          <DetailItemsWrapper>
            <DetailImage imgUrl={item.img_url_2}></DetailImage>
            <div>
              <DetailCategoryList>
                <span>카테고리</span>: {item.category}
              </DetailCategoryList>
              <p>
                <span>평균평점</span>: {item.rating}
              </p>
              <p>
                <span>전화번호</span>: {item.phone}
              </p>
              <p>
                <span>영업시간(주중)</span>:{' '}
                {formatEatOutWeekdayHour(item.hour)}
              </p>
              <p>
                {formatEatOutWeekendHour(item.hour) === '' ? (
                  ''
                ) : (
                  <p>
                    <span>영업시간(주말)</span>:{' '}
                    {formatEatOutWeekendHour(item.hour)}
                  </p>
                )}
              </p>
              <p>
                <span>평균가격</span>: {item.price}
              </p>
            </div>
          </DetailItemsWrapper>
        </div>
      ))}
      <Suspense fallback={<Loading />}>
        <EatOutShopDetailReview shopId={selected} />
      </Suspense>
    </DetailCardContainer>
  );
};

const CloseBtn = styled.span`
  font-size: 25px;
  cursor: pointer;
  position: absolute;
  display: block;
  right: 10px;
  top: 0;
`;

const DetailCardContainer = styled.div`
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  background-color: white;
  padding: 1rem;
  width: 40rem;
  z-index: 10;
  position: absolute;
  transition: ease-in 200ms;
  ${({ cardHeight }: StyleProps) => css`
    top: ${cardHeight};
  `}
  left: calc(50% - 20rem);
`;

const DetailCategoryList = styled.ul`
  margin-top: 0;
  padding: 0;
`;

const DetailItemsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 40px;
`;

const DetailImage = styled.div`
  height: 300px;
  width: 300px;
  border-radius: 4px;
  ${({ imgUrl }: StyleProps) => css`
    background-image: url(${imgUrl});
  `}
  background-size: cover;
  background-repeat: no-repeat;
`;

export default RegionalEatOutShopDetail;
