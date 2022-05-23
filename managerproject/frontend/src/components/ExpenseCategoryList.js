import React, { Component } from "react";
import { Table } from "reactstrap";
import NewExpenseCategoryModal from "./NewExpenseCategoryModal";

// import ConfirmRemovalModal from "./ConfirmRemovalModal";

class ExpenseCategoryList extends Component {
  render() {
    const expensecategories = this.props.expensecategories;
    return (
      <Table dark>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            
            
            <th></th>
          </tr>
        </thead>
        <tbody>
          {!expensecategories || expensecategories.length <= 0 ? (
            <tr>
              <td colSpan="6" align="center">
                <b> No categories here</b>
              </td>
            </tr>
          ) : (
            expensecategories.map(cat => (
              <tr key={cat.pk}>
                <td>{cat.name}</td>
                <td>{cat.description}</td>
                
                
                 <td align="center">
                  <NewExpenseCategoryModal
                    create={false}
                    category={cat}
                    resetState={this.props.resetState}
                  />
                  &nbsp;&nbsp;
                  {/* <ConfirmRemovalModal
                    pk={cat.pk}
                    resetState={this.props.resetState}
                  /> */}
                </td> 
              </tr>
            ))
          )}
        </tbody>
      </Table>
    );
  }
}

export default ExpenseCategoryList;