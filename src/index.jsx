import React from 'react'
import ReactDOM from 'react-dom'

// importamos el componente LikesComponent
import Like from './components/Like'

class Main extends React.Component {
    // implementar render que es el encargado de regresar una estructura de JSX
  render () {
        // sólo debe regresar UN elemento, así que podemos tener UN elemento único como contenedor

        // <LikeComponent /> Es el componente que importamos, y lo usamos como una etiqueta...
        // ? Cómo se ponen comentarios en el return?
    return (
      <div>
                HOLA MUNDO
                <Like />
      </div>
    )
  }
}

ReactDOM.render(<Main />, document.getElementById('app'))
