import React from 'react';
import Base from './Base.jsx'
import api from '../scripts/api.js';



export default class FeelTheEconomy extends Base{
		
	render(){
		return(
					<div className='economy-container'>
						<div className='can-you-feel-it'>
							<p id='feel-the-new-economy'>Feel The New Economy</p>
							<div className='free-btc'>
								<p>Because the solution to inequality is education,</p>
								<p>Were giving away 24 free Bitcoin</p>
							</div>	

						</div>
						<div className='video-container'>
						
							<iframe id='video'  src="https://www.youtube.com/embed/VePpQBCbKBw" frameBorder="0" allowFullScreen>
							</iframe>
							
						</div>
						
					</div>

			)
		}
	}





