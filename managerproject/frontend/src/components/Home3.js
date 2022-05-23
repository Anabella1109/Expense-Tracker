import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import ExpenseList from "./ExpenseList";
import NewExpenseModal from "./NewExpenseModal";


import axios from "axios";

import { API_URL3 } from "../constants";

class HomeExpense extends Component {
  state = {
    incomes: []
  };

  componentDidMount() {
    this.resetState();
  }

  getIncomes = () => {
    axios.get(API_URL3).then(res => this.setState({ incomes: res.data }));
  };

  resetState = () => {
    this.getIncomes();
  };

  render() {
    return (
      <Container style={{ marginTop: "20px" }}>
        <Row>
          <Col>
            <ExpenseList
              incomes={this.state.incomes}
              resetState={this.resetState}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <NewExpenseModal create={true} resetState={this.resetState} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default HomeExpense;