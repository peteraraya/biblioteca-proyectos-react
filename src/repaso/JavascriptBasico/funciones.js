// Funciones de flecha en js

const saludar = ( nombre ) => {

  return  `Hola ${nombre}`

}
const saludar2 = ( nombre ) =>  `Hola ${nombre}`;

const saludar3 = ( nombre ) =>   `Hola`


console.log(saludar('peter'));
console.log(saludar2('peter 2'));
console.log(saludar3());



const getUser = () => {
  return {
    uid: 'ABC123',
    username: 'EL_ASDF1234'
  }
};

const getUser2 = () => ({
    uid: 'ABC123',
    username: 'EL_ASDF1234'
});


const user = getUser();
const user2 = getUser2();

console.log(user);
console.log(user2);

const getUsuarioActivo = (nombre) =>({
  uid: 'ABC123',
  username: nombre
})

const usuarioActivo = getUsuarioActivo('Peter');
console.log(usuarioActivo);