import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import axios from "axios";

import { API_URL3, API_URL2 } from "../constants";


class NewExpenseForm extends React.Component {
  state = {
    pk: 0,
    // category: ,
    description: "",
    amount: 0,
    // added: ""
    
  };
  categories=[]

  componentDidMount() {
    if (this.props.income) {
      const { pk, category, description, amount, added } = this.props.income;
      this.setState({ pk, category, description, amount, added });
    }
  }

  // getCategories = () => {
  //   axios.get(API_URL1).then(res => { this.categories:res.data });
  //   return this.categories
  // };

 
  

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createIncome = e => {
    e.preventDefault();
    axios.post(API_URL3, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  editIncome = e => {
    e.preventDefault();
    axios.put(API_URL3 + this.state.pk, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  defaultIfEmpty = value => {
    return value === "" ? "" : value;
  };

  render() {


    return (
      <Form onSubmit={this.props.income ? this.editIncome : this.createIncome}>
        <FormGroup>
          <Label for="category">Category:</Label>
          <select
            type="dropdown"
            name="category"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.category)}
          >
			  {/* <option value="Salary">Salary</option>
              <option value="Gift">Gift</option> */}
              
		   </select>
        </FormGroup>
        <FormGroup>
          <Label for="description">Description:</Label>
          <textarea
            name="description"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.description)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="amount">Amount:</Label>
          <Input
            type="number"
            name="amount"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.amount)}
          />
        </FormGroup>
        
        <Button>Send</Button>
      </Form>
    );
  }
}

export default NewExpenseForm;