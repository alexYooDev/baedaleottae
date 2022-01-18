import React, { useEffect, useRef } from 'react';
import Lottie from 'lottie-web';
import loadingAnim from '../../../assets/lotties/delivery-animation.json';
import { LottieContainer } from './IntroLottie.styles';

const IntroLottie = () => {
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
  return <LottieContainer ref={ref} />;
};

export default IntroLottie;
