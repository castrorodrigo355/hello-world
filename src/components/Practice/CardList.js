import React, { Component } from 'react';
import '../App.css';
import logo from './logocard.svg';
import './animation.css';

class CardList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing : false
    }
  }

  eliminarAlumno(index){
    this.props.onEliminarAlumno(index);
  }
  
  render() {
    return (
      <div className="App">
        <ul className="Menu">
              {
                this.props.inscriptos.map((alumno, i) => 
                  <li key={i}>
                    <div className="card border-success mb-3">
                      <div className="card-header bg-transparent border-success">
                        <div className="Logo">
                          <img src={logo} alt="logo" />
                        </div>
                      </div>
                      <div className="card-body text-success">
                        <div className="row">
                          <div className="col">
                            <p className="card-text">{alumno.name}</p>
                          </div>
                          <div className="col">
                            <p className="card-text">{alumno.number}</p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col">
                            <p className="card-text">{alumno.course}</p>
                          </div>
                        </div>
                      </div>
                      <div className="card-footer bg-transparent border-success">
                        <div className="form-row">
                                
                                <div className="col">
                                  <h6><button className = "badge badge-pill btn btn-danger" onClick={this.eliminarAlumno.bind(this, i)}>Delete</button></h6>
                                </div>
                              </div> 
                        </div>
                    </div>
                  </li>
                )
              }
        </ul>
      </div>
    );
  }
};

export default CardList;