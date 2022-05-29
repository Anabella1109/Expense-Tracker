import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import axios from "axios";

import { API_URL1 } from "../constants";

class NewIncomeCategoryForm extends React.Component {
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
    axios.post(API_URL1, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  editIncomeCategory = e => {
    e.preventDefault();
    axios.put(API_URL1 + this.state.pk, this.state).then(() => {
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
        <center><FormGroup>
          <Label for="name" style={{fontWeight:"bold"}}>Name:</Label><br/>
          <input
            type="text"
            name="name"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.name)}
            style={{width:250}}
          />
			  
              
		   
        </FormGroup></center>
        <center><FormGroup>
          <Label for="description" style={{fontWeight:"bold"}}>Description:</Label><br/>
          <textarea
            name="description"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.description)}
            style={{width:250}}
          />
        </FormGroup></center>
        
        
        <center><Button>Add</Button></center>
      </Form>
    );
  }
}

export default NewIncomeCategoryForm;