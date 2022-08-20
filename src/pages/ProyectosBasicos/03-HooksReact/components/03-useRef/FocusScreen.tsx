import { useRef } from 'react';

export const FocusScreen = () => {

    const inputRef = useRef<HTMLInputElement | null>(null);
    
    const handleClick = () => {
        // dispara foco al primer input
        // document.querySelector('input').select();
        inputRef.current?.select();
        console.log(inputRef)
    }

    return (
        <>
            <h4>FocusScreen</h4>
            <input
                ref={inputRef}
                className="form-control"
                placeholder="Su nombre"
            />

            <button
                className="btn btn-primary mt-5"
                onClick={handleClick}
            >
                Focus
            </button>
        </>
    )
}


// se recomienda utilizar select
// useRef : nos permite dar una refencia mutable
// podemos cambiar a lo que apunto un ref sin necesidad de disparar una renderización en la parte de react