import React, {Component} from "react";

class Input extends Component {
  render() {
      return ( 
      <div className="form-inline">
          <label className="col-sm-2 col-form-label mx-3">{this.props.label}</label>
          <div>
            <input ref={this.props.inputRef} type={this.props.type} placeholder={this.props.placeholder} min={this.props.min} max={this.props.max} value={this.props.value} className="form-control form-control-sm">
            </input>
          </div>
      </div>
      )        
  }
}

export default Input;