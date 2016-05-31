import React from 'react';
var $ = require('jquery');

import Base from './Base.jsx';


export default class Iphone extends Base {
	constructor(props) {
		super(props)
		this.fadeIn()
	}
	
	fadeIn(){
			$(window).scroll(function(){
				slider();
			});

			$(document).ready(function(){
				$('.iphone').css("display","none");
				slider();
				
			});


			function slider(){ 
				var target = $(".testing-one").offset().top;

	
				if($(window).scrollTop() >= target){
					$( ".iphone" ).fadeIn();
					console.log('it faded in')
				}
				else{
					$('.iphone').fadeOut();
					console.log('fade out')
				}
			}
			
		
	}



	render() {
	
		return (
			<div className='Iphone-container' >
				<img className='iphone' src='img/img-iphone2.png'>
					<div className='iphone-screen'>
						<p>testing</p>
					</div>
				</img>
			</div>
		)
	}
}
