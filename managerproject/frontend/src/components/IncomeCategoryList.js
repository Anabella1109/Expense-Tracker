import React, { Component } from "react";
import { Table } from "reactstrap";
import NewIncomeCategoryModal from "./NewIncomeCategoryModal";

import ConfirmRemovalModal from "./ConfirmRemovalModal";

class IncomeCategoryList extends Component {
  render() {
    const categories = this.props.categories;
    console.log(categories)
    return (
      <Table dark>
        <thead>
          <tr>
            <th>Name</th>
            <th>Descrption</th>
            
            
            <th></th>
          </tr>
        </thead>
        <tbody>
          {!categories || categories.length <= 0 ? (
            <tr>
              <td colSpan="6" align="center">
                <b> No categories here</b>
              </td>
            </tr>
          ) : (
            categories.map(cat => (
              <tr key={cat.pk}>
                <td>{cat.pk}</td>
                <td>{cat.name}</td>
                <td>{cat.description}</td>
                
                
                 <td align="center">
                  <NewIncomeCategoryModal
                    create={false}
                    category={cat}
                    resetState={this.props.resetState}
                  />
                  &nbsp;&nbsp;
                  <ConfirmRemovalModal
                    pk={cat.pk}
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

export default IncomeCategoryList;