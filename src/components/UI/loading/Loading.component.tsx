import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Lottie from 'lottie-web';
import loadingAnim from '../../../assets/lotties/empty-plate.json';

const Loading: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null as any);
  useEffect(() => {
    Lottie.loadAnimation({
      container: ref.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: loadingAnim,
    });
  }, []);
  return <AnimContainer ref={ref} />;
};

const AnimContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  position: absolute;
  background-color: black;
  opacity: 0.7;
`;

export default Loading;
