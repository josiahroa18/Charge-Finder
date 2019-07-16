import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

export class Map extends Component {
    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 1
    };

    render() {
        return (
            <div style={{ height: '80vh', width: '100%', zIndex: '2' }}>
                {console.log(this.props.apiKey)}
                <GoogleMapReact 
                    bootstrapURLKeys={{key: this.props.apiKey}}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >

                </GoogleMapReact>
            </div>
        )
    }
}

export default Map
