import React from 'react';

interface Children { children : JSX.Element[] | JSX.Element }
export function CenterContrain ({ children } : Children ) {
	return <div style={{ width: 900, margin: 'auto' }}>
		{ children }
	</div>
}