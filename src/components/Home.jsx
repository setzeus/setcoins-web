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

var $ = require('jquery');

import fullpage from 'fullpage.js';

export default class Home extends Base {
	constructor(props) {
		super(props)
		this.onLoad()
	}
	
	onLoad(){
		$(document).ready(function() {
   			 $('#fullpage').fullpage({fixedElements:'#iphone'});
	 	});
	}

	render() {
	 

		return (
		<div>	

			<div id="fullpage">
				<LandingPage  />
				<Iphone />
				<SetcoinsMap />
				<BTCWallet/>
			</div>
			
		</div>	
		)
	}
	}
