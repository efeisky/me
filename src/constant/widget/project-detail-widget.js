import React from 'react'
import './project-detail-widget.css'
import Badge from './badge'

function ProjectDetailListWidget({children}) {
  return (
    <div className='project_detail_list'>
        {children}
    </div>
  )
}

function ProjectDetailItemWidget({title, content, link, type, languages, github }) {
  return (
    <div className='project_detail_item'>
        <h2>{title}</h2>
        <Badge contentList={type} color='special'/>
        <Badge contentList={languages}/>
        <span>İçerik : {content}</span>
        {
          link !== '' ? (<a href={link} target='_blank' rel='noreferrer'>{title}'a git</a>) : (<></>)
        }
        {
          github !== '' ? (<a href={github} target='_blank' rel='noreferrer'>Github koduna git</a>) : (<></>)
        }
        
    </div>
  )
}


export {ProjectDetailListWidget, ProjectDetailItemWidget}

