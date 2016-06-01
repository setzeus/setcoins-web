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
			<div className='Iphone-container' >
				<img className='screen-shots' src='img/bitcoin-found.jpg'></img>
				<img className='screen-shots' src='img/btc-wallet.jpg'></img>
				<img className='screen-shots' src='img/send-btc.jpg'></img>

			</div>
		)
	}
}
