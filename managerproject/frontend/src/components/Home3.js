import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import ExpenseList from "./ExpenseList";
import NewExpenseModal from "./NewExpenseModal";
import ExpenseChart from "./chart1"


import axios from "axios";

import { API_URL3,API_URL2 ,API_URL} from "../constants";

class HomeExpense extends Component {
  state = {
    incomes: [],
    categories:[],
    expenses:[]
  };

  componentDidMount() {
    this.resetState();
  }

  getIncomes = () => {
    axios.get(API_URL3).then(res => this.setState({...this.state.categories,...this.state.expenses, incomes: res.data }));
    axios.get(API_URL2).then(res => this.setState({ ...this.state.incomes,...this.state.expenses,categories: res.data }));
    axios.get(API_URL).then(res => this.setState({ ...this.state.incomes,...this.state.categories,expenses: res.data }));
  };

  resetState = () => {
    this.getIncomes();
  };
  functionExport=()=>{
  
  }

  render() {
    // export const incomes=this.state.incomes;
    // export const expenses=this.state.expenses;
    // this.functionExport();
    return (
      <Container style={{ marginTop: "120px" }}>
        <Row>
        <i><h1 className="text-center">List of expenses</h1></i>
          <Col>
            <ExpenseList
              incomes={this.state.incomes}
              expenses={this.state.expenses}
              categories={this.state.categories}
              resetState={this.resetState}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <NewExpenseModal 
            create={true} 
            resetState={this.resetState}
            categories={this.state.categories}
            expenses={this.state.incomes}
            incomes={this.state.expenses} />
            
          </Col>
        </Row>
        <Row>
          <Col>
            <ExpenseChart 
             expenses={this.state.incomes}
             categories={this.state.categories} />
          </Col>
        </Row>
        
      </Container>
    );
  }
}

export default HomeExpense;
// export const expenses=expenses;
// export const incomes=incomes;
