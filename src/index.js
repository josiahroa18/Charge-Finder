import React from 'react';
import ReactDOM from 'react-dom';
import './App.css'

class App extends React.Component{
    render(){
        return(
            <div className="App">
                <h1>Hello World</h1>
            </div>
        );
    }
};

ReactDOM.render(<App />, document.getElementById('root'));

