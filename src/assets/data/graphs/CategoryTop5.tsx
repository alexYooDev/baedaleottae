import { useEffect, useState } from 'react';
import axios from 'axios';
import { CATEGORY_TOP_5 } from '../requestUrls';

/* get 요청을 통해 상위 5개 인기 배달음식 카테고리를 받아온다. */
export const CategoryTop5 = () => {
  const [topCategory, setTopCategory] = useState('');

  useEffect(() => {
    const fetchTopCategory = async () => {
      const response = await axios.get(CATEGORY_TOP_5);
      setTopCategory(response.data);
    };
    fetchTopCategory();
  }, []);

  return <span>{topCategory}</span>;
};
