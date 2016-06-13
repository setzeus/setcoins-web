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
					<div className='send-info'>
						<div className='content-container'>
							<h1 className='content-title'>Title</h1>
							<p className='content'>Contnet content content content content content </p>
						</div>
						
						<div className='photo-container'>
							<img className='screen-shot send-btc' src='img/send-btc.jpg'></img>
						</div>	
					</div>
				</div>
			</div>	
		)
	}
}
