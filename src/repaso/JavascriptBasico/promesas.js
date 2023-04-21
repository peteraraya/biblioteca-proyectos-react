import { getHeroeById } from "./imp-exp";


const getHeroeByIdAsync = ( id ) => {

    return new Promise( (resolve, reject) => {

        setTimeout( () =>  {
            // Tarea
            // importen el 
            const p1 = getHeroeById( id );
            if ( p1 ) {
                resolve( p1 );
            } else {
                reject( 'No se pudo encontrar el héroe' );
            }
        }, 2000 )
    
    });


}


getHeroeByIdAsync(1)
    .then( console.log )
    .catch( console.warn );