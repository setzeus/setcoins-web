import React from 'react';
import Base from './Base.jsx';
import LandingPage from './LandingPage.jsx';
import BTCWallet from './BTCWallet.jsx';
import SetcoinsMap from './SetcoinsMap.jsx';
import Iphone from './Iphone.jsx';
import SendBTC from './SendBTC.jsx';

var $ = require('jquery');

import fullpage from 'fullpage.js';

export default class Home extends Base {
	constructor(props) {
		super(props)
		this.onLoad()
	}
	
	onLoad(){

		    console.log($(window).width())
		    console.log($(window).height())
		
		//Start a jqeury funciton that calls fullpage.js which takes a object as a paramater ,
		// inside the object all the special methods you want to use
		$(document).ready(function(){
			$('#fullpage , #fullpage2').fullpage({
				//All the Full page special methods contained in an object
				verticalCentered: false,
				
				css3: true,
				afterLoad: function(anchorLink, index){
					if(index == 1){
						$('.second-fullpage').removeClass('show')
						$('#section0 .animated').addClass('fadeInDown')

					} else{
						$('#fp-nav').slideDown(400);
						$('.second-fullpage').addClass('show')
					}
				},
				onLeave: function(anchorLink, index,direction){
					if(index == 1){
						$('.second-fullpage').removeClass('show')
						console.log(index,direction)
					}else{
						
					}

					if(index == 2 && direction == 'down'){
						console.log(index,direction)
						$('#section1 .animated').addClass('fadeInDown')
						$('#shot-1').fadeIn()
						$('#shot-1').addClass('fadeInDown')
					}
					else if(index == 2 && direction == 'up' ){
						console.log('i broke it ')
						$('#section1 .animated').addClass('fadeInUp')
						$('#shot-1').fadeIn()
						$('#shot-1 .animated' ).addClass('fadeInUp')
					}else{
						$('#section1 .animated').removeClass('fadeInDown')
						$('#shot-1').fadeOut()
						$('#shot-1').removeClass('fadeInUp')
					}

					if(index == 3 && direction == 'down'){
						console.log(index,direction)
						$('#section2 .animated').addClass('fadeInDown')
						$('#shot-2').fadeIn()
						$('#shot-2').addClass('fadeInDown')
					}
					else if(index == 3 && direction == 'up' ){
						$('#section2 .animated').addClass('fadeInUp')
						$('#shot-2').fadeIn()
						$('#shot-2 .animated' ).addClass('fadeInUp')
					}else{
						$('#section2 .animated').removeClass('fadeInDown')
						$('#shot-2').fadeOut()
						$('#shot-2').removeClass('fadeInUp')

					}
					if(index == 4){
						console.log(index,direction)
						$('#section3 .animated').addClass('fadeInDown')
						$('#shot-3').fadeIn()
						$('#shot-3').addClass('fadeInDown')
					}
					else if(index == 4 && direction == 'up' ){
						$('#section3 .animated').addClass('fadeInUp')
						$('#shot-3').fadeIn()
						$('#shot-3 .animated' ).addClass('fadeInUp')
					}else{
						$('#section3 .animated').removeClass('fadeInDown')
						$('#shot-3').fadeOut()
						$('#shot-3').removeClass('fadeInUp')
					}
				}

			});
		})
	}

	render() {
	 

		return (
		<div>	
			<div id="fullpage">
				<LandingPage/>
				<SetcoinsMap/>	
				<BTCWallet/>
				<SendBTC/>
				
			</div>
			<div className='second-fullpage show'>
				<Iphone/>
			</div>
			<div  className='second-fullpage inscren show'>
				
					<div className='wrapper-screen '>
						<img id='shot-1' className='setcoins-photo animated' src='http://d1wbxby8dwa4u.cloudfront.net/namecheap/new-home.png'></img>
					</div>
			
				
					<div className='wrapper-screen '>
						<img id='shot-2'className='setcoins-photo animated' src='http://d1wbxby8dwa4u.cloudfront.net/namecheap/new-wallet.png'></img>
					</div>
				
				
					<div className='wrapper-screen '>
						<img id='shot-3'className='setcoins-photo animated' src='http://d1wbxby8dwa4u.cloudfront.net/namecheap/newWithdraw.png'></img>
					</div>
				
			</div>
		</div>		
		)
	}
	}
