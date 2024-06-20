import React from 'react'
import './badge.css'

export default function Badge({contentList, color = 'normal'}) {
  return (
    <div className='badge-area' id={color}>{contentList.map((content)=> {return <BadgeItem content={content}/>;})}</div>
  )
}

function BadgeItem({content}) {
  return (
    <div className='badge'>{content}</div>
  )
}

