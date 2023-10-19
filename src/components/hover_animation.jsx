import React, { useState } from 'react';

function HoverComponents(props) {
    const [hovered, setHovered] = useState(false);

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };

    return (
        <div
            className={hovered ? 'hovered-bg' : ''}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ fontSize: '10vw' }}
        >
            {props.message}
        </div>
    );
}

export default HoverComponents;
