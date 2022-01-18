import { useFetchGraph } from '../../../hooks/useFetchJson';
import { useRecoilValue } from 'recoil';
import { userGu } from '../../../store/store';

import Plot from 'react-plotly.js';

/* 구별 위험도 지도, 요구 파라미터 : 해당구 명 */
export const GuMap = () => {
  const userDistrict = useRecoilValue(userGu);
  const guMapJson = useFetchGraph(`seoul_risk_map?region=${userDistrict}`);
  return <Plot data={guMapJson.data} layout={guMapJson.layout} />;
};
