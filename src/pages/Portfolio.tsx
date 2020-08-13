// ! A portfolio of a specific given individual

import React, { useState } from 'react';
import {useParams} from "react-router-dom";
import PageContainer from '../library/PageContainer';
import { setUserData, getUserData, setpage, setUserId, setUpdatePage, gotoPage } from '../src/Data';
import { PopContainerChildren, PopContainerLeftRight } from '../library/PopContainer';
import PortfolioAbout from './PortfilioAbout';

export default function Portfolio ( ) {
	
	let { user, page } = useParams()

	setUserId( user )
	setpage( page )

	const [renderPage, setPage] = useState( page )

	setUpdatePage( setPage )

	// Goto pages if they exist
	if ( renderPage == 'about' ) return <PortfolioAbout />

	// Catch all, back to about
	else {
		gotoPage('about')
		return <div></div>
	}
}