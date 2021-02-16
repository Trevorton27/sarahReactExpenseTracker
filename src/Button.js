import React, {Component} from "react";

class Button extends Component {
  render () {
    return (
      <button onClick={this.props.onClick} type="submit" className="mt-5 p-2 btn btn-success">{this.props.value}</button>
    )
  }
}

export default Button;