import React from 'react';
import ReactDOM from 'react-dom';
import APIKEY from './config'
import './App.css';

class App extends React.Component{
    render(){
        return(
            <div className="App">
                <h1>Hello</h1>
                {APIKEY}            
                </div>
        );
    }
}

ReactDOM.render(<App />,document.getElementById('root'));