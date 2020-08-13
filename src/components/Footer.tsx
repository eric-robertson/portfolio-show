import React from 'react';
import { CenterContrain } from '../library/Globals';

export default function Footer () {

	let style = {
		width: '100%',
		height: 50,
	}

	return <div style={style}>
		<CenterContrain>
			<div>Footer</div>
		</CenterContrain>
	</div>
}