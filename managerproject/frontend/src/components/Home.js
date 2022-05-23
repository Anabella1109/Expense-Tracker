import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import IncomeList from "./IncomeList";
import NewIncomeModal from "./newIncomeModal";


import axios from "axios";

import { API_URL } from "../constants";

class Home extends Component {
  state = {
    incomes: []
  };

  componentDidMount() {
    this.resetState();
  }

  getIncomes = () => {
    axios.get(API_URL).then(res => this.setState({ incomes: res.data }));
  };

  resetState = () => {
    this.getIncomes();
  };

  render() {
    return (
      <Container style={{ marginTop: "20px" }}>
        <Row>
          <Col>
            <IncomeList
              incomes={this.state.incomes}
              resetState={this.resetState}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <NewIncomeModal create={true} resetState={this.resetState} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;