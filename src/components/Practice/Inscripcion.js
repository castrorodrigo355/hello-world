import React, { Component } from 'react';
import '../App.css';

class Inscripcion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing : false
    }
  }

  eliminarAlumno(index){
    this.props.onEliminarAlumno(index);
  }

  changeEditMode(index){
    this.props.onChangeEditAlumno(index)
  }

  actualizarAlumno(index){
    const alumno = {
      name : this.refs.inputChangeName.value,
      number : this.refs.inputChangeNumber.value,
      course : this.refs.inputChangeCourse.value,
      flag : false
    }
    this.props.onActualizarAlumno(index, alumno)
  }
  
  render() {
    return (
      <div className="App">
        <table className="table table-bordered table-striped table-sm shadow-lg p-3 mb-5 bg-white rounded">
          <thead>
            <tr className="alert alert-danger">
              <th scope="col"><h4 className="font-italic">#</h4></th>
              <th scope="col"><h4 className="font-italic">Nombre</h4></th>
              <th scope="col"><h4 className="font-italic">Dni</h4></th>
              <th scope="col"><h4 className="font-italic">Curso</h4></th>
              <th scope="col"><h4 className="font-italic">Opciones</h4></th>
            </tr>
          </thead>
          
          {this.props.inscriptos.map((alumno, i) => {
              return(
                <tbody className="alert alert-dark" key={i}>
                    {
                      alumno.flag ?    
                        <tr>
                          <td>{i}</td>
                          <td><input ref = "inputChangeName" defaultValue={alumno.name}></input></td>
                          <td><input ref = "inputChangeNumber" defaultValue={alumno.number}></input></td>
                          <td><input ref = "inputChangeCourse" defaultValue={alumno.course}></input></td>
                          <td><button onClick={this.actualizarAlumno.bind(this, i)}>Actualizar</button>
                              <button onClick={this.changeEditMode.bind(this, i)}>Cancelar</button></td>
                        </tr>
                        : 
                        <tr>
                          <td>{i}</td>
                          <td>{alumno.name}</td>
                          <td>{alumno.number}</td>
                          <td>{alumno.course}</td>
                          <td>
                            <div className="form-row">
                              <div className="col">
                                <h6><button className = "badge badge-pill badge-info" onClick={this.changeEditMode.bind(this, i)}>Edit</button></h6>
                              </div>
                              <div className="col">
                                <h6><button className = "badge badge-pill btn btn-danger" onClick={this.eliminarAlumno.bind(this, i)}>Delete</button></h6>
                              </div>
                            </div>  
                          </td>
                        </tr>     
                    }        
                </tbody>
              )          
            })
          }
        </table>
      </div>
    );
  }
};

export default Inscripcion;