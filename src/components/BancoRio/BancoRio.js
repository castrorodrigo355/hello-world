import React, {Component} from 'react';
import Usuarios from './Usuarios';
import Depositos from './Depositos';
import Retiros from './Retiros';
import Transferencias from './Transferencias';
import AddUserForm from './AddUserForm';
import AddTransfForm from './AddTransfForm';
import Login from './Login';
import UserView from './UserView';
import '../App.css';

class BancoRio extends Component {

    constructor(props) {
        super(props);
        this.state = {
            usuarios : [ {nombre : "Rodrigo", dni : "33501904", email : "rodrigo@gmail.com", saldo : 10000, flag: false}, 
                       {nombre : "Fernando", dni : "55501904", email : "fernando@gmail.com", saldo : 10000, flag: false}, 
                       {nombre : "Sebastian", dni : "11501904", email : "sebastian@gmail.com", saldo : 10000, flag: false}, 
                       {nombre : "Federico", dni : "22501904", email : "federico@gmail.com", saldo : 10000, flag: false}, 
                       {nombre : "Alcides", dni : "66501904", email : "alcides@gmail.com", saldo : 10000, flag: false} ],

            transferencias : [ {emisor : "rodrigo@gmail.com", receptor : "fernando@gmail.com", monto : 200, flag: false}, 
                       {emisor : "fernando@gmail.com", receptor : "sebastian@gmail.com", monto : 400, flag: false}, 
                       {emisor : "sebastian@gmail.com", receptor : "federico@gmail.com", monto : 100, flag: false}, 
                       {emisor : "federico@gmail.com", receptor : "alcides@gmail.com", monto : 600, flag: false}, 
                       {emisor : "alcides@gmail.com", receptor : "rodrigo@gmail.com", monto : 500, flag: false} ],
            userLogueado: "",
            userTransferencias : []
        }
    }

    handleAgregarUsuario(unUsuario) {
        this.setState((prevsState) => ({
            usuarios : [...prevsState.usuarios, unUsuario]
        })
    )}

    onAgregarTransferencia(unaTransferencia) {
        const misUsuarios = this.state.usuarios
        const indexEmisor = this.state.usuarios.findIndex(unUsuario => {
            return unUsuario.email === unaTransferencia.emisor
        })
        const indexReceptor = this.state.usuarios.findIndex(unUsuario => {
            return unUsuario.email === unaTransferencia.receptor
        })
        misUsuarios[indexEmisor].saldo = misUsuarios[indexEmisor].saldo - parseInt(unaTransferencia.monto)
        misUsuarios[indexReceptor].saldo = misUsuarios[indexReceptor].saldo + parseInt(unaTransferencia.monto)

        this.setState((prevsState) => ({
            transferencias : [...prevsState.transferencias, unaTransferencia],
            usuarios : misUsuarios
        })
    )}

    handleEliminarUsuario(index){
        this.setState({
            usuarios: this.state.usuarios.filter((unUsuario, i) => {
            return i !== index
          })
        })
      };
    
    changeEditUsuario(index){
        var usuarios = this.state.usuarios;
        var unUsuario = usuarios[index];
        unUsuario.flag = !unUsuario.flag;
        this.setState({
            usuarios : usuarios
        })
    };
    
    handleActualizarUsuario(index, unUsuario){
        var misUsuarios = this.state.usuarios;
        misUsuarios[index] = unUsuario;
        this.setState({
            usuarios : misUsuarios
        })
    };

    handleLoginUsuario(user){
        const index = this.state.usuarios.findIndex(unUsuario => {
            return unUsuario.email === user.email && unUsuario.dni === user.dni
        })
        if(index >= 0){
            const userTransf = this.state.transferencias.filter((unaTransferencia, i) => {
                return unaTransferencia.emisor == user.email
            })
            this.setState({
                userTransferencias : userTransf,
                userLogueado : user
            })
        }
    }

    render(){
        return(
            <div className="App">
                <div className="row" style={{height:"80vh"}}>
                    <div className="col-3 alert alert-primary">
                        <AddUserForm onAgregarUsuario={this.handleAgregarUsuario.bind(this)}/>
                        <AddTransfForm onAgregarTransferencia={this.onAgregarTransferencia.bind(this)}/>
                    </div>
                    <div className="col-9">
                        <Usuarios usuarios={this.state.usuarios}
                                onEliminarUsuario={this.handleEliminarUsuario.bind(this)}
                                onChangeEditUsuario={this.changeEditUsuario.bind(this)}
                                onActualizarUsuario={this.handleActualizarUsuario.bind(this)}/>
                        <Transferencias transferencias={this.state.transferencias}/>
                    </div>
                </div>

                <div className="container alert alert-info fluid"></div>

                <div className="row" style={{height:"80vh"}}>
                    <div className="col-3 alert alert-info">
                        <Login onLoginUsuario={this.handleLoginUsuario.bind(this)}/>
                    </div>
                    <div className="col-9 alert alert-danger">
                        <UserView user={this.state.userLogueado}
                                userTables={this.state.userTransferencias}/>
                    </div>
                </div>
            </div> 
        )
    };    
}
export default BancoRio;