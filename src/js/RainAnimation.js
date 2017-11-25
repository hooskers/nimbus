import React, {Component} from 'react';
import {render} from 'react-dom';
import {css, keyframes} from 'react-emotion';

let dropAnimation = keyframes`
    0% {
        transform: translateY(0vh);
    }

    100% {
        transform: translateY(100vh);
    }
`;

//Styles for rain drops that don't change
const staticDropStyle = css`
    position: fixed;
    height: 10vh;
    top: -10vh;
    background: linear-gradient(0deg, white, black 60%, rgba(0, 0, 0, 0));
    width: 1px;
    mix-blend-mode: exclusion;
    z-index: 1000;
    animation: ${dropAnimation} 1.5s linear infinite;
`;

const RainAnimation = () => {
    let drops = [];
    
    //Generate random(ish)ized rain drops
    for (let i = 0; i < 33; i++) {
        let animationDelay = Math.random() * (1.5 - 0) + 0;
        let left = Math.round(Math.random() * (100 - 1) + 1);
    
        let style = css`
            left: ${left}vw;
            animation-delay: ${animationDelay}s;
        `;
    
        drops.push(<div className={`drop ${staticDropStyle} ${style}`} key={'drop'+i}></div>)
    }

    return drops;

}

export default RainAnimation;
