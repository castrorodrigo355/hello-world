import React, {Component} from 'react';
import '../App.css';

class AddUserForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
          nombre: '', 
          dni: '', 
          email : ''
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const usuario = {
            nombre : this.state.nombre,
            dni : this.state.dni,
            email : this.state.email,
            saldo: 10000,
            flag: false
        }
        this.setState({
            nombre: '',
            dni: '',
            email : ''
        });
        this.props.onAgregarUsuario(usuario)
    }
    
    handleInputChange(e) {
        const {value, name} = e.target;
        // console.log(value, name);
        this.setState({
          [name]: value
        });
    }

    render(){
        return(
            <div className="App">
                <form onSubmit={this.handleSubmit.bind(this)} className="form border">
                    <div className="form-group form-check">
                        <h4><span className="badge badge-pill badge-info">Agregar Usuario</span></h4>
                    </div>
                    <div className="form-group">
                        <input type="text" name="nombre" className="form-control" placeholder="Nombre" 
                                value={this.state.nombre} onChange={this.handleInputChange.bind(this)}/>
                    </div>
                    <div className="form-group">
                        <input type="text" name="dni" className="form-control" placeholder="Dni" 
                                value={this.state.dni} onChange={this.handleInputChange.bind(this)}/>
                    </div>
                    <div className="form-group">
                        <input type="email" name="email" className="form-control" placeholder="Email" 
                                onChange={this.handleInputChange.bind(this)} value={this.state.email}/>
                    </div>
                    <div className="form-group form-check">
                        <button type="submit" className="btn btn-primary bg-info">Aceptar</button>
                    </div>
                </form>
            </div> 
        )
    };    
}
export default AddUserForm;