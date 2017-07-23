import React from 'react';

class LikeComponent extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            likes: 20
        }

        //Hack para "anclar" la referencia del this.
        this.like = this.like.bind(this);
    }

    //método que se llamará cuando se dé click
    like(){
        //this.setState => Método de react para modificar el estado, de manera que react sea notificado del cambio y se haga el render (cambio en el html)
        this.setState({
            likes: this.state.likes + 1
        });
    }

    //implementar render que es el encargado de regresar una estructura de JSX
    render(){
        //sólo debe regresar UN elemento, así que podemos tener UN elemento único como contenedor

         // onClick={this.like} es una función de tipo callback, entonces como hace referencia a "this" se va a perder la referencia.
        return (
            <div>
                <p>Likes {this.state.likes} </p>
                
                <button onClick={this.like}  > Like me !</button>
            </div>
        )
    }
}

module.exports = LikeComponent;