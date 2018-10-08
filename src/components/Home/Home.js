import React, {Component} from 'react';
import '../App.css';

class Home extends Component {
    render(){
        /*
        - Página de inicio que lista todos los pines de todas las personas
        - Cada pin tiene una serie de tags
        - Podemos acceder al detalle del pin y desde ahí ver sus tags y poder votar
        - En la página de inicio podemos filtrar los pines por tags
        - Existe una página con un formulario para crear los pines
        */
        return(
            <div className="App">
            <h1>Home Page</h1>
            </div> 
        );
    }
}
export default Home;