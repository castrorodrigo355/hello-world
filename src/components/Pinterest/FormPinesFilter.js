import React, { Component } from 'react';
import '../App.css';

class FormPinesFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buscar : '',
      pinFilteredSelected : {}
    }
  }
  
  handleSearch(e) {
    e.preventDefault();
    const clave = this.state.buscar
    this.setState({
        buscar: ''
    });
    this.refs.inputBuscar.focus();
    this.props.onBuscarPin(clave)
  }

  handleInputChange(e) {
    const {value, name} = e.target;
    console.log(value, name);
    this.setState({
      [name]: value
    });
  }

  fileSelectedHandler(e){
    this.setState({
      fileSelected : e.target.files[0]
    })
    console.log(this.state.fileSelected)
  }

  handleInformationPin(index){
    this.setState({
        pinFilteredSelected : this.props.pinesFound[index]
    })
  }

  addlike(e){
    const unPin = this.state.pinFilteredSelected;
    this.props.onLikearPin(unPin)
  }

  render() {
    return (
        <div className="App">
            <div className="row alert alert-dark">
                <div className="col-2 d-flex flex-row justify-content-center align-items-center border">
                    
                    <form onSubmit={this.handleSearch.bind(this)} className="form">
                        <div className="form-group form-check">
                            <h4><span className="badge badge-pill badge-info">Buscar</span></h4>
                        </div>
                        <div className="form-group form-check">
                            <input type="text" name="buscar" id="buscar" className="form-control" placeholder="Tag..."
                                   value={this.state.buscar} ref="inputBuscar" onChange={this.handleInputChange.bind(this)} />
                        </div>
                        <div className="form-group form-check">
                            <button type="submit" className="btn btn-primary bg-info">Aceptar</button>
                        </div>
                    </form>
                </div>
                <div className="col-8 border">
                    <ul className="Menu">
                        {
                            this.props.pinesFound.map((pin, i) => 
                                <li key={i} onClick={this.handleInformationPin.bind(this,i)}>
                                    
                                    <div className="card border-success mb-3">
                                        <div className="card-header bg-transparent border-success">
                                            <div className="Container">
                                                <img src={pin.ruta} className="img-fluid" alt=""></img>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            )
                        }
                    </ul>
                </div>
                <div className="col-2 border">
                    <div className="card border-success mb-3">
                        <div className="card-header bg-transparent border-success">
                            <img src={this.state.pinFilteredSelected.ruta} className="img-fluid" alt=""></img>
                        </div>
                        <div className="card-body text-success">
                            <form className="form-row">
                                <div className="col">
                                    <p className="card-text">{this.state.pinFilteredSelected.name}</p>
                                </div>
                                <div className="col">
                                    <p className="card-text">{this.state.pinFilteredSelected.descripcion}</p>
                                </div>
                            </form> 
                        </div>
                        <div className="card-footer text-success">
                            <button type="submit" onClick={this.addlike.bind(this)} className="btn btn-primary bg-info">Puntuar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
};

export default FormPinesFilter;