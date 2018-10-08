import React, { Component } from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import '../App.css';

const birthdayStyle = `.DayPicker-Day--highlighted {
    background-color: orange;
    color: white;
}`;

class Filtrados extends Component {

    constructor(props) {
        super(props);
        this.state = {
            materiaSeleccionada: ''
        };
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e){
        const materia = e.target.value;
        this.setState({
            materiaSeleccionada : materia
        })
        this.props.onFiltrarMateria(materia)
    }

    render() {
        const fechas = this.props.fechasMateriaFiltada.map((unaFecha, i) => {
            return new Date(unaFecha)
        })
        return (
            <div className="App alert alert-danger">
                <div className="row">
                    <div className="col-3 border d-flex justify-content-center align-items-center">
                        <style>{birthdayStyle}</style>
                        <DayPicker selectedDays={fechas}/>
                    </div>
                    <div className="col-9">
                        <div className="row border d-flex justify-content-center align-items-center mb-3"
                             style={{height:"10%"}}>
                            <select onChange={(e) => this.handleChange(e)}>
                                <option>Algoritmos</option>
                                <option>Algebra</option>
                                <option>Paradigmas</option>
                            </select>
                            {this.state.materiaSeleccionada}
                        </div>
                        <div className="row border" style={{height:"70%"}}>
                            <ul className="Menu">
                                {
                                    this.props.fechasMateriaFiltada.map((unaClase, i) => 
                                    <li key={i}>
                                        <div className="card border-success mb-3">
                                            <div className="card-body text-success">
                                                <div className="row">
                                                    <div className="col">
                                                        <p className="card-text">
                                                            {unaClase}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    )
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div> 
        )
    }
};

export default Filtrados;