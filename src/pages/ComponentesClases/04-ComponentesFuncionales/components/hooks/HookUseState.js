// import { Component, useState } from 'react';
// Custom Hooks

import { useContador } from "../../hooks/useContador";



const styles = {
  dv: {
    marginLeft: '50px',
    marginTop: '50px',
  },
  button: {
    padding: '10px ',
    margin: '5px',
    backgroundColor: '#A65DF3',
    color: 'white',
    border: 'none',
    borderRadius: '12px 10px',
    cursor: 'pointer',
    fontWeight: 'bold',
    boxShadow: '1px 0px 0px rgb(10, 5, 0, 0.5)',
  }
}

// Comparación de components de clases con components funcionales

// Orientado a clases
// class App extends Component {
//   state = { contador: 0 };
//   incrementar = () => {
//     this.setState({
//       contador: this.state.contador + 1 ,
//     });
//   }
//   render() {
//     return (
//       <div>
//         contador : {this.state.contador},
//         <button type="button" style={styles.button} onClick={this.incrementar}>Incrementar + 1</button>
//       </div>
//     )
//   }
// }

// Orientado a funciones
const  HookUseState= () => {
  const [contador, incrementar] = useContador(0);
  return (
    <div style={styles.dv}>
      <h1>Ejemplo UseState</h1>
      <hr />
      <h5>Contador
        <button type="button" style={styles.button} onClick={incrementar}> + 1</button>
      </h5>
      <pre>
        resultado :   {contador}
      </pre>
    </div>
  )
}

export default HookUseState;


/**
 * Reglas de los hooks
 *  1.  no se llaman en loops, ni condiciones, ni while ni nada entre llaves
 *  2.  siempre se llaman en la nivel más alto del componente
 *
 *  Solo se llaman en dos partes
 *  1 - Custom hooks
 *  2 - Componentes en react
 *
 */