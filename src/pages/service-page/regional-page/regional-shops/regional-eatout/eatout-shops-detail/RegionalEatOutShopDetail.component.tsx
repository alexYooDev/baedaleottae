import React, { Suspense } from 'react';
import Loading from '../../../../../../components/UI/loading/Loading.component';
import {
  formatEatOutWeekdayHour,
  formatEatOutWeekendHour,
} from '../../../../../../functions/formatter';
import {
  DetailCardContainer,
  DetailDescContainer,
  DetailImage,
  CategoryListWrapper,
  DetailDescContent,
  DetailCategoryList,
  CloseBtn,
  DetailShopTitle,
  DetailItemsWrapper,
  CategoryName,
} from './RegionalEatOutShopDetail.styles';

interface Props {
  onCancel: () => void;
  shopData: any[];
  selected: string;
  viewHeight: number;
}

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
    () =>
      import(
        '../../regional-eatout/eatout-review/EatOutShopDetailReview.component'
      )
  );

  return (
    <DetailCardContainer cardHeight={viewHeight}>
      <CloseBtn onClick={handleCloseModal}>x</CloseBtn>
      {selectedShop.map((item, idx) => (
        <DetailDescContainer key={idx}>
          <DetailShopTitle>{item.name}</DetailShopTitle>
          <DetailItemsWrapper>
            <DetailImage imgUrl={item.img_url_2}></DetailImage>
            <CategoryListWrapper>
              <DetailCategoryList>
                <CategoryName>카테고리</CategoryName>: {item.category}
              </DetailCategoryList>
              <DetailDescContent>
                <CategoryName>평균평점</CategoryName>: {item.rating}
              </DetailDescContent>
              <DetailDescContent>
                <CategoryName>전화번호</CategoryName>: {item.phone}
              </DetailDescContent>
              <DetailDescContent>
                <CategoryName>영업시간(주중)</CategoryName>:{' '}
                {formatEatOutWeekdayHour(item.hour)}
              </DetailDescContent>
              <DetailDescContent>
                {formatEatOutWeekendHour(item.hour) === '' ? (
                  ''
                ) : (
                  <DetailDescContent>
                    <CategoryName>영업시간(주말)</CategoryName>:{' '}
                    {formatEatOutWeekendHour(item.hour)}
                  </DetailDescContent>
                )}
              </DetailDescContent>
              <DetailDescContent>
                <CategoryName>평균가격</CategoryName>: {item.price}
              </DetailDescContent>
            </CategoryListWrapper>
          </DetailItemsWrapper>
        </DetailDescContainer>
      ))}
      <Suspense fallback={<Loading />}>
        <EatOutShopDetailReview shopId={selected} />
      </Suspense>
    </DetailCardContainer>
  );
};

export default RegionalEatOutShopDetail;
