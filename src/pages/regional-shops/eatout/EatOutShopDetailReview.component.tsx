import axios from 'axios';
import { useEffect, useState } from 'react';
import { EAT_OUT_REVIEW_URL } from '../../../assets/data/requestUrls';
import { formatRating } from '../../../functions/formatter';
import styled from 'styled-components';

type Props = {
  shopId: string;
};

const EatOutShopDetailReview: React.FC<Props> = ({ shopId }: Props) => {
  const [review, setReview] = useState([]);

  /* 리뷰 데이터를 받아오기 위한 비동기 처리 */
  useEffect(() => {
    const fetchReview = async () => {
      const res = await axios.get(`${EAT_OUT_REVIEW_URL}${shopId}`);
      const data = await res.data;
      setReview(data);
    };
    fetchReview();
  }, []);

  return (
    <div>
      <Title>리뷰</Title>
      <CommentWrapper>
        {review.map((item: any, idx: number) => (
          <div key={idx}>
            <Comment>1. {item.review_1.slice(0, -10)}</Comment>
            <CommentDate>-게시일: {item.review_1.slice(-10)} </CommentDate>
            <Comment>2. {item.review_2.slice(0, -10)}</Comment>
            <CommentDate>-게시일: {item.review_2.slice(-10)} </CommentDate>
            <Comment>3. {item.review_3.slice(0, -10)}</Comment>
            <CommentDate>-게시일: {item.review_3.slice(-10)} </CommentDate>
            <CommentRating>{formatRating(item.rating)}</CommentRating>
          </div>
        ))}
      </CommentWrapper>
    </div>
  );
};

const Title = styled.h2`
  font-size: 20px;
`;

const Comment = styled.li`
  word-break: keep-all;
  font-weight: bold;
`;

const CommentDate = styled.p``;

const CommentWrapper = styled.ul`
  margin: 1rem 0;
  list-style: none;
  padding: 0;
`;

const CommentRating = styled.div`
  box-shadow: 0 2px 3px rgb(0 0 0 / 26%);
  width: fit-content;
  padding: 0 5px;
  border-radius: 3px;
  margin: 0 0 1rem 2rem;
`;

export default EatOutShopDetailReview;
