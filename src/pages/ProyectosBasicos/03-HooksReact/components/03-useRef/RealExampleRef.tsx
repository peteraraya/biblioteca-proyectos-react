import { useState } from 'react'
import { MultipleCustomHooks } from '../../../04-Callback/components';

export const RealExampleRef = () => {


    // Crearemos un estado que nos sirva para mostrar y ocultar nuestro customhook
    const [show, setShow] = useState(false);


    return (
        <div>
            <h1>RealExampleRef</h1>
            <hr />

            {show && <MultipleCustomHooks /> }

            <button
                className="btn btn-primary mt-5"
                onClick={ ()=>{
                    setShow( !show );
                }}
            >
                Show/Hide
            </button>
        </div>
    )
}


// Errores comunes , desmontamos componente y luego hacemos el setState

// isMounted : la idea de usar es utilizar este mounted es que mantenga la referencia cuando este está vivo cuando el componente que lo usa sigue montado

// simplemente mantengo la referencia al valor
