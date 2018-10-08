import React, { Component } from 'react';
import '../App.css';
class PizzasEspecialesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
        pizzasEspeciales : [ {id: 0, descripcion : "Fugazzeton", preGrande : "200", preChica : "170", flag : false}, 
                          {id: 1, descripcion : "Berenjena", preGrande : "190", preChica : "160", flag : false}, 
                          {id: 2, descripcion : "Rucula", preGrande : "190", preChica : "160", flag : false},
                          {id: 3, descripcion : "Panceta", preGrande : "180", preChica : "150", flag : false}]
    }
  }
  clickRow(index, event){
    const pedPizzaEspecial = {}
    pedPizzaEspecial.desc = this.state.pizzasEspeciales[index].descripcion
    const columna = event.target.id
    if(columna === ""){
        console.log("Seleccione una pizza un tamanio favor")
    }else{
        if(columna === "colPreGrande"){
          pedPizzaEspecial.nom = "Grande"
          pedPizzaEspecial.pre = this.state.pizzasEspeciales[index].preGrande
        }
        
        if(columna === "colPreChica"){
          pedPizzaEspecial.nom = "Chica"
          pedPizzaEspecial.pre = this.state.pizzasEspeciales[index].preChica
        }
        this.props.onAddPedPizza(pedPizzaEspecial)
    }
  }

  render() {
    return (
        <table className="table table-hover table-borderless table-sm" style={{width:"20%"}}>
                    <thead style={{borderRadius:"50px"}}>
                      <tr className="bg-danger text-white">
                        <th scope="col"><h4 className="font-italic">ESPECIALES</h4></th>
                        <th scope="col"><h4 className="font-italic">GRANDE</h4></th>
                        <th scope="col"><h4 className="font-italic">CHICA</h4></th>
                      </tr>
                    </thead>
                    {this.state.pizzasEspeciales.map((unaPizza, i) => {
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

export default PizzasEspecialesList;