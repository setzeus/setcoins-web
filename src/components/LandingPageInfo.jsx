import React from 'react';
import Base from './Base.jsx'
import api from '../scripts/api.js';


export default class LandingPageInfo extends Base{
		
	render(){
		return(
					<div className='landing-page-info set-flex'>
						<div className='landing-info-container'>
							<div className='landing-info-text'>
								<div  className='info-text-container'>
									<div className='btc-logo-container'>
										<i className='fa fa-btc'/>
									</div>
									<div className='info-text'>
										asdf
									</div>	
								</div>

								<div className='info-text-container'>
									<div className='btc-logo-container'>
										<i className='fa fa-btc'/>
									</div>
									<div className='info-text'>
										asdf
									</div>	

								</div>
							</div>
							<div className='info-video-container'>
								<iframe id='btc-video' src="https://www.youtube.com/embed/Um63OQz3bjo" frameBorder="0" allowFullScreen></iframe>
							</div>
							<div className='graph'>
								<img src='/img/TotalNumberTransactions-600.jpg'/>
							</div>
						</div>
					</div>
			)
		}
	}



