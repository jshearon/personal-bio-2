import React, { useEffect, useContext } from 'react'
import { LogoContext } from './logoProvider';
import './skills.scss';

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
    <div className='skills-container'>
      <h2 className="m-5 section-title">SKILL FLUENCY</h2>
      <div className="skills">
        <img src="/images/html5.svg" alt='skill badge' />
        <img src="/images/css3.svg" alt='skill badge' />
        <img src="/images/javascript.svg" alt='skill badge' />
        <img src="/images/react.svg" alt='skill badge' />
        <img src="/images/sass.svg" alt='skill badge' />
        <img src="/images/python.svg" alt='skill badge' />
        <img src="/images/django.svg" alt='skill badge' />
        <img src="/images/firebase.svg" alt='skill badge' />
      </div>
    </div>
  )
}
