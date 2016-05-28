import React from 'react';
import Base from './Base.jsx';
import FeelTheEconomy from './FeelTheEconomy.jsx';
import LandingHeader from './LandingHeader.jsx';

export default class LandingPage extends Base {
	render(){
		return(
				<div id='landing-page'>
					<LandingHeader/>
					<FeelTheEconomy />
					<div className='button-container'>
						<a className='set-flex join-movement' href='http://www.facebook.com/groups/1530020757301559/' target='blank'>
							<i className='fa fa-facebook'></i>
							<p id='join-the-movement'>Join the Movement</p>
						</a>	
					</div>
				</div>
			)
	}
}