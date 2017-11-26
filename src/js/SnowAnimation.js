import React, {Component} from 'react';
import {render} from 'react-dom';
import {css, keyframes} from 'react-emotion';

let flakeAnimationLeft = keyframes`
    0% {
        transform: translate(70vh, 0vh);
    }

    100% {
        transform: translate(30vh, 100vh);
    }
`;

let flakeAnimationRight = keyframes`
    0% {
        transform: translate(0vh, 0vh);
    }

    100% {
        transform: translate(10vh, 100vh);
    }
`;

let flakeAnimationDown = keyframes`
    0% {
        transform: translateY(0vh);
    }

    100% {
        transform: translateY(100vh);
    }
`;

//Styles for snow flakes that don't change
const staticFlakeStyle = css`
    position: fixed;
    top: -2vh;
    background: white;
    mix-blend-mode: exclusion;
    z-index: 1000;
    will-change: transform;
    transform: translateZ(0);
    border: solid 1px white;
    border-radius: 50%;
`;

const SnowAnimation = () => {
    let flakes = [];

    //Generate random(ish)ized snow flakes
    for (let i = 0; i < 10; i++) {
        let animationDelay = Math.random() * (5 - 0) + 0;
        let left = Math.round(Math.random() * (100 - 1) + 1);

        let style = css`
            left: ${left}vw;
            width: 0.75vh;
            height: 0.75vh;
            filter: blur(2px);
            animation: ${flakeAnimationLeft} 5s linear infinite;
            animation-delay: ${animationDelay}s;
        `;

        flakes.push(<div className={`flake ${staticFlakeStyle} ${style}`} key={'flakeLeft'+i}></div>)
    }

    for (let i = 0; i < 10; i++) {
        let animationDelay = Math.random() * (5 - 0) + 0;
        let left = Math.round(Math.random() * (100 - 1) + 1);

        let style = css`
            left: ${left}vw;
            width: 0.25vh;
            height: 0.25vh;
            animation: ${flakeAnimationRight} 5s linear infinite;
            animation-delay: ${animationDelay}s;
        `;

        flakes.push(<div className={`flake ${staticFlakeStyle} ${style}`} key={'flakeRight'+i}></div>)
    }

    for (let i = 0; i < 10; i++) {
        let animationDelay = Math.random() * (5 - 0) + 0;
        let left = Math.round(Math.random() * (100 - 1) + 1);

        let style = css`
            left: ${left}vw;
            width: 0.5vh;
            height: 0.5vh;
            filter: blur(1px);
            animation: ${flakeAnimationDown} 5s linear infinite;
            animation-delay: ${animationDelay}s;
        `;

        flakes.push(<div className={`flake ${staticFlakeStyle} ${style}`} key={'flakeDown'+i}></div>)
    }

    return flakes;

}

export default SnowAnimation;