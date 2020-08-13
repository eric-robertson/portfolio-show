import React, { useState, CSSProperties } from 'react';
import { getColor } from '../src/Colors';

interface Button { text : string, callback : any, active : string }
export function ToggleButton ({ text, callback, active } : Button ) {

	const [hover, setHover] = useState( Boolean );
	let isActive = active.toLowerCase() == text.toLowerCase()
	let style = {
		cursor: 'pointer',
		borderBottom: hover ? `2px solid ${getColor('accentText')}` : `2px solid transparent`,
		color: isActive ? getColor('accentText') : getColor('text2'),
		background: isActive ? getColor('accent') : 'transparent',
		padding: 10,
		margin: 5,
		fontSize: 17,
		borderRadius: hover ? 0 : 5,
		fontWeight: 500,
		display: 'inline-block'
	} as CSSProperties

	return <div 
		style={ style }  
		onMouseEnter={()=>setHover(true)} 
		onMouseLeave={()=>setHover(false)} 
		onMouseDown={()=>callback(text)}>
			{ text }
	</div>
}