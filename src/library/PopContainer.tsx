import React, { useState, CSSProperties } from 'react';
import { getColor } from '../src/Colors';

// * Styles for the various containers

let labelStyle = {
	marginLeft: 20,
	color: getColor('text2')
}

// * Base Container

interface Children { children : JSX.Element[], label : string } 
interface Child { children : JSX.Element | JSX.Element[], label : string } 

export function PopContainerChildren ({children, label} : Child ) {

	const [hover, setHover] = useState( Boolean );

	let root = {
		margin: 10,
		padding: 10,
		borderRadius: 5,
		background: getColor('primary'),
		boxShadow: hover ? `10px 10px 10px 0 ${getColor('primary3')}` : '',
		cursor: 'pointer',
		marginTop: 0,
		position: 'relative'
	} as CSSProperties

	return <>
		<div style={labelStyle} >
			{ label }
		</div>
		<div style={root} onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
			{ children }
		</div>
	</>
}

// * Containers themselves

export function PopContainerLeftRight ({children, label} : Children ) {
	return <PopContainerChildren label={label}>
		<div style={{width: 'calc(50% - 10px)', marginRight : 20, display: 'inline-block', position: 'relative' }}>
			{ children[0] }
		</div>
		<div style={{left: 'calc(50% + 10px)', width: 'calc(50% - 20px)', display: 'inline-block', position: 'absolute'}}>
			{ children[1] }
		</div>
	</PopContainerChildren>
}