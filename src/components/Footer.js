import React, { Component } from 'react';
import '../styles/Footer.css';

export class Footer extends Component {
    constructor(props){
        super(props);
        this.state = {
            zipCode: "",
            range: "twentyFiveMile",
        }
    }

    getZoom = (range) =>{
        const scaleRange = {
            twentyFiveMile: 11,
            fitfyMile: 10,
            seventyFiveMile: 9,
            oneHundredMile: 8
        }
        for(let i=0;i<4;i++){
            if(range === Object.keys(scaleRange)[i]){
                return Object.values(scaleRange)[i];
            }
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
            this.getEVCData(coordinates.lat, coordinates.lng);
        })
    }

    checkZipCode = (zipCodeValue) =>{
        return /^\d{5}(-\d{4})?$/.test(zipCodeValue) ? true:false;
    }

    getEVCData = (lat ,lng) =>{
        let url = "https://api.openchargemap.io/v3/poi/?output=json&maxresults=10&latitude=" + lat + "&longitutde=" + lng + "&distance=50&distanceunit=Miles&countrycode=US";
        fetch(url)
        .then(res => res.json())
        .then(resJSON =>{
            console.log(resJSON);
        })

    }

    onSubmit = (e) =>{
        e.preventDefault();
        if(this.checkZipCode(this.state.zipCode)){
            this.getZipCodeData(this.state.zipCode);
            let zoom = this.getZoom(this.state.range);
            this.props.setZoom(zoom);
        }
        else{
            console.error("Invalid US Zip Code");
            alert("Invalid zip code, please try again");
        }
        this.setState({
            zipCode: "",
            range: "",
            lat: "",
            lng: ""
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
                    <select id="range-input" value={this.state.range} onChange={this.onChange}>
                        <option value="twentyFiveMile">25 Miles</option>
                        <option value="fitfyMile">50 Miles</option>
                        <option value="seventyFiveMile">75 Miles</option>
                        <option value="oneHundredMile">100 Miles</option>
                    </select>
                    <input type="submit"></input>
                </form>
            </footer>
        )
    }
}

export default Footer
