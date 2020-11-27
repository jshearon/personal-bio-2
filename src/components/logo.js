import React, { useEffect, useRef } from 'react'
import Lottie from 'lottie-react';
import Name_Logo from './name_logo.json'

export const Logo = () => {
  const lottieRef = useRef();

  useEffect(() => {
    const timer = setTimeout(() => {
      lottieRef.current.play()
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return <Lottie lottieRef={lottieRef} animationData={Name_Logo} loop={false} autoplay={false} />
}
