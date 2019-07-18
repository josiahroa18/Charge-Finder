import React from 'react';
import ReactDOM from 'react-dom';
import APIKEY from './googleAPI_config';
import Header from './components/Header';
import Map from './components/Map';

class AppIndex extends React.Component{
    render(){
        return(
            <div className="App">
                  <Header />
                  <Map apiKey={APIKEY}/>
            </div>
        );
    }
}

ReactDOM.render(<AppIndex />,document.getElementById('root'));