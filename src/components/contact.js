import React, { useEffect, useContext } from 'react'
import { LogoContext } from './logoProvider';

export const Contact = () => {
  const { 
    setToggleLogo, 
    playBackward 
  } = useContext(LogoContext)

  useEffect(() => {
    setToggleLogo(true)
    playBackward()
  })

  return (
    <div className="contact">
      Contact
    </div>
  )
}
