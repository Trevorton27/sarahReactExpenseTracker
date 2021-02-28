import React, { Component } from 'react';

class DeleteButton extends Component {
  render() {
    return (
      <button
        ref={this.props.btnRef}
        className='btn btn-danger'
        onClick={this.props.onClick}
      >
        x
      </button>
    );
  }
}

export default DeleteButton;
