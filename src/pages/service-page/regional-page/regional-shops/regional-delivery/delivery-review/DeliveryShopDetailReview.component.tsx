import axios from 'axios';
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { FOOD_DELIVERY_REVIEW_URL } from '../../../../../../assets/data/requestUrls';
import { formatRating } from '../../../../../../functions/formatter';
import { itemsPerPage } from '../../../../../../store/store';
import {
  Title,
  Comment,
  CommentWrapper,
  Content,
  CommentRating,
  PrevButton,
  NextButton,
  ButtonWrapper,
  CommentName,
  PageNum,
} from './DeliveryShopDetailReview.styles';

interface Props {
  shopId: string;
}

const DeliveryShopDetailReview = ({ shopId }: Props) => {
  const [review, setReview] = useState([]);
  const [curPage, setCurPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  useEffect(() => {
    const fetchReview = async () => {
      const res = await axios.get(`${FOOD_DELIVERY_REVIEW_URL}${shopId}`);
      const data = await res.data;
      setReview(data);
    };
    fetchReview();
  }, []);

  const lastIdx = curPage * itemsPerPage;
  const firstIdx = lastIdx - itemsPerPage;

  const limitCurItems = (items: any[]) => {
    let curItems;
    curItems = items.slice(firstIdx, lastIdx);
    return curItems;
  };

  return (
    <div>
      <Title>리뷰</Title>
      <CommentWrapper>
        {limitCurItems(review).map((item: any) => (
          <Content key={item.row_num}>
            <Comment>
              <CommentName>{item.row_num}.</CommentName> {item.comment}
            </Comment>
            <CommentRating>{formatRating(item.rating)}</CommentRating>
          </Content>
        ))}
        <ButtonWrapper>
          <PrevButton
            onClick={() => setCurPage((prev) => prev - 1)}
            disabled={curPage === 1}
          >
            이전
          </PrevButton>
          <PageNum>{curPage}/20</PageNum>
          <NextButton
            onClick={() => setCurPage((prev) => prev + 1)}
            disabled={curPage === 20}
          >
            다음
          </NextButton>
        </ButtonWrapper>
      </CommentWrapper>
    </div>
  );
};

export default DeliveryShopDetailReview;
