import React, { Component } from 'react';
import Calendar from 'react-calendar'
import Modal from 'react-modal';
import '../App.css';

const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
    }
};

class Calendario extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 'coconut',
            fecha: '',
            hora: '',
            clase: '',
            materiaSeleccionada: '',
            isActive: false,
            listaDeFechas : [] // CALENDARIO crea su propia lista y materia seleccionada... Los envia a Cursos.js
        };
        this.handleChange = this.handleChange.bind(this)
        this.crearCurso = this.crearCurso.bind(this)
    }

    crearCurso(){
        const unaMateria = this.state.materiaSeleccionada;
        const unCurso = this.state.listaDeFechas;
        this.props.onCrearCurso(unaMateria, unCurso);
        this.setState({
            fecha: '',
            hora: '',
            clase: '',
            listaDeFechas: [],
            materiaSeleccionada: ""
        })
    }

    handleInputChange(e) {
        const {value, name} = e.target;
        // console.log(value, name);
        this.setState({
            [name]: value
        });
    }

    componentWillMount(){
        Modal.setAppElement("body")
    }

    toogleModal = () => {
        this.setState({ isActive: !this.state.isActive 
        })
    }

    almanecarFecha(unaFecha) {
        
        const day = unaFecha.getDate(); 
        const month = unaFecha.getMonth() + 1; 
        const year = unaFecha.getFullYear();
        const fecha = year+"-"+month+"-"+day
        this.setState({
            isActive: !this.state.isActive,
            fecha : fecha
        })
    }

    obtenerClase = () => {
        const fecha = this.state.fecha;
        //const horario = this.state.hora;
        const claseConfirmada = fecha//+ " - " +horario
        this.setState((prevsState) => ({
            isActive: !this.state.isActive,
            listaDeFechas : [...prevsState.listaDeFechas, claseConfirmada]
        }))
    }

    handleChange(e){
        const materia = e.target.value;
        this.setState({
            materiaSeleccionada : materia
        })
    }
  
    render() {
        return (
            <div>
                <div className="row alert alert-primary">
                    <div className="col-3 border d-flex justify-content-center align-items-center">
                        <Calendar onClickDay={(unaFecha) => this.almanecarFecha(unaFecha)}/>
                        <Modal  isOpen={this.state.isActive} onRequestClose={this.toogleModal} style={customStyles}
                                fechaElegida={this.state.fechaSeleccionada}> {this.state.fechaSeleccionada}
                                <input type="text" name="hora" className="form-control"
                                value={this.state.hora} onChange={this.handleInputChange.bind(this)}/>
                                <button onClick={this.obtenerClase}>Hide Modal</button>
                        </Modal>
                    </div>
                    <div className="col-9">
                        <div className="row border d-flex justify-content-center align-items-center mb-3"
                             style={{height:"10%"}}>
                            <select defaultValue={this.state.value} onChange={(e) => this.handleChange(e)}>
                                <option>Algoritmos</option>
                                <option>Algebra</option>
                                <option>Paradigmas</option>
                            </select>
                        </div>
                        <div className="row alert alert-info border d-flex justify-content-center align-items-center"
                             style={{height:"70%"}}>
                            <ul className="Menu">
                                {
                                    this.state.listaDeFechas.map((unaClase, i) => 
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
                        <div className="row border d-flex justify-content-center align-items-center"
                             style={{height:"10%"}}>
                            <button type="submit" className="btn btn-primary badge badge-primary" onClick={this.crearCurso}>Crear Curso</button>
                        </div>
                    </div>
                </div>     
            </div>
        );
    }
};

export default Calendario;