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
				var componentPeak = $(".map-scene").offset().top;
				if($(window).scrollTop() >= componentPeak){
					$(".send-btc").fadeIn();
					console.log('Showed photo in Map Scene componet');
				}
				
				else{
					$('.send-btc').fadeOut();
					console.log('Ran function Fadeout in Setcoins map Scene ' );

				}
			}
			
		
	}


	render() {
	
		return (
			<div className='map-scene section' >
				<div className='map-info'>
				</div>
				<div className='photo-container'>
					<div className='shots-container'>
						<img className='screen-shot send-btc' src='img/setcoins-map.jpg'></img>
					</div>
				</div>	
			</div>	
		)
	}
}
