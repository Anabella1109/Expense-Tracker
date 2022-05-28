import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWallet } from '@fortawesome/free-solid-svg-icons'

class Balance extends Component{
	render(){
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
	
	let bal=0;
	bal=tot-toto;
	return(
		<div>
	<h5 className="text-center"><FontAwesomeIcon icon={faWallet} /><span><h1 style={{color:"blue"}}>{bal}</h1> RWF</span></h5>
	</div>
		);
	}
}

export default Balance;