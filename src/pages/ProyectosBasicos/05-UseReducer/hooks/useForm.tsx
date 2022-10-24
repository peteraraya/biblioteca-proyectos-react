import { useState } from "react";

export const useForm = ( initialState = {}) => {

    // menejar el estado de nuestro formulario
    const [values, setValues] = useState(initialState);
    

    // Limpieza de input
    const reset = () => {
        setValues(initialState);
    }


    const handleInputChange = ({ target }:any) => {
        setValues({
            ...values,
            [target.name]: target.value
        });
    }


    return [ values, handleInputChange, reset ];
}



// declaro inisitalState como  {} : para evitar errores

