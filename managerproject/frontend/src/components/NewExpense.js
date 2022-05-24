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

  checkTotal = (amount,income,expense)=>{
    let result=income-expense;
    if (amount>result){
      this.state.amount=null;
      alert("Maximum amount available is "+ result);
    }
    console.log(amount)
    console.log(income)
    console.log(expense)
    console.log(result)
  }

  render() {
   
    const incomes=this.props.incomes;
    const expenses=this.props.expenses;

   
    let tot=0;
    incomes.map(amo =>(
      tot=tot+amo.amount

    ))
    let toto=0;
    expenses.map(amo =>(
      toto=toto+amo.amount

    ))
    // const expenseCatetegories=[
    //   {
    //     pk:1,
    //     name:"Groceries",
    //     description:"This is the amount of money spent obtaining groceries"
    //   },
    //   {
    //     pk:2,
    //     name:"Investment profit",
    //     description:"Money obtained from profitable investment"
    //   },
    //   {
    //     pk:3,
    //     name:"Ikimina",
    //     description:"Amount of money received from ikimina"
    //   }
    // ];

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
            value={this.checkTotal(this.state.amount,tot,toto)}
          />
        </FormGroup>
        
        <Button>Send</Button>
      </Form>
    );
  }
}

export default NewExpenseForm;