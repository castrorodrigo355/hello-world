import React, { Component } from 'react';
import '../App.css';
import './animation.css';

class PinList extends Component {
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
                this.props.pines.map((pin, i) => 
                  <li key={i}>
                    <div className="card border-success mb-3">
                      <div className="card-header bg-transparent border-success">
                        <div className="Container">
                        <img src={pin.ruta} className="img-fluid" alt="Responsive image"></img>
                        <h6>{pin.puntaje}</h6>
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

export default PinList;