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
			<div className='fullpage-wrapper ' id='fullpage2' >
				<div className='section ' >
					
				</div>
				<div className='section '>
					<div className='wrapper-screen'>
						<img className='setcoins-photo' src='http://d1wbxby8dwa4u.cloudfront.net/namecheap/new-home.png'></img>
					</div>
				</div>
				<div className='section ' >
					<div className='wrapper-screen'>
						<img className='setcoins-photo' src='http://d1wbxby8dwa4u.cloudfront.net/namecheap/new-wallet.png'></img>
					</div>
				</div>
				<div className='section ' >
					<div className='wrapper-screen'>
						<img className='setcoins-photo' src='http://d1wbxby8dwa4u.cloudfront.net/namecheap/new-withdraw.png'></img>
					</div>
				</div>
			</div>
		)
	}
}
