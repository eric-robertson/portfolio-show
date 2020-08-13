import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { CenterContrain } from './Globals';
import { getColor } from '../src/Colors';

let childStyle = {
	background : getColor('primary2'),
	padding: 10,
}

interface Props { children : JSX.Element | JSX.Element[] }
export default function PageContainer ({ children } : Props ) {
	return <>
		<Header />
		<div style={ childStyle }>
			<CenterContrain>
				{ children }
			</CenterContrain>
		</div>
		<Footer />
	</>

}