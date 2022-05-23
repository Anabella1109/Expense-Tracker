import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
// import IncomeList from "./IncomeList";
// import NewIncomeModal from "./newIncomeModal";
import IncomeCategoryList from "./IncomeCategoryList";
import NewIncomeCategoryModal from "./NewIncomeCategoryModal";

import axios from "axios";

import { API_URL1 } from "../constants";

class HomeCategory extends Component {
  state = {
    categories: []
  };

  componentDidMount() {
    this.resetState();
  }

  getCategories = () => {
    axios.get(API_URL1).then(res => this.setState({ categories: res.data }));
  };

  resetState = () => {
    this.getCategories();
  };

  render() {
    return (
      <Container style={{ marginTop: "20px" }}>
        <Row>
          <Col>
            <IncomeCategoryList
              categories={this.state.categories}
              resetState={this.resetState}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <NewIncomeCategoryModal create={true} resetState={this.resetState} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default HomeCategory;
