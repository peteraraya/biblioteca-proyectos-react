// Desestructuración
// Asignación Desestructurante
const persona = {
  nombre: 'Tony',
  edad: 45,
  clave: 'Ironman'
};

const useContext = ({ clave, nombre, edad, rango = 'Capitán' }) => {

  // console.log( nombre, edad, rango );
  
  return {
      nombreClave: clave,
      anios: edad,
      latlng: {
          lat: 14.1232,
          lng: -12.3232
      }
  }

}

// eslint-disable-next-line react-hooks/rules-of-hooks
const { nombreClave, anios, latlng: { lat, lng } } = useContext( persona );

console.log(nombreClave, anios);
console.log( lat, lng );