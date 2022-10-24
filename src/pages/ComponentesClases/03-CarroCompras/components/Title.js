import { Component } from 'react';

const styles = {
  title: {
    marginButton: '30px',
    color: '#0A283E',
  }
}


class Title extends Component {
  render() {
    return (
    <h1 style={styles.title}>Tienda</h1>
  )
}
}

export default Title;