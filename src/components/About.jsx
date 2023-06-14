import React from 'react'
import { about } from "../constants";

const About = () => {
  // const handlePlay = e => e.target.play();
  const handlePlay = e => {
    console.log(e.target)
    e.target.play();
  }

  return (
    <div className='flex'>
      {about.avatar.map( avatar => (
        <video src={avatar.video}
          key={avatar.name}
          type="video/mov"
          onMouseEnter={handlePlay}
          muted
          className='w-[150px]'/>
      )) }
    </div>
  )
}

export default About
