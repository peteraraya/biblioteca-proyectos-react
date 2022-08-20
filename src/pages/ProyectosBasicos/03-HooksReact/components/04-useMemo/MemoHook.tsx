import { useState, useMemo } from 'react';
import { useCounter } from '../../../../../hooks';

import { procesoPesado } from '../../helpers/procesoPesado';

export const MemoHook = () => {


    const { counter, increment } = useCounter(5000);

    // Ahora haremos un caso donde no deba llamarse
    const [show, setShow] = useState(true);


    // useMemo : tenemos una callback y unas depedencias

    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);

    // la dependencia me dice cuando deo volver a memorizar el resultado de esa función o de ese callback en general

    return (
        <div>
            <h4>MemoHook</h4>
            <h5>Counter : <small>{counter}</small> </h5>
            <hr />

            <p> {memoProcesoPesado}</p>

            <button
                className="btn btn-primary"
                onClick={() =>increment()}
            >
                + 1
            </button>

            <button
                className="btn  btn-outline-primary ml-3"
                onClick={() => {
                    setShow(!show);
                }}
            >
                show/Hide {JSON.stringify(show)}

            </button>
        </div>
    )
}




// Hay que decirle a react memoriza un valor si los argumentos son iguales
// pero si cambian si hay que reprocesarlos
// para este problema podemos utilizar el useMemo