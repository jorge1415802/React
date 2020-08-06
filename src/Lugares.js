import React from "react";
import "./Lugares.css";

class Lugares extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            morePlaces: false
        }
    }
    veces = 0;
    dife = 0;
    total = 0;
    parcial = 0;
    contador = 0;
    htmlLista = '';
    filterPlaces = [];
    handleClick = (name, e) => {
        this.inicializar()
        this.props.buscar(name, e)
    }
    handleLugares = async () => {
        this.inicializar()
        const respuesta = await this.props.buscarLugaresCercanos()
        if(respuesta === "ok"){
            if(this.contador === this.props.lugares.length){
                this.setState({
                    morePlaces: false
                })
            }else{
                this.veces = Math.ceil(this.props.lugares.length / 10)
                this.parcial = this.props.lugares.length
                this.calcularVerMas()
            }
        } 
    }
    calcularVerMas = () => {
        if(this.veces > 0){
            if(this.parcial >= 10){
                this.dife = this.parcial - 10
                this.total = this.parcial - this.dife
                this.parcial = this.dife
            }else{
                this.total = this.parcial
            }
            for(let index = 0 ; index < this.total ; index++){
                /*
                this.htmlLista += `
                    <a href="#" onClick="this.handleClick" class="list-group-item list-group-item-action" key=${this.contador}>
                        <div class="row">
                            <div class="col-2 p-0">
                                <img src=${this.props.lugares[this.contador].hasOwnProperty('photos') ? this.props.lugares[this.contador].photos[0].getUrl() : ''} class="img-thumbnail" />
                            </div>
                            <div class="col-10">
                                <div class="d-flex justify-content-between">
                                    <h5>${this.props.lugares[this.contador].name}</h5>
                                    ${this.props.lugares[this.contador].hasOwnProperty('rating') ? 
                                        `<small class="star">${this.props.lugares[this.contador].rating}</small>`
                                        :
                                        ''
                                    }
                                </div>
                            </div>
                        </div>
                    </a>
                `
                */
                this.filterPlaces.push(this.props.lugares[this.contador])
                this.contador++
            }
            this.veces--
            if(this.veces === 0){
                this.setState({
                    morePlaces: false
                })
            }else{
                this.setState({
                    morePlaces: true
                })
            }
        }
    }

    inicializar = () => {
        this.htmlLista = ''
        this.veces = 0
        this.contador = 0
        this.parcial = 0
        this.total = 0
        this.dife = 0
        this.filterPlaces = []
    }

    /*
    componentDidUpdate(){
        if(!this.props.mostrar){
            document.getElementById('lista').innerHTML = ''
        }
    }
    */

    render(){
        return (
                <div>
                    <div className="row my-2">
                        <div className="col-12">
                            <button className="btn btn-primary" onClick={this.handleLugares}>Lugares Cercanos</button>
                        </div>
                    </div>
                    
                            <div className="row my-0">
                                <div className="col-md-8 col-12 offset-md-2 py-2">
                                    <div id="lista" className="list-group">
                                    {
                                        this.props.mostrar &&
                                    
                                    
                                        this.filterPlaces.map((valor, index) => {
                                            return ( 
                                                <a href="#" onClick={(e) => this.handleClick(valor.name, e)} className="list-group-item list-group-item-action" key={index}>
                                                    <div className="row">
                                                        <div className="col-2 p-0">
                                                        
                                                            <img src={valor.hasOwnProperty('photos') ? valor.photos[0].getUrl() : ''} className="img-thumbnail" />
                                                        </div>
                                                        <div className="col-10">
                                                            <div className="d-flex justify-content-between">
                                                                <h5>{valor.name}</h5>
                                                                    {valor.hasOwnProperty('rating') ? 
                                                                    <small className="star">{valor.rating}</small>
                                                                    :
                                                                    ''}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            )
                                        })
                                    }
                                        {this.props.mostrar &&
                                    
                                        this.state.morePlaces &&
                                            <div className="list-group-item">
                                                <button className="btn btn-outline-primary" onClick={this.calcularVerMas}>Ver mas lugares</button>
                                            </div>
                                    }       
                                    </div>
                                </div>
                            </div>
                        
                    
                </div>
        )
    }
}

export default Lugares;