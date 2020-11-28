import React, { useContext, useEffect, useState } from 'react'
import Lottie from 'react-lottie-player'
import Name_Logo from './name_logo.json'
import { LogoContext } from './logoProvider';

export const Logo = (props) => {
  const [segmentFrom, setSegmentFrom] = useState(0)
  const [segmentTo, setSegmentTo] = useState(225)
  const [segmentsEnabled, setSegmentsEnabled] = useState(true);
  const [ logoPlace, setLogoPlace ] = useState(0)
  const segments = [segmentFrom, segmentTo]
  
  const { logoPlay, setLogoPlay } = useContext(LogoContext)
  const { logoDirection, setLogoDirection } = useContext(LogoContext)
  // const lottieRef = useRef();

  // const reverse = () => {
  //  lottieRef.current.setDirection(-1)
  //  lottieRef.current.play()
  // }

  // useEffect(() => {
  //  const timer = setTimeout(() => {
  //    lottieRef.current.play()
  //  }, 1500);
  //  return () => clearTimeout(timer);
  // }, []);

  return (
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
      <button onClick={() => {
        setLogoDirection(-1)
        setSegmentFrom(210)
        setSegmentTo(130)
      }}>Reverse</button>
    </div>
  )
}
