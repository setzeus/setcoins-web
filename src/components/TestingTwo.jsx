import React from 'react';
var $ = require('jquery');

import Base from './Base.jsx';


export default class SetcoinsMap extends Base {
	constructor(props) {
		super(props)
		this.fadeIn()
	}
	
	fadeIn(){
		$('.send-btc').css("display","none");
			$(window).scroll(function(){
				slider();
			});

			$(document).ready(function(){
				
				slider();
				
			});


			function slider(){ 
				var target = $(".testing-two").offset().top;

	
				if($(window).scrollTop() > target){
					$( ".send-btc" ).fadeIn();
					console.log('it faded in')
				}
				else{
					$('send-btc').fadeOut();
					console.log('fade out')
				}
			}
			
		
	}


	render() {
	
		return (
			<div className='map-scene' >
				<div className='map-info'></div>

				<div className='photo-container'>
					<div className='shots-container'>
						<img className='screen-shot send-btc' src='img/send-btc.jpg'></img>
					</div>
				</div>	
			</div>	
		)
	}
}
