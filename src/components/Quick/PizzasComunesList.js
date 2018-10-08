import React, { Component } from 'react';
import '../App.css';
class PizzasComunesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
        pizzasComunes : [ {id: 0, descripcion : "Muzzarella", preGrande : "200", preChica : "170", flag : false}, 
                            {id: 1, descripcion : "Fugazzeta", preGrande : "190", preChica : "160", flag : false}, 
                            {id: 2, descripcion : "Napolitana", preGrande : "240", preChica : "210", flag : false},
                            {id: 3, descripcion : "Jamon", preGrande : "180", preChica : "150", flag : false},
                            {id: 4, descripcion : "Provoleta", preGrande : "250", preChica : "220", flag : false},
                            {id: 5, descripcion : "Cebolla", preGrande : "280", preChica : "250", flag : false},
                            {id: 6, descripcion : "Pescado", preGrande : "300", preChica : "270", flag : false},
                            {id: 7, descripcion : "Morron", preGrande : "230", preChica : "200", flag : false} ]
    }
  }

  clickRow(index, event){
    const pedPizzaComun = {}
    pedPizzaComun.desc = this.state.pizzasComunes[index].descripcion
    const columna = event.target.id
    if(columna === ""){
        console.log("Seleccione una pizza un tamanio favor")
    }else{
        if(columna === "colPreGrande"){
            pedPizzaComun.nom = "Grande"
            pedPizzaComun.pre = this.state.pizzasComunes[index].preGrande
        }
        
        if(columna === "colPreChica"){
            pedPizzaComun.nom = "Chica"
            pedPizzaComun.pre = this.state.pizzasComunes[index].preChica
        }
        this.props.onAddPedPizza(pedPizzaComun)
    } 
  }

  render() {
    return (
        <table className="table table-hover table-borderless table-sm" style={{width:"20%"}}>
            <thead style={{borderRadius:"50px"}}>
            <tr className="bg-danger text-white">
                <th scope="col"><h4 className="font-italic">PIZZAS</h4></th>
                <th scope="col"><h4 className="font-italic">GRANDE</h4></th>
                <th scope="col"><h4 className="font-italic">CHICA</h4></th>
            </tr>
            </thead>
            {this.state.pizzasComunes.map((unaPizza, i) => {
                return(
                <tbody key={i}>
                    <tr onClick={this.clickRow.bind(this, i)}>
                        <td>{unaPizza.descripcion}</td>
                        <td id="colPreGrande" className="bg-warning">${unaPizza.preGrande}</td>
                        <td id="colPreChica" className="bg-warning">${unaPizza.preChica}</td>
                    </tr>
                </tbody>
                )          
            })
            }
        </table>
    );
  }
};

export default PizzasComunesList;