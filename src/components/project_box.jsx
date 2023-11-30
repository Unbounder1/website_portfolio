import { useState, useRef } from 'react';
import '../styles/project_box_style.css';

function ProjectContainer ({title, description, tags, image}) {
    const tagElements = Array.isArray(tags) ? tags.map((tag, index) => (
        <div key={index} className="tag">
            {tag}
        </div>
    )) : null;

    
    const handleClick = () => {
        window.location.href = './content/blogs/page-1';
    };

    return (
        <div className="outer" onClick={handleClick}>
            <div className="title" >{title}</div>
            <div className="description">{description}</div>
            <div className="tagbox" >{tagElements}</div>
            <div 
                className="picture" 
                style={{ backgroundImage: `url(${image})` }}
            ></div>
        </div>

        
    )


}

export default ProjectContainer;