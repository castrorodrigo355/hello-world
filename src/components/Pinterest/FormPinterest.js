import React, { Component } from 'react';
import '../App.css';

class Formagregar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: '', 
      descripcion: '',
      fileSelected: null
    }

  }
  handleSubmitPin(e) {
    e.preventDefault();
    const nuevoPin = {
      name : this.state.nombre,
      description : this.state.descripcion
    }
    this.setState({
        nombre: '',
        descripcion: ''
    });
    this.refs.inputNombre.focus();
    this.props.onAgregarPin(nuevoPin)
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

  render() {
    return (
      <div className="App">
        <div className="card alert alert-primary">
          <h4 className="card-header">
            <div className="row">
              <div className="col-1">
                <span className="badge badge-pill badge-info">Nuevo Pin</span>
              </div>
              <div className="col-11">
                <form onSubmit={this.handleSubmitPin.bind(this)} className="form-row">
                  <div className="col">
                      <input type="text" name="nombre" className="form-control" placeholder="Nombre..."
                                  value={this.state.nombre}
                                  ref="inputNombre"
                                  onChange={this.handleInputChange.bind(this)} />
                  </div>
                  <div className="col">
                      <input type="text" name="descripcion" className="form-control" placeholder="Descripcion..."
                                  value={this.state.descripcion}
                                  ref="inputDni"
                                  onChange={this.handleInputChange.bind(this)} />
                  </div>
                  <div className="col">
                      <input type="file" onChange={this.fileSelectedHandler.bind(this)} />
                  </div>
                  <button type="submit" className="btn btn-primary bg-info">Guardar</button>
              </form>
              </div>
            </div>
          </h4>
        </div>
      </div>
    );
  }
};

export default Formagregar;