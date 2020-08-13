import React, { useState } from 'react';
import { CenterContrain } from '../library/Globals';
import { getColor } from '../src/Colors';
import { getUserData, getPage, gotoPage } from '../src/Data';
import { ToggleButton } from '../library/Buttons';

let rootStyle = {
	width: '100%',
	background: getColor('primary'),
}

let nameStyle = {
	color: getColor('text'),
	fontWeight: 600,
	paddingTop: 30,
	paddingBottom: 15,
	fontSize: 30,
	display: 'inline-block'
}

let titleStyle = {
	color: getColor('text2'),
	fontWeight: 600,
	paddingLeft: 30,
	fontSize: 20,
	display: 'inline-block'
}

function NavBar () {
	
	let current = getPage();

	return <div style={{paddingBottom: 15}}>
		<ToggleButton text="About" active={current} callback={gotoPage} />
		<ToggleButton text="About2" active={current} callback={gotoPage} />
	</div>
}

export default function Header () {

	let userData = getUserData();

	return <div style={ rootStyle }>
		<CenterContrain>
			<div style={ nameStyle }>
				{ userData.name }
			</div>
			<div style={ titleStyle }>
				{ userData.title }
			</div>
			<NavBar/>
		</CenterContrain>
	</div>
}