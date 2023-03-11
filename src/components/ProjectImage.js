import React from 'react'
import './style.css'

function projectImage({ proj }) {
    return (
        <div className='project-image-load'>
            <a href={proj.link} className='project-links'>
                <img src={require(`${proj.img}`)} alt="..." />
            </a>
        </div>
    )
}

export default projectImage
