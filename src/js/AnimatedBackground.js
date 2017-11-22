import React, {Component} from 'react';
import {render} from 'react-dom';
import {css} from 'react-emotion';

const backgroundStyle = css`
    width: 100vw;
    height: 100vh;
`;

class AnimatedBackground extends Component {
    constructor(props) {
        super(props)

        this.drops = this.drops.bind(this);
    }

    drops() {
        let drops = [];

        for (let i = 0; i < 75; i++) {
            let topRandom = Math.random();
            let top = Math.round(topRandom * (-5 - -100) + -100);
            let left = Math.round(Math.random() * (100 - 1) + 1);
            let endTop = top + 100;
            let animationTime = Math.abs(topRandom) * 2;

            let style = css`
                position: absolute;
                background-color: white;
                height: 50px;
                width: 5px;
                top: ${top}vh;
                left: ${left}vw;
                animation: drop${i} ${animationTime}s linear infinite;
                animation: drop${i} 3s linear infinite;
                mix-blend-mode: exclusion;
                z-index: 1000;

                @keyframes drop${i} {
                    100% {
                        top: ${endTop}vh;
                    }
                }
            `;

            drops.push(<div className={'drop ' + style} key={'drop'+i}></div>)
        }

        return drops;
    }

    render() {
        return (
            <div className="animatedBackground">
                {this.drops().map((drop) => drop)}
                {this.props.children}
            </div>
        );
    }

};

export default AnimatedBackground;