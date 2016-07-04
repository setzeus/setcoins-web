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
			<div className='fullpage-wrapper '>
				
				<div className='section '>
					<div className='wrapper-screen'>
						<img id='shot-1' className='setcoins-photo' src='http://d1wbxby8dwa4u.cloudfront.net/namecheap/new-home.png'></img>
					</div>
				</div>
				<div className='section ' >
					<div className='wrapper-screen'>
						<img id='shot-2'className='setcoins-photo' src='http://d1wbxby8dwa4u.cloudfront.net/namecheap/new-wallet.png'></img>
					</div>
				</div>
				<div className='section ' >
					<div className='wrapper-screen'>
						<img id='shot-3'className='setcoins-photo' src='http://d1wbxby8dwa4u.cloudfront.net/namecheap/new-withdraw.png'></img>
					</div>
				</div>
			</div>
		)
	}
}
