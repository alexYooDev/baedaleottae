import React, { Suspense } from 'react';
import styled, { css } from 'styled-components';

import {
  formatPhoneNumber,
  formatPrice,
  formatRating,
  formatTime,
} from '../../../functions/formatter';
import Loading from '../../../components/UI/loading/Loading.component';

type Props = {
  onCancel: () => void;
  shopData: any[];
  selected: string;
  viewHeight: number;
};
type StyleProps = {
  imgUrl?: string;
  height?: number;
};

const RegionalShopDetail: React.FC<Props> = ({
  onCancel,
  shopData,
  selected,
  viewHeight,
}: Props) => {
  const selectedShop = shopData.filter(
    (item) => item.restaurant_id === Number(selected)
  );

  const DeliveryShopDetailReview = React.lazy(
    () => import('./DeliveryShopDetailReview.component')
  );

  const handleCloseModal = () => {
    onCancel();
  };

  return (
    <DetailCardContainer height={viewHeight}>
      <CloseBtn onClick={handleCloseModal}>x</CloseBtn>
      {selectedShop.map((item) => (
        <DetailDescContainer key={item.restaurant_id}>
          <h2>{item.name}</h2>
          <DetailItemsWrapper>
            <DetailImage imgUrl={item.logo_url}></DetailImage>
            <CategoryListWrapper>
              <DetailCategoryList>
                <DescName>카테고리</DescName>:{' '}
                {item.categories.map((cat: any) => (
                  <DetailCategoryItem
                    key={`${item.restauran_id}${item.categories}`}
                  >
                    {cat}
                  </DetailCategoryItem>
                ))}
              </DetailCategoryList>
              <DetailDescContent>
                <DescName>평균평점</DescName>: {formatRating(item.review_avg)}
              </DetailDescContent>
              <DetailDescContent>
                <DescName>전화번호</DescName>: {formatPhoneNumber(item.phone)}
              </DetailDescContent>
              <DetailDescContent>
                <DescName>영업시간</DescName>:{' '}
                {formatTime(item.begin, item.end)}
              </DetailDescContent>
              <DetailDescContent>
                <DescName>최소주문금액</DescName>:{' '}
                {formatPrice(item.min_order_amount)}원
              </DetailDescContent>
            </CategoryListWrapper>
          </DetailItemsWrapper>
        </DetailDescContainer>
      ))}
      <Suspense fallback={<Loading />}>
        <DeliveryShopDetailReview shopId={selected} />
      </Suspense>
    </DetailCardContainer>
  );
};

export default RegionalShopDetail;

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
  ${({ height }: StyleProps) => css`
    top: ${height};
  `}
  left: calc(50% - 20rem);
`;

const DetailDescContainer = styled.div``;

const CategoryListWrapper = styled.div``;

const DetailCategoryList = styled.ul`
  margin-top: 0;
  padding: 0;
`;

const DetailDescContent = styled.p``;

const DescName = styled.span`
  font-size: 18px;
`;

const DetailCategoryItem = styled.li`
  list-style: none;
`;

const DetailItemsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 40px;
`;

const DetailImage = styled.div`
  height: 300px;
  width: 300px;
  ${({ imgUrl }: StyleProps) => css`
    background-image: url(https://www.yogiyo.co.kr/${imgUrl});
  `}
  background-size: cover;
  background-repeat: no-repeat;
`;
