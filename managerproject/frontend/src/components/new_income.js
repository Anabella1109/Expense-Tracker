import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import axios from "axios";

import { API_URL, API_URL1 } from "../constants";
import {out_data} from "../Data";
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
  //  console.log(out_data);
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
        <center><FormGroup>
          <Label for="category" style={{fontWeight:"bold"}}>Category:</Label><br/>
          <select
            type="dropdown"
            name="category"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.category)}
            style={{width:350}}
          >
			   {this.props.categories.map(item =>(
  <option 
  value={item.pk}
  >{item.name}</option>
         ))}
              
		   </select>
        </FormGroup></center>
        <center><FormGroup>
          <Label for="description" style={{fontWeight:"bold"}}>Description:</Label><br/>
          <textarea
            name="description"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.description)}
            style={{width:350}}
          />
        </FormGroup></center>
        <center> <FormGroup>
          <Label for="amount" style={{fontWeight:"bold"}}>Amount:</Label><br/>
          <Input
            type="number"
            name="amount"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.amount)}
            style={{width:350}}
          />
        </FormGroup></center>
        
        <center><Button>Add</Button></center>
      </Form>
    );
  }
}

export default NewIncomeForm;