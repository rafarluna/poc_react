import React from 'react';
import ReactDOM from 'react-dom';

class Main extends React.Component{
    //implementar render que es el encargado de regresar una estructura de JSX
    render(){
        //sólo debe regresar UN elemento, así que podemos tener UN elemento único como contenedor
        return (
            <div>
                HOLA MUNDO
            </div>
        );
    }
}

ReactDOM.render(<Main/>, document.getElementById('app'));