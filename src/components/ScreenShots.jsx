import React from 'react';
var $ = require('jquery');

import Base from './Base.jsx';


export default class ScreenShots extends Base {
	constructor(props) {
		super(props)
		
	}
	
	fadeIn(){

		
	}



	render() {
	
		return (
			<div className='screen-shots-container' >
				<div className='single-shots'>
					
				</div>
				<div className='single-shots'>
					<div className='shots-container'>
						<img className='screen-shot' src='img/send-btc.jpg'></img>
					</div>
				</div>
				<div className='single-shots'>
					<div className='shots-container'>
						<img className='screen-shot' src='img/bitcoin-found.jpg'></img>
					</div>
				</div>	

			</div>
		)
	}
}
