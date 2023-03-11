import React from 'react'
import './style.css'

function projectWordings({ proj }) {
    return (
        <div>
            <div className="projectDetails block animatable bounceIn">
                <a href={proj.github}>
                    <h1>{proj.name} project:</h1><br />
                    <h2>with-</h2>
                    <ul>{
                        proj.tech.map((stack) => (
                            <li>{stack}</li>
                        ))
                    }
                    </ul>
                    <h5>Click anywhere on image to view the project.</h5>
                    <h5>Click anywhere on text to view the source code.</h5>
                </a>
            </div>
        </div>
    )
}

export default projectWordings
