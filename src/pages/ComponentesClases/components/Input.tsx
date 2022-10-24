import { Component } from "react";

interface IMyProps {
  nombre: string,
  apellido: string,
}



class Input extends Component<IMyProps> {



  render() {
    return (
      <input
        //@ts-ignore
        value={this.props.value}
        //@ts-ignore
        onChange={this.props.onChange}
      />
    )
  }
}

export default Input;