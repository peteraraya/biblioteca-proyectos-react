import { Component } from 'react';

const styles = {
  // contenido centrado
  layout: {
    backgroundColor: '#fff',
    color: '#0A283E',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
  // contenido de izquierda a derecha
  container: {
    width: '900px',
  }

}

class Layout extends Component {
  render() {
    return (
      <div style={styles.layout}>
        <div style={styles.container}>
          {this.props.children}
          
        </div>
      </div>
    )
  }

}
export default  Layout;

