

import { Component } from 'react';
import Button from '../components/Button';

export class EjemploConsola extends Component {

  // estado
  state = {
    valor: 3
  };
  // el metodo más importante render()- siempre debe estar - devuelve contenido jsx
  render() {
    console.log(this.state);
    return (
      <div className="mt-3">
        <p>Ejemplo de Clases </p>
        {
          this.state.valor === 3
            ? < Button chanchito="feliz" />
            : null
        }
        <button
          className={`${this.state.valor}`}
          onClick={() => this.setState({ valor: 2 })}>
          Enviar App
        </button>
      </div>
    )
  }

}

export default EjemploConsola;
