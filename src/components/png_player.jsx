import React, { useState, useEffect } from 'react';

function PngPlayer({startFrame, frameRate, endFrame, directory, name, direction}) {
    const [currentFrame, setCurrentFrame] = useState(startFrame);
    
    useEffect(() => {
        const frameDuration = 1000 / frameRate;
        let timer;

        if (direction === 'forward' && currentFrame < endFrame) {
            timer = setInterval(()=> {
                setCurrentFrame(currentFrame => currentFrame + 1)
                console.log(currentFrame)
            }, frameDuration);
        } 

        else if (direction === 'backward' && currentFrame > startFrame) {
            timer = setInterval(() => {
                setCurrentFrame(currentFrame => currentFrame - 1)
                console.log(currentFrame)
            }, frameDuration);
        }
        return () => clearInterval(timer);
    }, [direction, currentFrame, endFrame, frameRate, startFrame]);
    
    const imageUrl = `${directory}${currentFrame.toString().padStart(2, '0')}-min.png`;

    return (
        <img 
        src={imageUrl}
        alt={`Frame ${currentFrame}`}
        className={`${name}animation`} 
        />
    );
    
}

export default PngPlayer;