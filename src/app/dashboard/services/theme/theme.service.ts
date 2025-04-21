/*
 * MODULES AND LIBRARY SECTION
 */
import { Injectable } from '@angular/core';
/**
 * @class		ThemeService
 * @description	Servicio para el tema del dashboard (dark o light)
 */
@Injectable({
	providedIn	: 'root'
})
/**
 * @class		ThemeService
 * @description	Servicio para el tema del dashboard (dark o light)
 */
export class ThemeService {
	/**
	 * @method			getThemeinDataStorage
	 * @description		Método Get que consulta en el localstorage el thema (dark o light)
	 */
	get getThemeInDataStorage()	: string {
		return ( localStorage.getItem('themeDashboardJMZ' ) != undefined ) ? localStorage.getItem('themeDashboardJMZ')! : 'light';
	}
	/**
	 * @method			setThemeinDataStorage
	 * @description		Método set que setea en el localstorage el thema (dark o light)
	 */
	set setThemeInDataStorage( theme : string ) {
		localStorage.setItem('themeDashboardJMZ', `${theme}`);
	}
	/**
	 * @method			constructor
	 * @description		Constructor para el componente, se inyectan las dependencias y/o servicios necesarios
	 */
  	constructor() { }
	/**
	 * @method			changeTheme
	 * @description		Método que cambia el tema
	 */
	changeTheme()	: string {
		const currentTheme			= ( this.getThemeInDataStorage ) ? this.getThemeInDataStorage.toLocaleLowerCase() : "";
		const newTheme				= ( currentTheme ) ? ( currentTheme === "light" ? "dark" : "light" ) : "light"
		if ( currentTheme ) { document.documentElement.classList.remove( currentTheme ) }
		document.documentElement.classList.add( newTheme );
		this.setThemeInDataStorage	= newTheme;
		return newTheme;
	}
}
