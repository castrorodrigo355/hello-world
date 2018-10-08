import React, { Component } from 'react';
import Formagregar from './Formagregar';
import Inscripcion from './Inscripcion';
import CardList from './CardList';
import '../App.css';

class Practice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mensajeApp : "Abooooout",
      alumnos : [ {name : "Rodrigo", number : "33501904", course : "Fullstack", flag : false}, 
                  {name : "Fernando", number : "55501904", course : "Android", flag : false}, 
                  {name : "Sebastian", number : "11501904", course : "Java", flag : false},
                  {name : "Federico", number : "22501904", course : "Python", flag : false},
                  {name : "Alcides", number : "66501904", course : "VisualBasic", flag : false} ]
    }
  }

  handleAgregarAlumno(unAlumno) {
    // e.preventDefault();
    this.setState((prevsState) => ({
      alumnos : [...prevsState.alumnos, unAlumno]
      })
  )}

  handleInputChange(e) {
    const {value, name} = e.target;
    console.log(value, name);
    this.setState({
      [name]: value
    });
  }

  handleEliminarAlumno(index){
    this.setState({
      alumnos: this.state.alumnos.filter((alumno, i) => {
        return i !== index
      })
    })
  };

  changeEditAlumno(index){
    var alumnos = this.state.alumnos;
    var unAlumno = alumnos[index];
    unAlumno.flag = !unAlumno.flag;
    this.setState({
      alumnos : alumnos
    })
  };

  handleActualizarAlumno(index, unAlumno){
    var misAlumnos = this.state.alumnos;
    misAlumnos[index] = unAlumno;
    this.setState({
      alumnos : misAlumnos
    })
  };

  render() {
    return (
      <div className="App">
          <Formagregar onAgregarAlumno = {this.handleAgregarAlumno.bind(this)}/>
          <Inscripcion inscriptos = {this.state.alumnos}
                       onEliminarAlumno={this.handleEliminarAlumno.bind(this)}
                       onChangeEditAlumno={this.changeEditAlumno.bind(this)}
                       onActualizarAlumno={this.handleActualizarAlumno.bind(this)}/>
          <CardList inscriptos = {this.state.alumnos}
                    onEliminarAlumno={this.handleEliminarAlumno.bind(this)}/>
      </div>
    );
  }
};

export default Practice;