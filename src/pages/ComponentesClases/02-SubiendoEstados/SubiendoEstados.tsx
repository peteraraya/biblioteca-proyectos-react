import { Component } from 'react';
import Input from '../components/Input';

export class SubiendoEstados extends Component {
  // state 
  state = {
    nombre: '',
    apellido: '',
  }

  // propiedad que le asignamos una arrow fuction - en caso de usar funcion normal provocaria un cambio de contexto de this
  updateValues = (prop: string, value: any) => {
    this.setState({ [prop]: value })
  }

  render() {
    return (
      <p>
        Nombre Completo : {`${this.state.nombre} ${this.state.apellido}`}
        <br />
        <Input
          //@ts-ignore
          value={this.state.nombre}
          onChange={(e: { target: { value: any; }; }) => this.updateValues('nombre', e.target.value)}
        />
        <Input
          //@ts-ignore
          value={this.state.apellido}
          onChange={(e: { target: { value: any; }; }) => this.updateValues('apellido', e.target.value)}
        />
      </p>
    )
  }
}

export default SubiendoEstados;

