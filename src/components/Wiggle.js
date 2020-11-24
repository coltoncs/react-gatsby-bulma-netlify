import React from 'react';
import { animated } from 'react-spring';
import useWiggle from '../hooks/useWiggle';

const Wiggle = ({ children, ...wiggleConfig }) => {
    const [style, trigger] = useWiggle(wiggleConfig);

    return (
        <animated.span onMouseEnter={trigger} style={style}>
            {children}
        </animated.span>
    );
};

export default Wiggle;