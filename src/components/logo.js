import React, { useContext, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import Lottie from 'react-lottie-player'
import Name_Logo from './name_logo.json'
import { LogoContext } from './logoProvider';

export const Logo = (props) => {
  
  const { 
    logoPlay, 
    setLogoPlay, 
    logoDirection, 
    setLogoDirection, 
    segmentFrom,
    setSegmentFrom, 
    segmentTo,
    setSegmentTo, 
    segments, 
    segmentsEnabled,
    setSegmentsEnabled, 
    logoPlace,
    setLogoPlace,
    setToggleLogo, 
    toggleLogo,
    playForward,
    playBackward 
  } = useContext(LogoContext)

  return (
    <CSSTransition
      in={toggleLogo}
      timeout={1000}
      classNames="toggle-logo"
      appear
      >
    <div className="logo-block">
      <div className="logo">
        <Lottie animationData={Name_Logo} loop={false} play={logoPlay} direction={logoDirection} goTo={logoPlace} segments={segmentsEnabled && segments} />
      </div>
      <div className="d-flex flex-row justify-content-center w-100">
        <div className="slogan-words">FULL</div>
        <div className="slogan-words">STACK</div>
        <div className="slogan-words">WEB</div>
        <div className="slogan-words">DEVELOPER</div>
      </div>
    </div>
    </CSSTransition>
  )
}
