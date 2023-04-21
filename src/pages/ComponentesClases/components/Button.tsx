import { Component } from 'react';

interface IMyProps {
  chanchito: string,
}

class Button extends Component<IMyProps> {

  state = {}

  constructor(props: IMyProps | Readonly<IMyProps>) {
    super(props)
    console.log('constructor', props);
    // es una mala practica no recomendada
    // this.state = {
    //   chanchito: props.chanchito,
    // }
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentDidUpdate(prevProps: any, prevState: any) {
    console.log('componentDidUpdate : ', prevProps, ' ', prevState);
  }

  componentWillUnmount() {
    console.log('Desmontando el compoente : ', this.props, '', this.state);
  }


  render() {
    console.log('ejecutando metodo render de button');
    return (
      <button
        onClick={() => this.setState({ prop: 1 })}
      >
        Enviar
      </button>
    )
  }
} 

    export default Button;