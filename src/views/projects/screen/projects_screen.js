import React, { useEffect } from 'react'
import { setPage } from '../../../constant/utils/set_page'
import { RouteDetails } from '../../../constant/routes/routes'
import {ProjectDetailListWidget, ProjectDetailItemWidget} from '../../../constant/widget/project-detail-widget'
import './../style/projects_screen.css'
import { ProjectsDetails } from '../script/my_projects'

export default function ProjectScreen() {
  useEffect(() => {
    setPage(RouteDetails.projects.content)
  }, [])
  
  return (
    <main className='project-area'>
      <h1>Projelerim</h1>
      <ProjectDetailListWidget>
        {ProjectsDetails.getProjects().map((project)=>{
          return <ProjectDetailItemWidget content={project.content} github={project.github} languages={project.languages} link={project.link} title={project.title} type={project.type}/>
        })}
      </ProjectDetailListWidget>
    </main>
  )
}
