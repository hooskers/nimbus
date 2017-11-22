import favicons from '../assets/favicons/favicons';
import fonts from '../assets/fonts/fonts';

import React, {Component} from 'react';
import {render} from 'react-dom';
import {css, fontFace} from 'react-emotion';

import apiKey from './apiKey';
import AnimatedBackground from './AnimatedBackground';

const weatherIcons = {
    'clear-day':           'J',
    'clear-night':         'D',
    'rain':                'G',
    'snow':                'H',
    'sleet':               'B',
    'wind':                'L',
    'fog':                 'C',
    'cloudy':              'A',
    'partly-cloudy-day':   'F',
    'partly-cloudy-night': 'E',
};

const app = css`
    width: 100vw;
    height: 100vh;
    background-color: white;
`;

const style = css`
    color: black;
    font-family: "Arial";
    font-size: 5em;
    z-index: 0;
    position: relative;
    display: inline-block;
    background-color: white;
`;

fontFace`
    font-family: 'Weather Icons';
    src: url(/fonts/WeatherIcons.woff);
`;

const icon = css`
    font-family: "Weather Icons";
    color: black;
    font-size: 10em;
    position: relative;
    z-index: 0;
    background-color: white;
    display: inline-block;
`;

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currently: {},
            daily: {},
            hourly: {},
            minutely: {},
        }
    }

    fetchWeather(lat, long) {
        const proxy = 'https://cors-anywhere.herokuapp.com/';

        fetch(`${proxy}https://api.darksky.net/forecast/18a076ac44c0bd845fd54792b8233541/${lat},${long}`)
        .then(response => response.json())
        .then(result => {
            this.setState({
                currently: result.currently,
                daily: result.daily,
                hourly: result.hourly,
                minutely: result.minutely,
            });
        });
    }

    componentDidMount() {
        let options = {
            enableHighAccuracy: false,
            timeout: 10000,
            maximumAge: 0,
        }

        this.setState({
            currently: {
                icon: 'partly-cloudy-night',
                summary: 'BLAH BLAH BLAH BLAH',
            },
        });

        return;

        //Get geolocation from browser
        navigator.geolocation.getCurrentPosition(pos => {
            this.setState({location: {lat: pos.coords.latitude, lon: pos.coords.longitude}});
            this.fetchWeather(pos.coords.latitude, pos.coords.longitude);
        }, error => {
            //If could not get gelocation from browser, use servive that gets coords from IP address
            console.warn("Could not get geolocation:", error.message);
            console.log("Using external service.");

            fetch('http://freegeoip.net/json/')
                .then(res => res.json())
                .then(json => {
                    this.fetchWeather(json.latitude, json.longitude);
                });
        }, options);
    }

    render() {
        console.log(this.state);
        return (
            <div className={app}>
                <AnimatedBackground>
                    <div className={icon}>{weatherIcons[this.state.currently.icon]}</div>
                    <div className={style}>{this.state.currently.summary || 'Loading...'}</div>
                </AnimatedBackground>
            </div>
        );
    }
}

render(<App style={{'height': '100vh', 'width': '100vw', 'background-color': 'white'}}/>, document.getElementById('app'));