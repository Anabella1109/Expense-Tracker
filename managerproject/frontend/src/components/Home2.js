import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
// import IncomeList from "./IncomeList";
// import NewIncomeModal from "./newIncomeModal";
import ExpenseCategoryList from "./ExpenseCategoryList";
import NewExpenseCategoryModal from "./NewExpenseCategoryModal";

import axios from "axios";

import { API_URL2 } from "../constants";

class HomeExpenseCategory extends Component {
  state = {
    expensecategories: []
  };

  componentDidMount() {
    this.resetState();
  }

  getCategories = () => {
    axios.get(API_URL2).then(res => this.setState({ expensecategories: res.data }));
  };

  resetState = () => {
    this.getCategories();
  };

  render() {
    return (
      <Container style={{ marginTop: "20px" }}>
        <Row>
          <Col>
            {/* <ExpenseCategoryList
              expensecategories={this.state.expensecategories}
              resetState={this.resetState}
            /> */}
          </Col>
        </Row>
        <Row>
          <Col>
            <NewExpenseCategoryModal create={true} resetState={this.resetState} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default HomeExpenseCategory;