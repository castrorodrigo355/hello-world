import React, {Component} from 'react';
import '../App.css';

class AddTransfForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
          emisor: '', 
          receptor: '', 
          monto : ''
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const transferencia = {
          emisor : this.state.emisor,
          receptor : this.state.receptor,
          monto : this.state.monto,
          flag: false
        }
        this.setState({
            emisor: '', 
            receptor: '', 
            monto : ''
        });
        this.props.onAgregarTransferencia(transferencia)
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
                        <h4><span className="badge badge-pill badge-info">Agregar Transferencia</span></h4>
                    </div>
                    <div className="form-group">
                        <input type="text" name="emisor" className="form-control" placeholder="Emisor" 
                                value={this.state.emisor} onChange={this.handleInputChange.bind(this)}/>
                    </div>
                    <div className="form-group">
                        <input type="text" name="receptor" className="form-control" placeholder="Receptor" 
                                value={this.state.receptor} onChange={this.handleInputChange.bind(this)}/>
                    </div>
                    <div className="form-group">
                        <input type="type" name="monto" className="form-control" placeholder="Monto" 
                                value={this.state.monto} onChange={this.handleInputChange.bind(this)}/>
                    </div>
                    <div className="form-group form-check">
                        <button type="submit" className="btn btn-primary bg-info">Aceptar</button>
                    </div>
                </form>
            </div> 
        )
    };    
}
export default AddTransfForm;