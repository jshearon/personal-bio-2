import React, { useEffect, useContext, useState } from 'react'
import { LogoContext } from './logoProvider';

export const Home = (props) => {
  const [firstLoad, setFirstLoad] = useState(true)
  const { 
    setToggleLogo, 
    playForward 
  } = useContext(LogoContext)

  useEffect(() => {
    if (props.location.pathname === "/home") {
      setToggleLogo(false)
      playForward()
    }
  }, []);


  return (
    <div className="home">
      Home
    </div>
  )
}
