import Plot, { PlotParams } from 'react-plotly.js';

interface Props extends PlotParams {}

/* 서울 전체 위험도 지도 */
export const SeoulMap = ({ data, layout }: Props) => {
  return <Plot data={data} layout={layout} />;
};
