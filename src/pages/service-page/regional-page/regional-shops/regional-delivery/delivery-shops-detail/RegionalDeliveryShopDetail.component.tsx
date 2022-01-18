import React, { Suspense } from 'react';
import {
  DetailCardContainer,
  DetailDescContainer,
  DetailImage,
  CategoryListWrapper,
  DetailDescContent,
  DetailCategoryList,
  DetailCategoryItem,
  CloseBtn,
  DetailShopTitle,
  DetailItemsWrapper,
  DescName,
} from './RegionalDeliveryShopDetail.styles';
import {
  formatPhoneNumber,
  formatPrice,
  formatRating,
  formatTime,
} from '../../../../../../functions/formatter';
import Loading from '../../../../../../components/UI/loading/Loading.component';

interface Props {
  onCancel: () => void;
  shopData: any[];
  selected: string;
  viewHeight: number;
}

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
    () => import('../delivery-review/DeliveryShopDetailReview.component')
  );

  const handleCloseModal = () => {
    onCancel();
  };

  return (
    <DetailCardContainer height={viewHeight}>
      <CloseBtn onClick={handleCloseModal}>x</CloseBtn>
      {selectedShop.map((item) => (
        <DetailDescContainer key={item.restaurant_id}>
          <DetailShopTitle>{item.name}</DetailShopTitle>
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
