import React from 'react';
import Base from './Base.jsx';
import LandingPage from './LandingPage.jsx';
import LandingPageInfo from './LandingPageInfo.jsx';
import LanidngFooter from './LandingFooter.jsx';

export default class Home extends Base {
	constructor(props) {
		super(props)
		
	}
	



	render() {
	
		return (
			<div id="home">
				<LandingPage />
				<LandingPageInfo />
				
			</div>
		)
	}
}
