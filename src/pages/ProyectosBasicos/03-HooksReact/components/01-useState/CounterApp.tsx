import { useState } from 'react';
import './counter.css';

export const CounterApp = () => {

    const [state, setState] = useState({
        counter1:10,
        counter2:20,
        counter3:333,
        counter4:433,
    });

    // extraigo lo que necesito
    const { counter1, counter2 } = state;

    return (
        <div className="container-md">
            <h4>Counter1 : { counter1 }  </h4>
            <h4>Counter2 : { counter2 }  </h4>
            <button 
                className="btn btn-primary"
                onClick={()=>{
                    setState({
                        // necesito hacer el spread del estado actual 
                        ...state,
                        counter1: counter1 + 1
                    });
                }}
            >
               +1
            </button>
        </div>
    )
}

export default CounterApp


/** 
 * Operador spread ... : se utiliza para crear una copia de todos los estados anteriores y sean pasados al nuevo state
 */