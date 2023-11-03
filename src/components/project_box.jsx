import { useState, useRef } from 'react';
import '../styles/project_box_style.css';
function ProjectContainer ({title, description, tags}) {
    


    return (
        <div className="outer">
            <div className="title">{title}</div>
            <div className="description">{description}</div>
            <div className="tagbox"></div>
            <div className="picture"></div>
        </div>

        
    )


}

export default ProjectContainer;