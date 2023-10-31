import { useState, useRef } from 'react';
import '../styles/project_box_style.css';
function ProjectContainer ({title, description, tags}) {
    


    return (
        <div class="outer">
            <div class="title">{title}</div>
            <div class="description">{description}</div>
        </div>
    )


}

export default ProjectContainer;