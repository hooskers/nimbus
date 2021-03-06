import React, {Component} from 'react';
import {render} from 'react-dom';
import {css, keyframes} from 'react-emotion';

let dropAnimation = keyframes`
    0% {
        transform: translateY(0vh);
    }

    30% {
        transform: translateY(85vh);
    }

    55% {
        transform: translateY(90vh);
    }

    85% {
        transform: translateY(95vh);
    }

    40%, 70%, 100% {
        transform: translateY(100vh);
    }
`;

//Styles for rain drops that don't change
const staticDropStyle = css`
    position: fixed;
    height: 5px;
    top: -10vh;
    background: linear-gradient(0deg, white, black 60%, rgba(0, 0, 0, 0.5));
    background: white;
    width: 5px;
    mix-blend-mode: exclusion;
    z-index: 1000;
    animation: ${dropAnimation} 2s linear infinite;
    will-change: transform;
    transform: translateZ(0);
`;

const SleetAnimation = () => {
let drops = [];

//Generate random(ish)ized rain drops
for (let i = 0; i < 30; i++) {
    let animationDelay = Math.random() * (2 - 0) + 0;
    let left = Math.round(Math.random() * (100 - 1) + 1);

    let style = css`
        left: ${left}vw;
        animation-delay: ${animationDelay}s;
    `;

    drops.push(<div className={`drop ${staticDropStyle} ${style}`} key={'drop'+i}></div>)
}

return drops;

}

export default SleetAnimation;