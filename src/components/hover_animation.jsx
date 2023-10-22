import React, { useState } from 'react';
import PngPlayer from './png_player';

function HoverComponents({startFrame, frameRate, endFrame, directory, message}) {
    startFrame = parseInt(startFrame, 10);
    endFrame = parseInt(endFrame, 10);
    frameRate = parseInt(frameRate, 10);

    const [hovered, setHovered] = useState(false);
    const [currentFrame, setCurrentFrame] = useState(startFrame);

    const imageUrl = `${directory}${currentFrame.toString().padStart(2, '0')}-min.png`;
    const styles = {
        backgroundImage: `url('${imageUrl}')`,
        fontSize: '10vw'
    }

    const frameDuration = 1000 / frameRate;
    let timer;

    const handleMouseEnter = () => {
        setHovered(true);
        clearInterval(timer); 
        timer = setInterval(() => {
            setCurrentFrame(prevFrame => {
                const nextFrame = prevFrame + 1;
                console.log(prevFrame)
                if (nextFrame < endFrame) {
                    return nextFrame;
                }
                clearInterval(timer);
                return prevFrame;
            });
        }, frameDuration);
    }

    const handleMouseLeave = () => {
        setHovered(false);
        clearInterval(timer); 
        timer = setInterval(() => {
            setCurrentFrame(prevFrame => {
                console.log(prevFrame)
                const prev = prevFrame - 1;
                if (prev < 0) { 
                    clearInterval(timer);
                    return 0;
                }
                return prev;
            });
        }, frameDuration);
    };

    return (
        <div
            style={styles}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {message}
        </div>
    );
}

export default HoverComponents;
