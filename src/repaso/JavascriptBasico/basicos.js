
// Variables
let nombre = "Pedro";
let apellido = "Araya";
const arregloNombres = ["pedro","alfredo","claudia"];

console.log(nombre);
console.log(arregloNombres);
// Template strings
const nombreCompleto = `
${nombre} ${apellido}
${ 1 + 1 }
`;

console.log(nombreCompleto);

// Funciones

function getSaludo(nombre){
return 'Hola '+ nombre
}

console.log(`Este es un texto ${ getSaludo( nombre )} `);

// Objetos Literales
const persona = {
  nombre: 'Pedro',
  apellido: 'Araya',
  edad: 36,
  direccion:{
    calle: 'Calle del Patriarca',
    numero: '1234',
    ciudad: 'Ciudad del Patriarca',
    zip: 31231232,
    lat:234234324,
    lng:324234324,
  }
}

console.log(persona);

// No hacer este tipo de mutaciones
// const persona2 = persona;
// persona2.nombre = 'Alfredo'

const persona2 = {...persona };
persona2.nombre = 'Peter';

console.log(persona2);


// Arreglos

const arreglo = [1,2,3,4];

const arreglo2 = [...arreglo,5];

const arreglo3 = arreglo.map( function(numero){
  return numero * 2;
})




console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);




