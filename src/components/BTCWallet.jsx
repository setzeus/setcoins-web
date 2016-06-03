import React from 'react';
var $ = require('jquery');

import Base from './Base.jsx';


export default class BTCWallet extends Base {
	constructor(props) {
		super(props)
		this.ImageFade()
	}
	
	ImageFade(){
		$('.btc-wallet').css("display","none");
			$(window).scroll(function(){
				slider();
			});
			$(document).ready(function(){
				slider();
			});

			function slider(){ 
				var target = $(".wallet-scene").offset().top;
				if($(window).scrollTop() >= target){
					$( ".btc-wallet" ).fadeIn();
					console.log('Ran function Fadein in scene BTC Wallet')
				}
				else{
					$('.btc-wallet').fadeOut();
					console.log('Ran function FadeOut in scene BTC Wallet')
				}
			}
	}



	render() {
	
		return (
			<div className='wallet-scene section' >
				<div className='wallet-info'></div>

				<div className='photo-container'>
					<div className='shots-container'>
						<img className='screen-shot btc-wallet' src='img/btc-wallet.jpg'></img>
					</div>
				</div>	
			</div>	
		)
	}
}
