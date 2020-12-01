import React, { useEffect, useContext } from 'react'
import { LogoContext } from './logoProvider';
import SimpleSlider from './slider'

export const Projects = () => {
  const { 
    setToggleLogo, 
    playBackward 
  } = useContext(LogoContext)

  useEffect(() => {
    setToggleLogo(true)
    playBackward()
  })

  return (
    <div className="projects d-flex flex-column justify-content-start">
      <h2 className="m-5 section-title">RECENT PROJECTS</h2>
      <SimpleSlider />
    </div>
  )
}
