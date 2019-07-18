import React, { Component } from 'react';
import '../styles/Footer.css';

export class Footer extends Component {
    constructor(props){
        super(props);
        this.state = {
            zipCode: "",
            range: ""
        }
    }

    getZipCodeData = (zipCodeValue) =>{
        let apiKey = this.props.apiKey;
        let url = "https://maps.googleapis.com/maps/api/geocode/json?address=" + zipCodeValue + "&key=" + apiKey;
        let coordinates = {
            lat: "",
            lng: ""
        };
        fetch(url)
        .then(res => res.json())
        .then(resJSON => {
            coordinates.lat = resJSON.results[0].geometry.location.lat;
            coordinates.lng = resJSON.results[0].geometry.location.lng;
            this.props.newLocation(coordinates);
        })
    }

    checkZipCode = (zipCodeValue) =>{
        return /^\d{5}(-\d{4})?$/.test(zipCodeValue) ? true:false;
    }

    onSubmit = (e) =>{
        e.preventDefault();
        if(this.checkZipCode(this.state.zipCode)){
            this.getZipCodeData(this.state.zipCode);
        }
        else{
            console.error("Invalid US Zip Code");
            alert("Invalid zip code, please try again");
        }
        this.setState({
            zipCode: "",
            range: ""
        })
    }

    onChange = (e) =>{
        if(e.target.id === "range-input"){
            this.setState({
                range: e.target.value
            })
        }
        else{
            this.setState({
                zipCode: e.target.value
            })
        }
    }

    render() {
        return (
            <footer>
                <form onSubmit={this.onSubmit}>
                    <p>Zip Code:</p>
                    <input type="text" value={this.state.zipCode} onChange={this.onChange}></input>
                    <p>Range:</p>
                    <input type="text" id="range-input" value={this.state.range} onChange={this.onChange}></input>
                    <input type="submit"></input>
                </form>
            </footer>
        )
    }
}

export default Footer
