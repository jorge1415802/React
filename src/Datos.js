import React from "react";
import "./Datos.css";

class Datos extends React.Component {
    render(){
        return (
            <div className="row my-2 text-center">
                <div className="col-12">
                    <h1 className="text-white underline papu"><u>{this.props.name}</u></h1>

                </div>
                <div className="col-12">
                    <p className="text-white lead font-italic">{this.props.address}</p>
                </div>
            </div>
        );
    }
}
export default Datos;