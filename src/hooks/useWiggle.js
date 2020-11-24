import React from 'react'
import { useSpring } from 'react-spring'

function useWiggle({
    x=0,
    y=0,
    rotation=0,
    scale=1,
    timing=150,
    springConfig = {
        tension: 300,
        friction: 10
    }
}) {
    const [toggle, setToggle] = React.useState(false);

    const style = useSpring({
        display: 'inline-block',
        transform: toggle ? `translate(${x}px, ${y}px) rotate(${rotation}deg) scale(${scale})` : 'translate(0px, 0px) rotate(0deg) scale(1)',
        config: springConfig
    });

    React.useEffect(() => {
        if(!toggle){ return }

        const timeoutId = window.setTimeout(() => {
            setToggle(false);
        }, timing);

        return () => {
            window.clearTimeout(timeoutId);
        };
    }, [toggle]);

    const trigger = React.useCallback(() => {
        setToggle(true);
    }, []);
    
    return [style, trigger]
}

export default useWiggle;