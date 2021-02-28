import React, { Component } from 'react';

class Button extends Component {
  render() {
    return (
      <button
        onClick={this.props.onClick}
        type='submit'
        className=' btn btn-success'
        style={{ marginLeft: '.6em' }}
      >
        {this.props.value}
      </button>
    );
  }
}

export default Button;
