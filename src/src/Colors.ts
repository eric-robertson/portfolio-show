// ! Manages the color themes of the application

let activeTheme : string = 'white';

let themes = {
	white : {
		primary : "#ffffff",
		primary2 : "#f5f5f5",
		primary3 : "#ededed",
		text : "#141414",
		text2 : "#6e6e6e",
		accent : "#ffbaba",
		accentText : "#e01212"
	}
} as { [key:string] : { [key: string ] : string } }

export function setTheme ( theme : string) {
	activeTheme = theme;
}

export function getColor ( color : string ) {
	return themes[ activeTheme ][ color ];
}
