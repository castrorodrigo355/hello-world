import React, { Component } from 'react';
import '../App.css';
class EmpanadasList extends Component {
  constructor(props) {
    super(props);
    this.state = {
        empanadas : [ {id: 0, descripcion : "Carne", precio : "30"},
                    {id: 1, descripcion : "Cebolla", precio : "30"},
                    {id: 2, descripcion : "Pollo", precio : "30"},
                    {id: 4, descripcion : "Jamon y Queso", precio : "30"},
                    {id: 5, descripcion : "Humita", precio : "30"},
                    {id: 6, descripcion : "Roquefort", precio : "30"},
                    {id: 7, descripcion : "Verdura", precio : "30"},
                    {id: 8, descripcion : "Capresse", precio : "30"}]
    }
  }
  clickRow(index){
    // console.log(this.state.pizzasComunes[index].descripcion)
    const pedEmpanadas = {desc: this.state.empanadas[index].descripcion,
                        nom : "Empanada",
                        pre: this.state.empanadas[index].precio}
    this.props.onAddPedEmpanadas(pedEmpanadas)
  }
  render() {
    return (
        <table className="table table-hover table-borderless table-sm" style={{width:"20%"}}>
            <thead style={{borderRadius:"50px"}}>
                <tr className="bg-danger text-white">
                <th scope="col"><h4 className="font-italic">EMPANADA</h4></th>
                <th scope="col"><h4 className="font-italic">PRECIO</h4></th>
                </tr>
            </thead>
            {this.state.empanadas.map((unaEmpanada, i) => {
                return(
                    <tbody key={i}>
                        <tr onClick={this.clickRow.bind(this, i)}>
                            <td>{unaEmpanada.descripcion}</td>
                            <td className="bg-warning">${unaEmpanada.precio}</td>
                        </tr>
                    </tbody>
                )          
                })
            }
        </table>
    );
  }
};

export default EmpanadasList;