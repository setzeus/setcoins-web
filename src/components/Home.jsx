import React from 'react';
import Scroll from 'react-scroll';
import Base from './Base.jsx';
import LandingPage from './LandingPage.jsx';
import LandingPageInfo from './LandingPageInfo.jsx';
import LanidngFooter from './LandingFooter.jsx';
//testing components
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
			$('#fullpage').fullpage({
				//All the Full page special methods contained in an object
				css3: true,

				onLeave: function(index,nextIndex,direction){
					console.log('the current index is '+index);
					console.log('the next index is '+ nextIndex);
					console.log('the direction is  '+ direction);

					if( nextIndex === 1 && direction === 'up'){
						$( "#iphone" ).fadeOut('11');	
					}
					else if(nextIndex === 2 && direction === 'down'){
						$( "#iphone" ).fadeIn('slow');
						$('.iphone').fadeIn();
					}
				}

			});
		})
	}

	render() {
	 

		return (
		<div>	
			<Iphone />
			<div id="fullpage">
				<LandingPage  />
				<SetcoinsMap />
				<BTCWallet/>
				<SendBTC/>
			</div>
			
		</div>	
		)
	}
	}
