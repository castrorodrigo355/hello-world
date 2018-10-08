import React, { Component } from 'react';
import ListPizzasComunes from './PizzasComunesList';
import ListPizzasEspeciales from './PizzasEspecialesList';
import ListFaina from './FainaList';
import ListEmpanadas from './EmpanadasList';
import PedidoCarrito from './CarritoPedido';
import './Quick.css';

class Quick extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rutaPizza : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt-4mZM8JUcx5dGvnRbHmfYceluXbj2kYOSu9zTpflpw3qQFIO",
      pedidoList : []
    }
  }

  handleAddPed(unPedido){
    let indice = -1;
    const pedidos = this.state.pedidoList;
    for(var i = 0; i < pedidos.length; i++){
      if(pedidos[i].nom === unPedido.nom && pedidos[i].desc === unPedido.desc){
        indice = i;
      }
    }
    if(indice === -1){
      unPedido.cant = 1;
      this.setState((prevsState) => ({
        pedidoList : [...prevsState.pedidoList, unPedido]
      }))
    } else {
      var pedidoActual = pedidos[indice];
      pedidoActual.cant = pedidoActual.cant + 1;
      pedidos[indice] = pedidoActual
      this.setState({
        pedidoList : pedidos
      })
    }
    /**
    this.setState((prevsState) => ({
      pedidoList : [...prevsState.pedidoList, unPedido]
    })
     */
  }

  handleEliminarItemPedido(index){
    this.setState({
      pedidoList: this.state.pedidoList.filter((pedido, i) => {
        return i !== index
      })
    })
  };

  render() {
    return (
      <div className="Quick alert alert-success">
          <div className="row border">
            <div className="col-4 d-flex justify-content-center align-items-center">
                <ListPizzasComunes onAddPedPizza = {this.handleAddPed.bind(this)}/>
            </div>
            <div className="col-4">
              <div className="row justify-content-center align-items-center border">
                <ListPizzasEspeciales onAddPedPizza = {this.handleAddPed.bind(this)}/>
              </div>
              <div className="row justify-content-center align-items-center border">
                <ListFaina onAddPedFaina = {this.handleAddPed.bind(this)}/>
              </div>
            </div>
            <div className="col-4 d-flex justify-content-center align-items-center">
                <ListEmpanadas onAddPedEmpanadas = {this.handleAddPed.bind(this)}/>
            </div>
          </div>

          <PedidoCarrito listaDePedidos = {this.state.pedidoList}
                         onEliminarItemPedido = {this.handleEliminarItemPedido.bind(this)}/>

      </div>
    );
  }
};

export default Quick;