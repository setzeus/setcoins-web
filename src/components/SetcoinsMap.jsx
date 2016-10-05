import React from 'react';
var $ = require('jquery');

import Base from './Base.jsx';


export default class SetcoinsMap extends Base {
	constructor(props) {
		super(props)
		
	}
	


	render() {
	
		return (
			<div className='section features' id='section1'>
				<div className='inner container-centered text-right'>
						<div className=' animated '>
							<h1 className='content-title'>Explore Locally, Collect Bitcoin</h1>
							<p className='content'>Remember geo-chaching? We do. We build Setcoins with the same spirit in mind: explore exciting places around to start collecting free bitcoin</p>
						</div>
				</div>
			</div>	
		)
	}
}
