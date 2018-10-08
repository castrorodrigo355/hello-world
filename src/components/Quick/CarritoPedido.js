import React, { Component } from 'react';
import '../App.css';
class EmpanadasList extends Component {
  constructor(props) {
    super(props);
    this.state = {
        
    }
  }

  eliminarItemPedido(index){
    this.props.onEliminarItemPedido(index);
  }
  
  render() {
    const sumatoria = this.props.listaDePedidos.reduce((total, unPedido) => 
                              total + parseInt(unPedido.pre) * unPedido.cant, 0);
    return (
        <div className="row d-flex justify-content-center align-items-center border">
          <div className="col-9">
            <ul className="Menu">
                {
                  this.props.listaDePedidos.map((unPedido, i) => 
                    <li key={i}>
                      <div className="card border-success mb-3">
                        <div className="card-header bg-transparent border-success">
                          {unPedido.nom} - {unPedido.desc}
                        </div>
                        <div className="card-body">
                          <div className="row">
                            Unidad $: {unPedido.pre}
                          </div>
                          <div className="row">
                            Cantidad: {unPedido.cant}
                          </div>
                          <div className="row">
                            Parcial $: {unPedido.pre * unPedido.cant}
                          </div>
                        </div>
                        <div className="card-footer bg-transparent border-success">
                        <h6><button className = "badge badge-pill btn btn-danger" onClick={this.eliminarItemPedido.bind(this, i)}>Delete</button></h6>
                        </div>
                      </div>
                    </li>
                  )
                }
            </ul>
          </div>
          <div className="col-3">
            <div className="card border-success mb-3">
              <div className="card-header bg-transparent border-success">
                PIZZERIA QUICK
              </div>
              <div className="card-body text-success">
                PRECIO FINAL: $ {sumatoria}
              </div>
              <div className="card-footer bg-transparent border-success">
              <h6><button className = "badge badge-pill btn btn-danger">Enviar</button></h6>
              </div>
            </div>
          </div>
        </div>
    );
  }
};

export default EmpanadasList;