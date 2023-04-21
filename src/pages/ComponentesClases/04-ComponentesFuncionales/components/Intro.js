
// ejemplo función impura
const impura = () => new Date().toLocaleString();
console.log('Esta siempre entrega un valor distinto :', impura)

const MiComponente = ({ miProp }) => {

  return (
    <div>
      Nombre : {miProp}
    </div>
  )
}



const Intro = () => {
  return (
    <MiComponente miProp={`chanchito feliz`} />
  )
}

export default Intro;
