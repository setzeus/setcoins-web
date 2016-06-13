import React from 'react';
var $ = require('jquery');

import Base from './Base.jsx';


export default class SetcoinsMap extends Base {
	constructor(props) {
		super(props)
		
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
					$('.send-btc').fadeIn();
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
			<div className='section' >
				<div className='map-scene'>
					<div className='map-info'>
							<div className='content-container'>
								<h1 className='content-title'>Title</h1>
								<p className='content'>Contnet content content content content content </p>
							</div>
							<div className='photo-container'>
								<img className='screen-shot send-btc' src='img/setcoins-map.jpg'></img>
							</div>	
					</div>

						
				</div>
			</div>	
		)
	}
}
