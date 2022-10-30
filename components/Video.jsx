import React from 'react'



function Video(props) {
  return (
    
    <iframe className="w-full aspect-video " allowFullScreen src={`${props.link}`} poster={`${props.img}`}  ></iframe>

  )
}

export default Video
