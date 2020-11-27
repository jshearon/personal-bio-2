import React, { useEffect, useRef } from 'react'
import Lottie from 'lottie-react';
import Name_Logo from './name_logo.json'

export const Logo = () => {
  const lottieRef = useRef();

  useEffect(() => {
    const timer = setTimeout(() => {
      lottieRef.current.play()
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="logo-block">
      <div className="logo">
        <Lottie lottieRef={lottieRef} animationData={Name_Logo} loop={false} autoplay={false} />
      </div>
      <div className="d-flex flex-row justify-content-center w-100">
        <div className="slogan-words">FULL</div>
        <div className="slogan-words">STACK</div>
        <div className="slogan-words">WEB</div>
        <div className="slogan-words">DEVELOPER</div>
      </div>
    </div>
  )
}
