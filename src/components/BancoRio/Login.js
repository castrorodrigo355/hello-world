import React, {Component} from 'react';
import '../App.css';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email : '',
            dni: ''
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const usuario = {
            email : this.state.email,
            dni : this.state.dni
        }
        this.setState({
            email : '',
            dni: ''
        });
        this.props.onLoginUsuario(usuario)
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
                        <h4><span className="badge badge-pill badge-info">Login</span></h4>
                    </div>
                    <div className="form-group">
                        <input type="text" name="email" className="form-control" placeholder="Email" 
                                value={this.state.email} onChange={this.handleInputChange.bind(this)}/>
                    </div>
                    <div className="form-group">
                        <input type="text" name="dni" className="form-control" placeholder="Dni" 
                                value={this.state.dni} onChange={this.handleInputChange.bind(this)}/>
                    </div>
                    <div className="form-group form-check">
                        <button type="submit" className="btn btn-primary bg-info">Aceptar</button>
                    </div>
                </form>
            </div> 
        )};    
}
export default Login;