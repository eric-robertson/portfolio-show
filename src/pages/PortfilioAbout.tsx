// ! The about page of a portfolio

import React from 'react';
import {useParams} from "react-router-dom";
import PageContainer from '../library/PageContainer';
import { setUserData, getUserData } from '../src/Data';
import { PopContainerChildren, PopContainerLeftRight } from '../library/PopContainer';
import { getColor } from '../src/Colors';

let styleSmall = {
	display : 'inline-block',
	padding: 10,
	color: getColor('text2'),
	fontSize: 15,
	fontWeight: 600,
}

let styleBig = {
	display : 'inline-block',
	padding: 10,
	color: getColor('text'),
	fontSize: 20,
	fontWeight: 600,
}

function HTMLText({ html , text } : { html : string, text : string }){

	return <div>
		<div style={styleSmall}>
			{`<${html}>`}
		</div>
		<div style={styleBig}>
			{ text }
		</div>
		<div style={styleSmall}>
			{`</${html}>`}
		</div>

	</div>
}

export default function PortfolioAbout ( ) {
	
	let { user, page } = useParams();
	let userData = getUserData();
	
	return <PageContainer>

		<PopContainerLeftRight label="at-a-glance">
			<img style={{width:'100%', borderRadius: 5 }} src={ userData.profile } />
			<div style={{ position: 'absolute', top: 10, left : 10}}>
				<HTMLText html="name" text={ userData.name } />
				<HTMLText html="status" text={ userData.status } />
			</div>
		</PopContainerLeftRight>

		<PopContainerChildren label="about-me">
			<div>
				{ userData.about }
			</div>
		</PopContainerChildren>

	</PageContainer>
}