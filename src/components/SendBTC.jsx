import React from 'react';
var $ = require('jquery');

import Base from './Base.jsx';


export default class SendBTc extends Base {
	constructor(props) {
		super(props)
		
	}
	
	fadeIn(){
		
			
		
	}


	render() {
	
		return (
			<div className='section' >
				<div className='send-scene'>
					<div className='map-info'>
					</div>

					<div className='photo-container'>
						<img className='screen-shot send-btc' src='img/send-btc.jpg'></img>
					</div>	
				</div>
			</div>	
		)
	}
}
