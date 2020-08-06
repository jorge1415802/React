import React from "react"

const Horario = (props) => {
    if(props.hours){
        return (
            <div className="row my-2">
                <div className="col-md-3 text-center">
                    <p className="lead text-light font-weight-bold">Horarios : </p>
                </div>
                <div className="col-md-9 text-center">
                    {
                        props.hours.map((horario, index) => {
                            return <p key={index} className="text-light font-italic m-0"><small>{horario}</small></p>
                        })
                    }
                </div>
            </div>
        )
    }        
}

export default Horario