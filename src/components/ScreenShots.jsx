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
			<div className='fullpage-wrapper' id='fullpage2' >
				<div className='section shots' >
					
				</div>
				<div className='section shots'>
					<div className='wrapper-screen'>
						<img className='screen-shots' src='http://d1wbxby8dwa4u.cloudfront.net/namecheap/home-screen-polished.png'></img>
					</div>
				</div>
				<div className='section shots' >
					<div className='wrapper-screen'>
						<img className='screen-shots' src='http://d1wbxby8dwa4u.cloudfront.net/namecheap/wallet-polished.png'></img>
					</div>
				</div>
				<div className='section shotsb' >
					<div className='wrapper-screen'>
						<img className='screen-shots' src='http://d1wbxby8dwa4u.cloudfront.net/namecheap/Withdraw-USD-polished.png'></img>
					</div>
				</div>
			</div>
		)
	}
}
