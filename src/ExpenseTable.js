import React, {Component} from "react";


class ExpenseTable extends Component {
  render() {
    return(
      <div>
          <thead className="bg-success text-white">
            <tr className={this.props.display}>
            <th>NAME</th>
            <th>DATE</th>
            <th>LOCATION</th>
            <th>AMOUNT</th>
            </tr>
          </thead>
          <tbody className="bg-light">
          {this.props.value}
          </tbody>
      </div>
    )
  }
}

export default ExpenseTable;
