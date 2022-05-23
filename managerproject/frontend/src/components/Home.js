import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import IncomeList from "./IncomeList";
import NewIncomeModal from "./newIncomeModal";
import IncomeChart from "./chart"


import axios from "axios";

import { API_URL , API_URL1} from "../constants";

class Home extends Component {
  state = {
    incomes: [],
    categories:[]
  };

  componentDidMount() {
    this.resetState();
  }

  getIncomes = () => {
    axios.get(API_URL).then(res => this.setState({...this.state.categories, incomes: res.data }));
    axios.get(API_URL1).then(res => this.setState({ ...this.state.incomes,categories: res.data }));
    
  };
  // getCategories = () => {
  //   axios.get(API_URL1).then(res => this.setState({ ...this.state.incomes,categories: res.data }));
    
    
  // };

  resetState = () => {
    this.getIncomes();
  };

  render() {
    return (
      <Container style={{ marginTop: "20px" }}>
        <Row>
        <h1 className="text-center">List of incomes</h1>
          <Col>
            <IncomeList
              incomes={this.state.incomes}
              categories={this.state.categories}
              resetState={this.resetState}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <IncomeChart 
             incomes={this.state.incomes}
             categories={this.state.categories} />
          </Col>
        </Row>
        <Row>
          <Col>
            <NewIncomeModal 
            create={true}
            resetState={this.resetState}
            incomes={this.state.incomes}
            categories={this.state.categories} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;