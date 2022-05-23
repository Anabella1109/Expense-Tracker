import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import axios from "axios";

import { API_URL2 } from "../constants";

class NewExpenseCategoryForm extends React.Component {
  state = {
    pk: 0,
    name: "",
    description: "",
    
    // added: ""
  };

  componentDidMount() {
    if (this.props.category) {
      const { pk, name, description} = this.props.category;
      this.setState({ pk, name, description});
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createIncomeCategory = e => {
    e.preventDefault();
    axios.post(API_URL2, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  editIncomeCategory = e => {
    e.preventDefault();
    axios.put(API_URL2 + this.state.pk, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  defaultIfEmpty = value => {
    return value === "" ? "" : value;
  };

  render() {
    return (
      <Form onSubmit={this.props.category ? this.editIncomeCategory : this.createIncomeCategory}>
        <FormGroup>
          <Label for="name">Name:</Label>
          <input
            type="text"
            name="name"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.name)}
          />
			  
              
		   
        </FormGroup>
        <FormGroup>
          <Label for="description">Description:</Label>
          <textarea
            name="description"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.description)}
          />
        </FormGroup>
        
        
        <Button>Send</Button>
      </Form>
    );
  }
}

export default NewExpenseCategoryForm;