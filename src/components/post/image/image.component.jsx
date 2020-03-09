import './image.styles.scss'
import React from 'react'

function Image({url,alt}){
  return(<img src={url} className ='image' alt={alt}></img>)
}
export default Image;