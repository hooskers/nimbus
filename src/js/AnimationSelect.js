import React, {Component, AnimationEvent} from 'react';
import {render} from 'react-dom';
import {css} from 'emotion';

const animationSelectStyle = css`
    position: absolute;
    bottom: 5px;
    left: 5px;
`;

const AnimationSelect = ({options, handleChange}) =>
    <select className={animationSelectStyle} onChange={handleChange}>
        <option disabled selected value="">Select a weather condition</option>
        {Object.keys(options).map((option) => 
            <option value={option} key={option}>{option}</option>)}
    </select>

export default AnimationSelect;