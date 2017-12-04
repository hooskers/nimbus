import React, {Component} from 'react';
import {render} from 'react-dom';
import {css, keyframes} from 'react-emotion';

const transparentLinearGradient = (angle, color, interval) => {
    let linearGradient = `linear-gradient(${angle}deg, ${color} ${interval}%, `;

    for (let i = 1; i <= 100/interval; i++) {
        let string = ``;
        if (i < 100/interval) {
            if (i % 2 !== 0) {
                string = `transparent ${interval*i}%, transparent ${interval*(i+1)}%, `;
            } else {
                string = `${color} ${interval*i}%, ${color} ${interval*(i+1)}%, `;
            }
        } else {
            if (i % 2 !== 0) {
                string = `transparent ${interval*i}%);`;
            } else {
                string = `${color} ${interval*i}%);`;
            }
        }
        linearGradient = linearGradient + string;
    }
    return linearGradient;
};

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

        fogs.push(<div className={`fog ${staticFogStyle} ${style}`} key={'fog'+i}></div>);
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

        fogs.push(<div className={`fog ${staticFogStyle} ${style}`} key={'fog'+i}></div>);
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

        fogs.push(<div className={`fog ${staticFogStyle} ${style}`} key={'fog'+i}></div>);
    }

    return fogs;
}

export default FogAnimation;