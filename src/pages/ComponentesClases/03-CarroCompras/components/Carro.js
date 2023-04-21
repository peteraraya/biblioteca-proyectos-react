import { Component } from 'react';
import BubbleAlert from './BubbleAlert';
import DetallesCarro from './DetallesCarro';

const styles = {
  carro: {
    backgroundColor: '#359A2C',
    color: '#FFFFFF',
    border: 'none',
    padding: '15px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  bubble: {
    position: 'relative',
    left: '12px',
    top: '12px',
  }
}

class Carro extends Component {
  render() {
    const { carro, esCarroVisible, mostrarCarro } = this.props;
    const cantidad = carro.reduce((acc,el) => acc + el.cantidad, 0 );
    return (
      <div>
        <span style={styles.bubble}>
          {
            cantidad !== 0
            ? <BubbleAlert value={cantidad} />
            : null
          }
        </span>
        <button
          style={styles.carro}
          onClick={mostrarCarro}
        >
          Carro
        </button>
        {esCarroVisible ? <DetallesCarro carro={carro} /> : null}
      </div>
    )
  }
}

export default Carro
