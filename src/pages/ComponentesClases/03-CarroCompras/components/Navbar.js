import { Component } from 'react';
import Carro from './Carro';
import Logo from './Logo';

const style = {
  navbar: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'top',
    height: '20px',
    minHeight: '450px',
    justifyContent: 'space-between',
    position: 'relative',
    padding: '10px 50px',
    boxShadow: '0 2px 3px rgb(0,0,0,0.1)'
  }
}

class Navbar extends Component {
  render() {
    const { carro, esCarroVisible, mostrarCarro } = this.props;
    return (
      <nav style={style.navbar}>
        <Logo />
        <Carro
          carro={carro}
          esCarroVisible={esCarroVisible}
          mostrarCarro={mostrarCarro}
        />
      </nav>
    )
  }
}

export default Navbar
