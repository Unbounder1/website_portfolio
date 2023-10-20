import React, { useState } from 'react';
import PngPlayer from './png_player';

function HoverComponents(props) {
    const [hovered, setHovered] = useState(false);
    const styles = {
        // backgroundImage: `url(${props.name})`,
        backgroundColor: hovered ? 'white' : '',
        fontSize: '10vw'
    }

    const handleMouseEnter = () => {
        setHovered(true);
    }
    const handleMouseLeave = () => {
        setHovered(false);

    };

    return (
        <div
            style={styles}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <PngPlayer
                startFrame={parseInt(props.startFrame)}
                frameRate={parseInt(props.frameRate)}
                endFrame={parseInt(props.endFrame)}
                directory={props.directory}
                name={props.name}
                direction={hovered ? 'forward' : 'backward'}
            />
            {props.message}
        </div>
    );
}

export default HoverComponents;