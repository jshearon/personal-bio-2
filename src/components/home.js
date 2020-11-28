import React, { useEffect, useContext, useState } from 'react'
import { LogoContext } from './logoProvider';

export const Home = () => {
  const [firstLoad, setFirstLoad] = useState(false)
  const { 
    setToggleLogo, 
    playForward 
  } = useContext(LogoContext)

  useEffect(() => {
    if (!firstLoad) {
      setFirstLoad(true)
    } else {
      setToggleLogo(false)
      playForward()
    }
  }, [])


  return (
    <div className="home">
    </div>
  )
}
