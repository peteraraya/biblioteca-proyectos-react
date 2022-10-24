import {Component, useEffect } from 'react';
// Custom Hooks
import { useContador } from '../../hooks/useContador';


// Utilizando componente funcional
const Interval = ({ contador }) => {
  useEffect(() => {
    const i = setInterval(() => console.log(contador), 1000);
    return () => {
      clearInterval(i); // nos desuscribimos
    }
    
  }, [contador])
  return (
    <p>Intervalo</p>
  )
}

// Utilizando componente basado en clases 
class IntervalClass extends Component {
  intervalo = '';

  componentDidMount() {
    this.intervalo = setInterval( () => console.log(this.props.contador), 1000 );
  }

  componentWillUnmount() {
    clearInterval( this.intervalo );
  }

  render() {
    return (
      <p>Intervalo</p>
    )
  }
}



// Orientado a funciones
const HookUseEffect = () => {
  const [contador, incrementar] = useContador(0);

  useEffect(() => {
    document.title = contador;
  }, [contador]);

  return (
    <div style={styles.dv}>
      <h1>Ejemplo UseEffect</h1>
      <hr />
      <h5>Contador
        <button type="button" style={styles.button} onClick={incrementar}> + 1</button>
        basado en funciones : <Interval contador={contador} />
        {/* basado en clases :  <IntervalClass contador={contador} /> */}
      </h5>
      <pre>
        resultado :   {contador}
      </pre>
    </div>
  )
}

export default HookUseEffect;


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