import React, { useState } from 'react';

function  HoverComponents(){
    const [hovered, setHovered] = React.useState(false);

    const handleMouseEnter = () => {
        setHovered(true);
    }
    const handleMouseLeave = () => {
        setHovered(false);
    }

    return (
        <div
        className={hovered ? 'hovered-bg': ''}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        ></div>
    );
}

export default HoverComponents;