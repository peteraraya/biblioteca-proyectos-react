import { useState } from 'react';

interface PropsState {
    name?: string;
    email?: string;
    password?: string;
}
export const useForm = (initialState: PropsState) => {

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

