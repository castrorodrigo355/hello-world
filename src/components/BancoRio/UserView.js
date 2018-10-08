import React, {Component} from 'react';
import '../App.css';

class UserView extends Component {
   render(){
    return(
        <div className="App">
            <table className="table table-bordered table-striped table-sm shadow-lg p-3 mb-5 bg-white rounded">
            <caption>Transferencias</caption>
            <thead>
                <tr className="alert alert-danger">
                <th scope="col"><h4 className="font-italic">#</h4></th>
                <th scope="col"><h4 className="font-italic">Emisor</h4></th>
                <th scope="col"><h4 className="font-italic">Receptor</h4></th>
                <th scope="col"><h4 className="font-italic">Monto</h4></th>
                <th scope="col"><h4 className="font-italic">Fecha</h4></th>
                <th scope="col"><h4 className="font-italic">Opciones</h4></th>
                </tr>
            </thead>
            
            {this.props.userTables.map((unaTransferencia, i) => {
                return(
                    <tbody className="alert alert-dark" key={i}>
                        {
                        unaTransferencia.flag ?    
                            <tr>
                            <td>{i}</td>
                            <td><input ref = "inputChangeEmail" defaultValue={unaTransferencia.emisor}></input></td>
                            <td><input ref = "inputChangeDni" defaultValue={unaTransferencia.receptor}></input></td>
                            <td><input ref = "inputChangeNombre" defaultValue={unaTransferencia.monto}></input></td>
                            {/* <td><button onClick={this.actualizarUsuario.bind(this, i)}>Actualizar</button>
                                <button onClick={this.changeEditMode.bind(this, i)}>Cancelar</button></td> */}
                            </tr>
                            : 
                            <tr>
                            <td>{i}</td>
                            <td>{unaTransferencia.emisor}</td>
                            <td>{unaTransferencia.receptor}</td>
                            <td>{unaTransferencia.monto}</td>
                            <td>{(new Date(2018, 9, 15)).toString()}</td>
                            {/* <td>
                                <div className="form-row">
                                <div className="col">
                                    <h6><button className = "badge badge-pill badge-info" onClick={this.changeEditMode.bind(this, i)}>Edit</button></h6>
                                </div>
                                <div className="col">
                                    <h6><button className = "badge badge-pill btn btn-danger" onClick={this.eliminarUsuario.bind(this, i)}>Delete</button></h6>
                                </div>
                                </div>  
                            </td> */}
                            </tr>     
                        }        
                    </tbody>
                )          
            })
          }
        </table>
        </div> 
    )};    
}
export default UserView;