import React, {Component} from 'react';
import {render} from 'react-dom';
import {css, keyframes} from 'react-emotion';

const staticFogStyle = css`
    position: fixed;
    z-index: 1000;
    background: rgba(255, 255, 255, 0.5);
    clip-path: inset(10% 10% round 70px);
    width: 70vw;
    height: 10vh;
`;

const FogAnimation = () => {
    let fogs = [];

    for(let i = 0; i < 4; i++) {
        let left = Math.random() * (-70 - -140) + -140;
        let top = Math.random() * (100 - 0) + 0;
        let duration = Math.random() * (50 - 35) + 35;

        const driftAnimation = keyframes`
            100% {
                transform: translateX(${170+Math.abs(left)}vw)
            }
        `;

        let style = css`
            left: ${left}vw;
            top: ${top}vh;
            animation: ${driftAnimation} ${duration}s linear infinite;
        `;

        fogs.push(<div className={`fog ${staticFogStyle} ${style}`} key={'foga'+i}></div>);
    }

    for(let i = 0; i < 4; i++) {
        let left = Math.random() * (-140 - -210) + -210;
        let top = Math.random() * (100 - 0) + 0;
        let duration = Math.random() * (64 - 49) + 49;

        const driftAnimation = keyframes`
            100% {
                transform: translateX(${170+Math.abs(left)}vw)
            }
        `;

        let style = css`
            left: ${left}vw;
            top: ${top}vh;
            animation: ${driftAnimation} ${duration}s linear infinite;
        `;

        fogs.push(<div className={`fog ${staticFogStyle} ${style}`} key={'fogb'+i}></div>);
    }

    for(let i = 0; i < 4; i++) {
        let left = Math.random() * (-210 - -280) + -280;
        let top = Math.random() * (100 - 0) + 0;
        let duration = Math.random() * (57 - 42) + 42;

        const driftAnimation = keyframes`
            100% {
                transform: translateX(${170+Math.abs(left)}vw)
            }
        `;

        let style = css`
            left: ${left}vw;
            top: ${top}vh;
            animation: ${driftAnimation} ${duration}s linear infinite;
        `;

        fogs.push(<div className={`fog ${staticFogStyle} ${style}`} key={'fogc'+i}></div>);
    }

    return fogs;
}

export default FogAnimation;