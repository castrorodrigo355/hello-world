import React, { Component } from 'react';
import '../App.css';
class FainaList extends Component {
  constructor(props) {
    super(props);
    this.state = {
        faina : [ {id: 0, descripcion : "Porcion", precio : "25"},
                {id: 1, descripcion : "Entera", precio : "70"}]
    }
  }
  clickRow(index){
    // console.log(this.state.pizzasComunes[index].descripcion)
    const pedFaina = {desc: this.state.faina[index].descripcion,
                    nom : "Faina",
                    pre: this.state.faina[index].precio}
    this.props.onAddPedFaina(pedFaina)
  }
  render() {
    return (
        <table className="table table-hover table-borderless table-sm" style={{width:"20%"}}>
            <thead style={{borderRadius:"50px"}}>
                <tr className="bg-danger text-white">
                <th scope="col"><h4 className="font-italic">FAINA</h4></th>
                <th scope="col"><h4 className="font-italic">PRECIO</h4></th>
                </tr>
            </thead>
            {this.state.faina.map((unaFaina, i) => {
                return(
                    <tbody key={i}>
                        <tr onClick={this.clickRow.bind(this, i)}>
                            <td>{unaFaina.descripcion}</td>
                            <td className="bg-warning">${unaFaina.precio}</td>
                        </tr>
                    </tbody>
                )          
                })
            }
        </table>
    );
  }
};

export default FainaList;