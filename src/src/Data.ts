// ! Manages the global data for the portfolio itself, as a global state store

import { UserData } from "./Types";

// * Page Data

let page = "";
let updatePage : any = undefined;

export function getPage () { return page }
export function setUpdatePage ( _ : any ) { updatePage = _ }
export function setpage (_page : string) { page = _page }
export function gotoPage ( _page : string ) {
	_page = _page.toLowerCase()
	window.history.pushState(_page, 'Portfolio Show', `/${userId}/${_page}`)
	page = _page
	updatePage( page )
}

// * User Data

let userId : string = ''
let userData : UserData = { 
	name : 'Eric Robertson',
	title: 'Software Engineer',
	profile : '/profile.jpg',
	status: 'Looking For Work',
	about : 'about text here'
}

export function getUserData () { return userData }
export function setUserData ( _ : UserData) { userData = _ }
export function setUserId ( _ : string ) { userId = _ }