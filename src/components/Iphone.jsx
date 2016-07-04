import React from 'react';
var $ = require('jquery');

import Base from './Base.jsx';


export default class Iphone extends Base {
	constructor(props) {
		super(props)
		
	}
	
	fadeIn(){
		$('#iphone').css("display","none");
			$(window).scroll(function(){
				slider();
			});

			$(document).ready(function(){
				slider();
			});


			function slider(){ 
				var target = $(".map-scene").offset().top;	
				if($(window).scrollTop() >=  target){
					$( "#iphone" ).fadeIn();
					console.log('Ran function Fadein in Iphone Scene')
				}
				
				else{
					$('#iphone').fadeOut();
					console.log('Ran function FadeOut in Iphone Scene')
				}
			}
			
		
	}



	render() {
	
		return (
			<div className='box-phone' id='iphone'>
				<img className='iphone'  src='http://d1wbxby8dwa4u.cloudfront.net/namecheap/nexus-empty.png'></img>
			</div>
		)
	}
}
