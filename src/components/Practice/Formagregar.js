import React, { Component } from 'react';
import '../App.css';

class Formagregar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: '', 
      dni: '', 
      curso : '',
    }

  }
  handleSubmit(e) {
    e.preventDefault();
    const alumno = {
      name : this.state.nombre,
      number : this.state.dni,
      course : this.state.curso,
      flag : false
    }
    this.setState({
        nombre: '',
        dni: '',
        curso : ''
    });
    this.refs.inputNombre.focus();
    this.props.onAgregarAlumno(alumno)
  }

  handleInputChange(e) {
    const {value, name} = e.target;
    // console.log(value, name);
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div className="App">
        <div className="card alert alert-danger">
          <h4 className="card-header">
            <div className="row">
              <div className="col-1">
                <span className="badge badge-pill badge-info">Formulario</span>
              </div>
              <div className="col-11">
                <form onSubmit={this.handleSubmit.bind(this)} className="form-row">
                  <div className="col">
                      <input type="text" name="nombre" className="form-control" placeholder="Nombre..."
                                  value={this.state.nombre}
                                  ref="inputNombre"
                                  onChange={this.handleInputChange.bind(this)} />
                  </div>
                  <div className="col">
                      <input type="text" name="dni" className="form-control" placeholder="Dni..."
                                  value={this.state.dni}
                                  ref="inputDni"
                                  onChange={this.handleInputChange.bind(this)} />
                  </div>
                  <div className="col">
                      <input type="text" name="curso" className="form-control" placeholder="Curso..."
                                  value={this.state.curso}
                                  ref="inputCurso"
                                  onChange={this.handleInputChange.bind(this)} />
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