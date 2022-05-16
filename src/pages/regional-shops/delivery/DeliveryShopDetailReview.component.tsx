import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FOOD_DELIVERY_REVIEW_URL } from '../../../assets/data/requestUrls';
import { formatRating } from '../../../functions/formatter';

type Props = {
  shopId: string;
};

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
          <span>{curPage}/20</span>
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

const Title = styled.h2`
  font-size: 20px;
`;

const Comment = styled.li`
  word-break: keep-all;
`;

const CommentName = styled.span`
  font-weight: bold;
`;

const CommentWrapper = styled.ul`
  margin: 1rem 0;
  list-style: none;
  padding: 0;
`;

const Content = styled.div``;

const CommentRating = styled.div`
  box-shadow: 0 2px 3px rgb(0 0 0 / 26%);
  width: fit-content;
  padding: 0 5px;
  border-radius: 3px;
  margin: 0 0 1rem 2rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NextButton = styled.button`
  background-color: white;
  margin: 20px;
  padding: 5px 20px;
  font-size: 18px;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 1px 2px 1px 1px darkgrey;
  postition: absolute;
  box-sizing: border-box;
  :hover {
    background-color: #88aed0;
    transition: ease-in 185ms;
    box-shadow: 1px 2px 1px 1px grey;
    border-color: wheat;
    color: white;
  }
`;

const PrevButton = styled.button`
  background-color: white;
  margin: 20px;
  padding: 5px 20px;
  font-size: 18px;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 1px 2px 1px 1px darkgrey;
  postition: absolute;
  box-sizing: border-box;
  :hover {
    background-color: #88aed0;
    transition: ease-in 185ms;
    box-shadow: 1px 2px 1px 1px grey;
    border-color: wheat;
    color: white;
  }
`;

export default DeliveryShopDetailReview;
