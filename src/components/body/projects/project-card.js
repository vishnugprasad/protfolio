import React from 'react'
import "./project-card.css"

function ProjectCard({project}) {
  return (
    <div className='project-card'>

        <div className='project-info'>
            <label className='project-title'>{project.title}</label>
            <div className='project-links'>
                {project.demo&&(<a className='project-link' href={project.demo}>
                    {
                        <div className='link-button'>
                            Demo
                        </div>
                    }</a>)}

            </div>
            </div> 
        <img src = {project.img} className = "prohject-photo"/>
        
    </div>
  )
}

export default ProjectCard