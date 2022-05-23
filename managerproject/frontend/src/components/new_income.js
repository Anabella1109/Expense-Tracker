import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import axios from "axios";

import { API_URL, API_URL1 } from "../constants";
// import categories from "../../Home1"


class NewIncomeForm extends React.Component {
  state = {
    pk: 0,
    category:0 ,
    description: "",
    amount: 0,
    // added: ""
    
  };
  

  componentDidMount() {
    if (this.props.income) {
      const { pk, category, description, amount, added } = this.props.income;
      // const categories=this.getCategories();
      this.setState({ pk, category, description, amount, added });
    }
  }

  getCategories = () => {
   const categories=this.props.categories;
   console.log(this.props.categories);
   return categories;
  };

 
  

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createIncome = e => {
    e.preventDefault();
    axios.post(API_URL, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  editIncome = e => {
    e.preventDefault();
    axios.put(API_URL + this.state.pk, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  defaultIfEmpty = value => {
    return value === "" ? "" : value;
  };

  render() {
    console.log(this.props.categories)
    const incomeCatetegories=[
      {
        pk:1,
        name:"Salary",
        description:"This is the amount of money obtained as payment from my job"
      },
      {
        pk:2,
        name:"Investment profit",
        description:"Money obtained from profitable investment"
      },
      {
        pk:3,
        name:"Ikimina",
        description:"Amount of money received from ikimina"
      }
    ];
    
    console.log(this.getCategories())

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
			   {this.props.categories.map(item =>(
  <option 
  value={item.pk}
  >{item.name}</option>
         ))}
              
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

export default NewIncomeForm;