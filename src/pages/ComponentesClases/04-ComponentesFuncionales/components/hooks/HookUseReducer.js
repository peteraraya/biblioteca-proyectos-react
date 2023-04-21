import { useReducer, useState } from 'react';

// const state = { contador: 0}
// action = { type: string, payload: 1, string, any}  

const inicial = { contador: 0 };
const reducer = (state, action) => {
  switch (action.type) {
    case 'incrementar':
      return { contador: state.contador + 1 }
    case 'decrementar':
      return { contador: state.contador - 1 }
    case 'set':
      return { contador: action.payload }
    default:
      return state;
  }
}

// Orientado a funciones
const HookUseReducer = () => {
  const [state, dispatch] = useReducer(reducer, inicial);
  const [valor, setValor] = useState(0);
  console.log(state.contador)
  return (
    <div style={styles.dv}>
      <h1>Ejemplo useReducer</h1>
      <hr />
      <h4>Contador {state.contador}</h4>
      <input value={valor} onChange={e => setValor(Number(e.target.value))} />
      <button style={styles.button} type="button" onClick={ () => dispatch({type:'incrementar'}) }>+</button>
      <button style={styles.button} type="button" onClick={ () => dispatch({ type:'decrementar'}) }>-</button>
      <button style={styles.button} type="button" onClick={ () => dispatch({ type:'set', payload:valor}) }>set payload</button>
    </div>
  )
}

export default HookUseReducer;


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