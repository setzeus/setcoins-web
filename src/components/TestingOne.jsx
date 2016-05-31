import React from 'react';
var $ = require('jquery');

import Base from './Base.jsx';


export default class TestingOne extends Base {
	constructor(props) {
		super(props)
		this.test()
	}
	
	test(){
		$( document ).ready(function() {
  console.log( 'ready!' );
});
	}
	


	render() {
	
		return (
			<div className='testing-one' >
				<p>we lit 420 blaze it</p>
			</div>	
		)
	}
}
