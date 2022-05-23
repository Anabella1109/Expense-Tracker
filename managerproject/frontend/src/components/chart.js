import React, { Component } from "react";
import {Bar} from 'react-chartjs-2';


// const data=[];
// categories.map(cat=>(
// 	data.push(cat.name)
// ))
// console.log(data)
const state = {
	labels: ['January', 'February', 'March',
			 'April', 'May'],
	datasets: [
	  {
		label: 'Rainfall',
		backgroundColor: 'rgba(75,192,192,1)',
		borderColor: 'rgba(0,0,0,1)',
		borderWidth: 2,
		data: [65, 59, 80, 81, 56]
	  }
	]
  };
//   const chartRef = useRef<HTMLCanvasElement | null>(null);
class IncomeChart extends Component {
	render() {
		
		return (
		  <div>
		
		  </div>
		);
   }
}

export default IncomeChart;