import { useState } from 'react';

export const useCounter = (initialState = 10) => {

    const [state, setState] = useState(initialState);

    const increment = ( factor = 1) => {
        setState(state + factor);
    }

    const decrement = ( factor = 1) => {
        setState(state - factor);
    }

    const reset = () => {
        setState(initialState);
    }

    // exportando
    return {
        state,
        increment,
        decrement,
        reset,
    }




}




/**
 * InitialState : si no me mandan nada tendremos este valor
 * Este custom hook está extrayendo la logica de mi contador
 * El orden en la destructuraci´´on no importa
 *
*/