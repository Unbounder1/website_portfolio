import { useState, useRef } from 'react';
import '../styles/index_style.css';

function HoverOverlay({ url, hovered }) {
    const styles = {
        backgroundImage: `url('${url}')`,
        top: '0',
        left: '0',
        width: '100vw',
        height: '100vh',
        position: 'absolute',
        zIndex: hovered ? '3' : '1',
        pointerEvents: 'none'
    }

    return <div style={styles}></div>;
}

function HoverComponents({ startFrame, frameRate, endFrame, directory, message}) {
    startFrame = parseInt(startFrame, 10);
    endFrame = parseInt(endFrame, 10);
    frameRate = parseInt(frameRate, 10);

    const [hovered, setHovered] = useState(false);
    const [currentFrame, setCurrentFrame] = useState(startFrame);

    const imageUrl = `${directory}${currentFrame.toString().padStart(2, '0')}.png`;
    const styles = {
        backgroundColor: hovered ? 'white' : '',
        zIndex: hovered ? '4' : '2',
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
                console.log(message + prevFrame)
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
                console.log(message + prevFrame)
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
            
            <span
                style={styles}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {message}
            </span>
            <HoverOverlay url={imageUrl} hovered={hovered}/>
        </div>
    );
}


export default HoverComponents;
