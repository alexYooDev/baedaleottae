import { useFetchGraph } from '../../../hooks/useFetchJson';
import Plot from 'react-plotly.js';

/* 서울시 확진자 그래프 */
export const ConfirmedGraph = () => {
  const confirmJson = useFetchGraph('coronic_all');
  return <Plot data={confirmJson.data} layout={confirmJson.layout} />;
};
