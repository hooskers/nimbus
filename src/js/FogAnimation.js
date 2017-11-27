import React, {Component} from 'react';
import {render} from 'react-dom';
import {css, keyframes} from 'react-emotion';

const driftAnimation = keyframes`
    100% {
        transform: translateX(150vw)
    }
`;

const staticFogStyle = css`
    position: fixed;
    z-index: 1000;
    mix-blend-mode: exclusion;
    background: white;
    clip-path: inset(10% 10% round 70px);
    width: 100vw;
    height: 100vh;
    animation: ${driftAnimation} 5s linear infinite;
`;

const FogAnimation = () => {
    let fogs = [];

    for(let i = 0; i < 1; i++) {
        let left = Math.random() * (-50 - -100) + -100;
        let top = Math.random() * (66 - 10) + 10;

        let style = css`
            left: ${left}vw;
            top: 0vh;
        `;

        fogs.push(<div className={`fog ${staticFogStyle} ${style}`} key={'fog'+i}></div>)
    }

    return fogs;
}

export default FogAnimation;