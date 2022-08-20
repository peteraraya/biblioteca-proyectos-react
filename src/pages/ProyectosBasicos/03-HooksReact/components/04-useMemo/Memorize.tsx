import { useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { Small } from './Small';


export const Memorize = () => {


    const { counter, increment } = useCounter(10);

    // Ahora haremos un caso donde no deba llamarse
    const [show, setShow] = useState(true);

    return (
        <div>
            <h4>Memorize <Small value={counter} /></h4>
            <hr />


            <button
                className="btn btn-primary"
                onClick={()=>  increment()}
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

// React : funciona así nota que hay un cambio enb el state y vuelve a dibujar nuestro componente

// Como podemos prevenir que un componente se vuelva a renderizar si sus property son las mismas ---- > entra Memo

// extraer Memo

