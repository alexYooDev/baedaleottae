import { useFetchGraph } from '../../../hooks/useFetchJson';
import { useRecoilValue } from 'recoil';
import { userGu } from '../../../store/store';
import Plot from 'react-plotly.js';

/* 위험도 순위 그래프, 요구 파라미터 : 해당구 명 */
export const RankGraph = () => {
  const userDistrict = useRecoilValue(userGu);
  const rankJson = useFetchGraph(`risk_rank?region=${userDistrict}`);
  return <Plot data={rankJson.data} layout={rankJson.layout} />;
};
