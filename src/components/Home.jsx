import React from 'react';
import Scroll from 'react-scroll';
import Base from './Base.jsx';
import LandingPage from './LandingPage.jsx';
import LanidngFooter from './LandingFooter.jsx';
import BTCWallet from './BTCWallet.jsx';
import SetcoinsMap from './SetcoinsMap.jsx';
import Iphone from './Iphone.jsx';
import ScreenShots from './ScreenShots.jsx';
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
				onLeave: function(anchorLink, index,nextIndex){
					if(index == 1){
						$('.second-fullpage').removeClass('show')
					} else{
						
					}
					if(index == 2){
						console.log('index = 2')
						$('#section1 .animated').addClass('fadeInDown')
						$('#shot-1').fadeIn()
						$('#shot-1').addClass('fadeInDown')
					}else{
						$('#section1 .animated').removeClass('fadeInDown')
						$('#shot-1').fadeOut()
					}
					if(index == 3){
						console.log('index = 3')
						$('#section2 .animated').addClass('fadeInDown')
						$('#shot-2').fadeIn()
						$('#shot-2').addClass('fadeInDown')
					}else{
						$('#section2 .animated').removeClass('fadeInDown')
						$('#shot-2').fadeOut()
					}
					if(index == 4){
						console.log('index = 4')
						$('#section3 .animated').addClass('fadeInDown')
						$('#shot-3').fadeIn()
						$('#shot-3').addClass('fadeInDown')
					}else{
						$('#section3 .animated').removeClass('fadeInDown')
						$('#shot-3').fadeOut()
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
				
					<div className='wrapper-screen animated'>
						<img id='shot-1' className='setcoins-photo' src='http://d1wbxby8dwa4u.cloudfront.net/namecheap/new-home.png'></img>
					</div>
			
				
					<div className='wrapper-screen animated'>
						<img id='shot-2'className='setcoins-photo' src='http://d1wbxby8dwa4u.cloudfront.net/namecheap/new-wallet.png'></img>
					</div>
				
				
					<div className='wrapper-screen animated'>
						<img id='shot-3'className='setcoins-photo' src='http://d1wbxby8dwa4u.cloudfront.net/namecheap/new-withdraw.png'></img>
					</div>
				
			</div>
		</div>		
		)
	}
	}
