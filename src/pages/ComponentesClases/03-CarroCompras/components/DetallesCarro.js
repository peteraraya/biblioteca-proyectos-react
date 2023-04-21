import { Component } from 'react';

const styles = {
  detallesCarro: {
    backgroundColor: '#fff',
    position: 'absolute',
    marginTop: 30,
    boxShadow: '1px 5px 5px rgb(0,0,0,0.3)',
    borderRadius: '5px',
    width: '300px',
    right: 50

  },
  ul: {
    margin: 0,
    padding: 0,
  },
  producto: {
    listStyleType: 'none',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '25px 20px',
    borderBottom: 'solid 0.8px #aaa',
    color: '#0A283E',
  },
  imagenProducto: {},
}

export class DetallesCarro extends Component {
  render() {
    const { carro } = this.props;
    console.log(carro)
    return (
      <div style={styles.detallesCarro}>
        <ul style={styles.ul}>
          {
            carro.map
            ( x =>
              <li style={styles.producto} key={x.name}>
                <img style={styles.imagenProducto} src={x.img} alt={x.name} width='50' height='35' />
                {x.name}
                <strong> ({x.cantidad})</strong>
              </li>
            )
          }
         </ul>
      </div>
    )
  }
}

export default DetallesCarro

// rce 