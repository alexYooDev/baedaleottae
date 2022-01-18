import { useEffect, useState } from 'react';
import axios from 'axios';
import { RISK_SCORE_URL } from './requestUrls';
import { useRecoilValue } from 'recoil';
import { userGu } from '../../store/store';

export const RiskScore = () => {
  const userDistrict = useRecoilValue(userGu);
  const [score, setScore] = useState(0);
  useEffect(() => {
    const fetchScore = async () => {
      const response = await axios.get(`${RISK_SCORE_URL}${userDistrict}`);
      setScore(response.data);
      console.log(userDistrict);
    };
    fetchScore();
  }, []);
  return score;
};
