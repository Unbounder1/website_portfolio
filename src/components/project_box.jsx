import { useState, useRef } from 'react';
import '../styles/project_box_style.css';
function ProjectContainer ({title, description, tags}) {
    
    const tagElements = Array.isArray(tags) ? tags.map((tag, index) => (
        <div key={index} className="tag">
            {tag}
        </div>
    )) : null;

    return (
        <div className="outer">
            <div className="title">{title}</div>
            <div className="description">{description}</div>
            <div className="tagbox">{tagElements}</div>
            <div className="picture"></div>
        </div>

        
    )


}

export default ProjectContainer;