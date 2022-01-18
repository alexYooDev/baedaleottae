import { useFetchGraph } from '../../../hooks/useFetchJson';
import { useRecoilValue, useRecoilState } from 'recoil';
import { userGu, CoronicNumberByGu } from '../../../store/store';
import Plot from 'react-plotly.js';

/* 행정구별 확진자 그래프 , 요구 엔드포인트: 해당구 명*/
export const ConfirmedByGuGraph = () => {
  const userDistrict = useRecoilValue(userGu);
  const confirmByGuJson = useFetchGraph(`coronic_gu?region=${userDistrict}`);

  return <Plot data={confirmByGuJson.data} layout={confirmByGuJson.layout} />;
};
