import React, {Component} from "react";


class ExpenseTable extends Component {
  render() {
    return(
      <div>
        <table className="table">
          <thead className="bg-success text-white">
            <tr>
            <th>NAME</th>
            <th>DATE</th>
            <th>LOCATION</th>
            <th>AMOUNT</th>
            </tr>
          </thead>
          <tbody className="bg-light">
          {this.props.value}
          </tbody>
        </table>
      </div>
    )
  }
}

export default ExpenseTable;
