import React, { Component } from 'react';
import '../App.css';

class Materias extends Component {

    render() {
        return (
            <div className="App alert alert-secondary">
                <ul className="Menu">
                    {
                        this.props.misMaterias.map((unaMateria, i) => 
                        <li key={i}>
                            <div className="card border-success mb-3">
                                <div className="card-header bg-transparent border-success">
                                    <p className="card-text">{unaMateria.nombreMateria}</p>
                                </div>
                                <ul>
                                    {
                                        unaMateria.clasesProgramadas.map((unaClase, j) => 
                                            <li key={j}>
                                                <p> {unaClase} </p>
                                            </li>
                                        )
                                    }
                                </ul>
                            </div>
                        </li>
                        )
                    }
                </ul>
            </div> 
        )
    }
};

export default Materias;