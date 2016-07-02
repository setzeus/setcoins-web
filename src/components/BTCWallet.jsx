import React from 'react';
var $ = require('jquery');

import Base from './Base.jsx';


export default class BTCWallet extends Base {
	constructor(props) {
		super(props)
		
	}
	
	



	render() {
	
		return (
			<div className='section features' id='section2'>
				<div className='inner container-centered text-right'>
						<div className=' animated '>
							<h1 className='content-title'>Learn Through Using</h1>
							<p className='content'>We didn’t know it back then, but MIT indirectly inspired this movement. In early 2014, they gave away $100 worth of Bitcoin to each of it’s students(link here). We agree that the best way to learn about something is by using it, but we thought everybody should have that opportunity.</p>
						</div>
				</div>
			</div>	
		)
	}
}
