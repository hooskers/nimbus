import React, {Component} from 'react';
import {render} from 'react-dom';
import {css, keyframes} from 'react-emotion';

const staticCloudStyle = css`
    position: fixed;
    z-index: 1000;
    background: rgba(255, 255, 255, 0.5);
    border: 1px solid rgba(0, 0, 0, 0);
    border-radius: 70px;
    width: 20vw;
    height: 20vh;
`;

const CloudAnimation = () => {
    let clouds = [];

    for(let i = 0; i < 2; i++) {
        let left = Math.random() * (-20 - -40) + -40;
        let top = Math.random() * (33 - 0) + 0;
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

        clouds.push(<div className={`cloud ${staticCloudStyle} ${style}`} key={'clouda'+i}></div>);
    }

    for(let i = 0; i < 2; i++) {
        let left = Math.random() * (-40 - -60) + -60;
        let top = Math.random() * (33 - 0) + 0;
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

        clouds.push(<div className={`cloud ${staticCloudStyle} ${style}`} key={'cloudb'+i}></div>);
    }

    for(let i = 0; i < 2; i++) {
        let left = Math.random() * (-60 - -80) + -80;
        let top = Math.random() * (33 - 0) + 0;
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

        clouds.push(<div className={`cloud ${staticCloudStyle} ${style}`} key={'cloudc'+i}></div>);
    }

    return clouds;
}

export default CloudAnimation;