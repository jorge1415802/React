import React, { Component } from "react";
import "./App.css";
import Busqueda from "./Busqueda";

class App extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            latOrigin: 4.624335,
            lngOrigin: -74.064644
        };
    }
    componentDidMount() {
        if ( navigator.geolocation ) {
            navigator.geolocation.getCurrentPosition( position => {
                this.setState( { latOrigin: position.coords.latitude, lngOrigin: position.coords.longitude } );
            } );
            console.log(this.state.latOrigin);
        }
    }
    render() {
        return (<div className="container"> {" "}
            <h1 className="text-light">
                DE VIAJE
            </h1>
            {" "}
            <Busqueda lat={
                    this.state.latOrigin
                }
                lng={
                    this.state.lngOrigin
                }/>{" "} </div>);
    }
}
export default App;
