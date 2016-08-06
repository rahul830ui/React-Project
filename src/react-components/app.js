import React from 'react';
import ReactDom from 'react-dom';
import HomePage from './HomePage';


class App extends React.Component {
    constructor() {
        super();
    }

    render() {
        return(
            <HomePage/>

        );
    }
}


ReactDom.render(<App/>, document.getElementById('root'));