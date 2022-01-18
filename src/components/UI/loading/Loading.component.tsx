import React, { useEffect, useRef } from 'react';
import Lottie from 'lottie-web';
import loadingAnim from '../../../assets/lotties/empty-plate.json';
import { AnimContainer } from './Loading.styles';

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

export default Loading;
