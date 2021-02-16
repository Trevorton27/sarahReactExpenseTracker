import React, {Component} from "react";


class DeleteButton extends Component {
  
  render() {
    return(
      <td>
       <button ref={this.props.btnRef} className="btn btn-danger text-white" onClick={this.props.onClick}>x</button> 
      </td> 
    )
  }
}

export default DeleteButton;