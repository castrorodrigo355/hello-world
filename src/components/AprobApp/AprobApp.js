import React, {Component} from 'react';
// import Modal from 'react-modal';
import Calendario from './Calendario';
import Materias from './Materias';
import Filtrados from './Filtrados';
import '../App.css';

class AprobApp extends Component {

    constructor(){
        super()
        this.state = {
            listaDeMaterias : [ // las fechas separadas por guiones arrancan en el mes "1" para enero
                {nombreMateria:"Algoritmos", clasesProgramadas:["2018-10-5","2018-10-6","2018-10-7"]},
                {nombreMateria:"Algebra", clasesProgramadas:["2018-10-10","2018-10-11","2018-10-12"]},
                {nombreMateria:"Paradigmas", clasesProgramadas:["2018-10-21","2018-10-22","2018-10-23"]},
            ],
            subListaFiltrada: []
        }
        this.handleCrearCurso = this.handleCrearCurso.bind(this)
        this.handleFiltrarMateria = this.handleFiltrarMateria.bind(this)
    }

    handleCrearCurso(unaMateria, unaListaDeClases){
        var materias = this.state.listaDeMaterias;
        for(var i = 0; i < materias.length; i++){
            if(materias[i].nombreMateria === unaMateria){
                const nuevaListaSublistaMateria = materias[i].clasesProgramadas.concat(unaListaDeClases)
                const materiaActualizada = {}
                materiaActualizada.nombreMateria = unaMateria;
                materiaActualizada.clasesProgramadas = nuevaListaSublistaMateria
                materias[i] = materiaActualizada
            }
            this.setState({
                listaDeMaterias : materias
            })
        }
    }

    handleFiltrarMateria(unaMateria){
        var materias = this.state.listaDeMaterias;
        for(var i = 0; i < materias.length; i++){
            if(materias[i].nombreMateria === unaMateria){
                const nuevaListaSublistaMateria = materias[i].clasesProgramadas
                this.setState({
                    subListaFiltrada : nuevaListaSublistaMateria
                })
            }
        }
    }

    render(){
        return(
            <div className="App">
                <Calendario onCrearCurso={this.handleCrearCurso}/>
                <Materias misMaterias={this.state.listaDeMaterias}/>
                <Filtrados onFiltrarMateria={this.handleFiltrarMateria}
                           fechasMateriaFiltada={this.state.subListaFiltrada}/>
            </div> 
        )};    
}
export default AprobApp;