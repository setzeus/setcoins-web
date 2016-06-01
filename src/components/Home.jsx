import React from 'react';
import Scroll from 'react-scroll';
import Base from './Base.jsx';
import LandingPage from './LandingPage.jsx';
import LandingPageInfo from './LandingPageInfo.jsx';
import LanidngFooter from './LandingFooter.jsx';
//testing components
import TestingOne from './TestingOne.jsx';
import TestingTwo from './TestingTwo.jsx';
import TestingThree from './TestingThree.jsx';
import Iphone from './Iphone.jsx';
import ScreenShots from './ScreenShots.jsx';

export default class Home extends Base {
	constructor(props) {
		super(props)
		
	}
	
	

	render() {
	
		return (
			<div id="home">
				
				<LandingPage />
				<Iphone />
				<TestingOne/>
				<TestingTwo />
				<TestingThree />
				
			</div>
		)
	}
	}
