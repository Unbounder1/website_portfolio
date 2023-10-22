import { useState, useRef } from 'react';

function HoverComponents({ startFrame, frameRate, endFrame, directory, message }) {
    startFrame = parseInt(startFrame, 10);
    endFrame = parseInt(endFrame, 10);
    frameRate = parseInt(frameRate, 10);

    const [hovered, setHovered] = useState(false);
    const [currentFrame, setCurrentFrame] = useState(startFrame);

    const imageUrl = `${directory}${currentFrame.toString().padStart(2, '0')}-min.png`;
    const styles = {
        backgroundColor: hovered ? 'white' : '',
        fontSize: '10vw',
        zIndex: '100',
        position: 'relative'
    }

    const frameDuration = 1000 / frameRate;
    const timer = useRef(null);

    const handleMouseEnter = () => {
        setHovered(true);
        clearInterval(timer.current);
        timer.current = setInterval(() => {
            setCurrentFrame(prevFrame => {
                const nextFrame = prevFrame + 1;
                console.log(prevFrame)
                if (nextFrame < endFrame) {
                    return nextFrame;
                }
                clearInterval(timer.current);
                return prevFrame;
            });
        }, frameDuration);
    }

    const handleMouseLeave = () => {
        setHovered(false);
        clearInterval(timer.current);
        timer.current = setInterval(() => {
            setCurrentFrame(prevFrame => {
                console.log(prevFrame)
                const prev = prevFrame - 1;
                if (prev < 0) {
                    clearInterval(timer.current);
                    return 0;
                }
                return prev;
            });
        }, frameDuration);
    };

    return (
        <div>
            <HoverOverlay url={imageUrl} />
            <span
                style={styles}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {message}
            </span>
        </div>
    );
}

function HoverOverlay({ url }) {
    const styles = {
        backgroundImage: `url('${url}')`,
        top: '0',
        left: '0',
        width: '100vw',
        height: '100vh',
        position: 'absolute',
        zIndex: '1'
    }

    return <div style={styles}></div>;
}
export default HoverComponents;
