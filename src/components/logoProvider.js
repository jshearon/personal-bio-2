import React, { useState } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const LogoContext = React.createContext()

export const LogoProvider = (props) => {
  const [logoPlay, setLogoPlay] = useState(true)
  const [logoDirection, setLogoDirection] = useState(1)

  const [ segmentFrom, setSegmentFrom ] = useState(0)
  const [ segmentTo, setSegmentTo ] = useState(225)
  const [ segmentsEnabled, setSegmentsEnabled ] = useState(true);
  const [ logoPlace, setLogoPlace ] = useState(0)
  const [ toggleLogo, setToggleLogo ] = useState(false)
  const segments = [segmentFrom, segmentTo]

  const playForward = () => {
    setLogoDirection(1)
    setSegmentFrom(131.5)
    setSegmentTo(210)
  }

  const playBackward = () => {
    setLogoDirection(-1)
    setSegmentFrom(160)
    setSegmentTo(131.5)
  }

  return (<LogoContext.Provider value={
    { 
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
    }
    }>
    {props.children}
  </LogoContext.Provider>
  )
}
