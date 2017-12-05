import React, {Component} from 'react';
import {render} from 'react-dom';
import {css, keyframes} from 'react-emotion';
import PropTypes from 'prop-types';

import RainAnimation from './RainAnimation';
import SnowAnimation from './SnowAnimation';
import FogAnimation from './FogAnimation';
import SleetAnimation from './SleetAnimation';

const animationComponents = {
    rain: <RainAnimation />,
    snow: <SnowAnimation />,
    fog: <FogAnimation />,
    sleet: <SleetAnimation />,
};

const backgroundStyle = css`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(0deg, gray, darkgray);
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