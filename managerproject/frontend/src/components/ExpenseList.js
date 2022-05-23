import React, { Component } from "react";
import { Table } from "reactstrap";
import NewExpenseModal from "./NewExpenseModal";

import ConfirmRemovalModal1 from "./ConfirmRemovalModal1";

class ExpenseList extends Component {
  render() {
    const incomes = this.props.incomes;
    // console.log(incomes)
    return (
      <Table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Added</th>
            
            <th></th>
          </tr>
        </thead>
        <tbody>
          {!incomes || incomes.length <= 0 ? (
            <tr>
              <td colSpan="6" align="center">
                <b> No expenses yet</b>
              </td>
            </tr>
          ) : (
            incomes.map(income => (
              <tr key={income.pk}>
                <td>{income.category}</td>
                <td>{income.description}</td>
                <td>{income.amount}</td>
                <td>{income.added}</td>
                
                 <td align="center">
                  <NewExpenseModal
                    create={false}
                    income={income}
                    resetState={this.props.resetState}
                  />
                  &nbsp;&nbsp;
                  <ConfirmRemovalModal1
                    pk={income.pk}
                    resetState={this.props.resetState}
                  />
                </td> 
              </tr>
            ))
          )}
        </tbody>
      </Table>
    );
  }
}

export default ExpenseList;