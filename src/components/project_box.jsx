import { useState, useRef } from 'react';
import '../styles/project_box_style.css';

function ProjectContainer ({title, description, tags, image }) {
    const tagElements = Array.isArray(tags) ? tags.map((tag, index) => (
        <div key={index} className="tag">
            {tag}
        </div>
    )) : null;

    
    const handleClick = () => {
        // Directly set window.location.href to the URL you want to redirect to.
        window.location.href = './content/blogs/page-1';
    };

    return (
        <div className="outer" >
            <div className="title" onClick={handleClick}>{title}</div>
            <div className="description" onClick={handleClick}>{description}</div>
            <div className="tagbox">{tagElements}</div>
            <div 
                className="picture" 
                onClick={handleClick} 
                style={{ backgroundImage: `url(${image})` }}
            ></div>
        </div>

        
    )


}

export default ProjectContainer;