import { useFetchGraph } from '../../../hooks/useFetchJson';
import Plot from 'react-plotly.js';

/* 서울 전체 백신 접종률 그래프 */
export const VaccineGraph = () => {
  const vaccineJson = useFetchGraph('vac');
  return <Plot data={vaccineJson.data} layout={vaccineJson.layout} />;
};
