import React, {Component} from 'react';
import '../App.css';

class Usuarios extends Component {

    eliminarUsuario(index){
        this.props.onEliminarUsuario(index);
    }
    
    changeEditMode(index){
        this.props.onChangeEditUsuario(index)
    }
    
    actualizarUsuario(index){
        const usuario = {
            email : this.refs.inputChangeEmail.value,
            dni : this.refs.inputChangeDni.value,
            nombre : this.refs.inputChangeNombre.value,
            saldo : this.refs.inputChangeSaldo.value,
            flag : false
        }
        this.props.onActualizarUsuario(index, usuario)
    }

   render(){
    return(
        <div className="App">
        <table className="table table-bordered table-striped table-sm shadow-lg p-3 mb-5 bg-white rounded">
        <caption>Usuarios</caption>
          <thead>
            <tr className="alert alert-danger">
              <th scope="col"><h4 className="font-italic">#</h4></th>
              <th scope="col"><h4 className="font-italic">Email</h4></th>
              <th scope="col"><h4 className="font-italic">Dni</h4></th>
              <th scope="col"><h4 className="font-italic">Nombre</h4></th>
              <th scope="col"><h4 className="font-italic">Saldo</h4></th>
              <th scope="col"><h4 className="font-italic">Opciones</h4></th>
            </tr>
          </thead>
          
          {this.props.usuarios.map((unUsuario, i) => {
              return(
                <tbody className="alert alert-dark" key={i}>
                    {
                      unUsuario.flag ?    
                        <tr>
                          <td>{i}</td>
                          <td><input ref = "inputChangeEmail" defaultValue={unUsuario.email}></input></td>
                          <td><input ref = "inputChangeDni" defaultValue={unUsuario.dni}></input></td>
                          <td><input ref = "inputChangeNombre" defaultValue={unUsuario.nombre}></input></td>
                          <td><input ref = "inputChangeSaldo" defaultValue={unUsuario.saldo}></input></td>
                          <td><button onClick={this.actualizarUsuario.bind(this, i)}>Actualizar</button>
                              <button onClick={this.changeEditMode.bind(this, i)}>Cancelar</button></td>
                        </tr>
                        : 
                        <tr>
                          <td>{i}</td>
                          <td>{unUsuario.email}</td>
                          <td>{unUsuario.dni}</td>
                          <td>{unUsuario.nombre}</td>
                          <td>{unUsuario.saldo}</td>
                          <td>
                            <div className="form-row">
                              <div className="col">
                                <h6><button className = "badge badge-pill badge-info" onClick={this.changeEditMode.bind(this, i)}>Edit</button></h6>
                              </div>
                              <div className="col">
                                <h6><button className = "badge badge-pill btn btn-danger" onClick={this.eliminarUsuario.bind(this, i)}>Delete</button></h6>
                              </div>
                            </div>  
                          </td>
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
export default Usuarios;