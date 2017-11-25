import React, {Component} from 'react';
import {render} from 'react-dom';
import {css, keyframes} from 'react-emotion';
import PropTypes from 'prop-types';

import RainAnimation from './RainAnimation';

const animationComponents = {
    rain: <RainAnimation />,
};

const backgroundStyle = css`
    width: 100vw;
    height: 100vh;
    background: white;
    will-change: transform;
    transform: translateZ(0);
`;

//
const WeatherBackground = ({animation, children}) => {
    return (
        <div className={`weatherBackground ${backgroundStyle}`}>
            {animationComponents[animation]}
            {children}
        </div>
    )
}

WeatherBackground.propTypes = {
    animation: PropTypes.string.isRequired,
}

export default WeatherBackground;