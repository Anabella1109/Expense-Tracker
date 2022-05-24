import React, { Component,useState } from "react";
import {Bar} from 'react-chartjs-2';
import { Chart as ChartJS } from "chart.js/auto";



class ExpenseChart extends Component {
	render() {
		const incomes=this.props.expenses;
		// const expenses=this.props.expenses;

		var out_data = [];
		var data=[];

		incomes.forEach(function(row) {
			if (out_data[row.category]) {
				out_data[row.category].push(row);
			} else {
				out_data[row.category] = [row];
			}
		}); 

		for(const item in out_data){
			console.log(item)
			let i =0;
			while(i<item.length){
				if(out_data[item][i] == undefined){
					i++;
					continue;

				}
				else{
				data.push({id:item,num: out_data[item][i].amount});
				
				
				i++;
			}
			}
	}

	var result = [];
		data.reduce(function(res, value) {
		if (!res[value.id]) {
			res[value.id] = { id: value.id, num: 0 };
			result.push(res[value.id])
		}
		res[value.id].num += value.num;
		return res;
		}, {});

console.log(result)
	console.log(out_data);

	console.log(data);

	const state = {
		labels: result.map((data) => data.id),
		datasets: [
		  {
			label: "Expense Per Category",
			data: result.map((data) => data.num),
			backgroundColor: [
			  "rgba(75,192,192,1)",
			  "#ecf0f1",
			  "#50AF95",
			  "#f3ba2f",
			  "#2a71d0",
			],
			borderColor: "black",
			borderWidth: 2,
		  },
		],
	  
	};

		  
// 	for (let i = 0; i <= item.length; i++) {
// 		console.log(out_data[item][i]);
//  }
		 
		// console.log(out_data);
		// console.log(out_data["Ikimina"]);
		
		return (
		  <div style={{width:800 }}>
				<Bar
					data={state}
					// options={{
					// 	title:{
					// 	display:true,
					// 	text:'Average Rainfall per month',
					// 	fontSize:20
					// 	},
					// 	legend:{
					// 	display:true,
					// 	position:'right'
					// 	}
					// }}
					/>
		  </div>
		);
   }
}

export default ExpenseChart;