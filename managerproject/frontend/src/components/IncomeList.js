import React, { Component } from "react";
import { Table } from "reactstrap";
import NewIncomeModal from "./newIncomeModal";

import ConfirmRemovalModal from "./ConfirmRemovalModal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWallet } from '@fortawesome/free-solid-svg-icons'


class IncomeList extends Component {
  render() {
    const incomes = this.props.incomes;
    const categories=this.props.categories;
    console.log(categories)
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
                <b> No incomes yet</b>
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
                  <NewIncomeModal
                    create={false}
                    income={income}
                    categories={this.props.categories}
                    resetState={this.props.resetState}
                  />
                  &nbsp;&nbsp;
                  <ConfirmRemovalModal
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

export default IncomeList;