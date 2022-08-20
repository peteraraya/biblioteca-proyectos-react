import { useState } from 'react';

export const useForm = <T>(initialState: T) => {

    // menejar el estado de nuestro formulario
    const [values, setValues] = useState(initialState);
    

    // Limpieza de input
    const reset = () => {
        setValues(initialState);
    }


    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues(prev => ({
            ...prev,
            [event.target.name]: event.target.value,
        }));
    }


    return [ values, handleInputChange, reset ];
}



// declaro inisitalState como  {} : para evitar errores

