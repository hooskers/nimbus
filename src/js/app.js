import React, {Component} from 'react';
import {render} from 'react-dom';
import {css} from 'react-emotion';

const style = css`
    color: red;
`;

class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className={style}>Wassup</div>
        );
    }
}

render(<App />, document.getElementById('app'));