import React, { useEffect, useContext } from 'react'
import { LogoContext } from './logoProvider';

export const Skills = () => {
  const { 
    setToggleLogo, 
    playBackward 
  } = useContext(LogoContext)

  useEffect(() => {
    setToggleLogo(true)
    playBackward()
  })

  return (
    <div className="skills">
    </div>
  )
}
