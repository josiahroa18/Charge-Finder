import React, { Component } from 'react';
import Footer from './Footer';
import GoogleMapReact from 'google-map-react';

export class Map extends Component {
    constructor(props){
        super(props);
        this.state = {
            center: {
                lat: 40,
                lng: -95
            },
            zoom: 4
        }
    }

    newLocation = (coordinates) =>{
        this.setState({
            center: coordinates,
            zoom: 8
        })
    }

    render(props) {
        return (
            <div style={{ height: '80vh', width: '100%', zIndex: '2' }}>
                <GoogleMapReact 
                    bootstrapURLKeys={{key: this.props.apiKey}}
                    center={this.state.center}
                    zoom={this.state.zoom}
                >
                </GoogleMapReact>
                <Footer apiKey={this.props.apiKey} newLocation={this.newLocation}/>
            </div>
        )
    }
}

export default Map
