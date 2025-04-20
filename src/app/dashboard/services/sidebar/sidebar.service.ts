import { Injectable } from '@angular/core';

@Injectable({
	providedIn	: 'root'
})
export class SidebarService {
	/**
	 * @var				isMobile : boolean
	 * @description		variable boolean que indica si está en modo  mobile
	 */
	isMobile	= false;
	/**
	 * @var				sidebarShow : boolean
	 * @description		variable boolean que indica si se debe mostrar el menú lateral (sidebar)
	 */
	sidebarShow = false;
	/**
	 * @var				hideOverlay : boolean
	 * @description		variable boolean que indica si se debe mostrar el fondo oscuro detras del sidebar (overlay)
	 */
	hideOverlay = false;
	/**
	 * @method			getIsMobile
	 * @description		Método Get que consulta el valor de la variable isMobile, la cual
	 * 					identifica si se encuentra en versión movil.
	 */
	get getIsMobile()	: boolean {
		return this.isMobile;
	}
	/**
	 * @method			setIsMobile
	 * @description		Método set que setea el valor de la variable isMobile, la cual
	 * 					identifica si se encuentra en versión movil.
	 */
	set setIsMobile( isMobile : boolean ) {
		this.isMobile = isMobile;
	}
	/**
	 * @method			getSidebarShow
	 * @description		Método Get que consulta el valor de la variable sidebarShow, la cual
	 * 					identifica si el sidebar se debe mostrar
	 */
	get getSidebarShow()	: boolean {
		return this.sidebarShow;
	}
	/**
	 * @method			setSidebarShow
	 * @description		Método set que setea el valor de la variable sidebarShow, la cual
	 * 					identifica si el sidebar se debe mostrar
	 */
	set setSidebarShow( sidebarShow : boolean ) {
		this.sidebarShow = sidebarShow;
	}
	/**
	 * @method			getHideOverlay
	 * @description		Método Get que consulta el valor de la variable hideOverlay, la cual
	 * 					identifica el fondo oscuro detras del sidebar (overlay) se debe ocultar
	 */
	get getHideOverlay()	: boolean {
		return this.hideOverlay;
	}
	/**
	 * @method			setHideOverlay
	 * @description		Método set que setea el valor de la variable hideOverlay, la cual
	 * 					identifica el fondo oscuro detras del sidebar (overlay) se debe ocultar
	 */
	set setHideOverlay( hideOverlay : boolean ) {
		this.hideOverlay = hideOverlay;
	}
	constructor() { }
}
