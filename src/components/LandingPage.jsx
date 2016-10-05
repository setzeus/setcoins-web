import React from 'react';
import Base from './Base.jsx';
import FeelTheEconomy from './FeelTheEconomy.jsx';
import LandingHeader from './LandingHeader.jsx';

export default class LandingPage extends Base {
	render(){
		return(
				<div className='section' id='section0'>
					<div id='landing-page'>
						<LandingHeader/>
						<div className='economy-button'>
							<FeelTheEconomy />
						</div>
					</div>
				</div>
			)
	}
}