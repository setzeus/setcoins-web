import React from 'react';
import Base from './Base.jsx'
import api from '../scripts/api.js';

var lineChart = require('react-chartjs').Line;



export default class BitcoinTransactions extends Base{
		constructor(props){
			super(props)
			this.state = {
				transAmount : [],
				transDates : []
			}
		}
		shouldComponentUpdate(){
			this.getBitcoinTransactions()
		}
		getBitcoinTransactions(){
			api.get('https://www.quandl.com/api/v3/datasets/BCHAIN/NTRAN.json?collapse=monthly&start_date=2015-04-13')
			.then( res => {
				
				var data = res['dataset']['data']
				var transAmount = data.map( (data,index) => {
					 return (data[1])
				});
				var transDates = data.map( (data,index) => {
					var date = data[0].slice(5,7)
					
					return (date)
				});
				

				transDates = transDates.map( (transDates,index)=>{
					 switch(transDates){	
						case '01':
							return "January";
							break;
						case '02':
							return "Febuaray";
							break;	
						case '03':
							return "March";
							break;
						case '04':
							return "April";
							break;
						case '05':
							return "May";
							break;	
						case '06':
							return "June";
							break;
						case '07':
							return "July";
							break;
						case '08':
							return "August";
							break;
						case '09':
							return "September";
							break;
						case '10':
							return "Ocotober";
							break;
						case '11':
							return "November";
							break;
						case '12':
							return "December";
							break;
						default:
							return 'Failed'	;																		

					}		
				});				

				this.setState({
					transAmount: transAmount,
					transDates: transDates
				})
				var rectDemo = d3.select("#rect-demo").
		  append("svg:svg").
		  attr("width", 400).
		  attr("height", 300);

			rectDemo.append("svg:rect").
			  attr("x", 100).
			  attr("y", 100).
			  attr("height", 100).
			  attr("width", 200);

			})
		}

		var d3Chart = {};
		d3Chart.create = function(el,props,state){
			var svg = d3.select(el).append('svg')
				.atr('class','d3')
		}
	render(){
		
		 var data = {
		 	labels: this.state.transDates ,
		 	datasets: [
		 		{
		 			label: "Bitcoin Transaction Volume",
		 			data: this.state.transAmount,
		 			strokeColor: " #22a7f0"
		 		}
		 	]
		 }



		return(
			<div id='rect-demo'>
				asdf
			</div>	
			)
		}
	}



