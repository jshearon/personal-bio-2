import React, { useEffect, useContext } from 'react'
import { LogoContext } from './logoProvider';

export const About = () => {
  const { 
    setToggleLogo, 
    playBackward 
  } = useContext(LogoContext)

  useEffect(() => {
    setToggleLogo(true)
    playBackward()
  })

  return (
    <div className="about text-left m-auto">
      <h1>Hi, I'm Jonathan. </h1>
      
      <h3>I'm a full-stack software developer who loves to make cool things 
      that make life easier for me and everyone else. Things that get business done and make productivity soar.</h3> 
      <h3>I'm currently enrolled in Nashville Software School
      to level up my self-taught programming skills. I speak fluent web stack, including HTML5, Javascript ES6, CSS/Sass, Bootstrap, React, Python, Django, PHP - all the good stuff. 
      I know Linux, the command line and 
      </h3>
      <h3>
      In my spare time I enjoy writing orchestral music, playing classical guitar and spending time with my amazing wife and two kids.  
      </h3>
    </div>
  )
}
