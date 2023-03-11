import React from 'react'
import './style.css'
import { projects } from './getProjects'
import ProjectImage from './ProjectImage'
import ProjectDetails from './ProjectDetails'

function Projects() {
    return (
        <div className="projectContainer">
            {
                projects.map((proj, idx) => (
                    <div className='projects' key={proj.id}>
                        {
                            (idx % 2 == 0 || window.innerWidth <= 760) ?
                                <>
                                    <ProjectImage proj={proj} />
                                    <ProjectDetails proj={proj} />
                                </>
                                :
                                <>
                                    {<ProjectDetails proj={proj} />}
                                    {<ProjectImage proj={proj} />}
                                </>
                        }
                    </div>
                ))
            }
        </div>
    )
}

export default Projects

