/*
 * MODULES AND LIBRARY SECTION
 */
import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
	heroBars3Solid,
	heroExclamationCircleSolid,
	heroHomeSolid,
	heroRectangleStackSolid,
	heroServerStackSolid,
	heroUserCircleSolid
} from '@ng-icons/heroicons/solid';
/*
 * SERVICES SECTION
 */
import { SidebarService } from '../services/sidebar/sidebar.service';
/**
 * @class		NavHeaderComponent
 * @description	Layout que contiene el nav header
 */
@Component({
	standalone	: true,
	selector	: 'app-nav-header',
	imports		: [ NgIcon ],
	providers	: [
		provideIcons(
			{
				heroBars3Solid
			}
		)
	],
	template	: `
		<div class="text-center font-bold md:hidden">
			<ng-icon class="p-0 w-4 h-4 text-2xl md:text-xl cursor-pointer items-start" name="heroBars3Solid" (click)="openSidebar()"></ng-icon>
		</div>
		<div class="text-end">
			Lorem ipsum dolor
		</div>
	`,
	styles		: ``
})
/**
 * @class		NavHeaderComponent
 * @description	Layout que contiene el nav header
 */
export class NavHeaderComponent {
	/**
	 * @method			constructor
	 * @description		Constructor para el componente, se inyectan las dependencias y/o servicios necesarios
	 */
	constructor(
		public sidebarService		: SidebarService,
	){}
	/**
	 * @method			openSidebar
	 * @description		Abre el sidebar
	 */
	openSidebar() {
		// Primero aseguramos que el overlay esté visible
		this.sidebarService.setHideOverlay	= false;
		// Luego, activamos la animación en el siguiente ciclo de cambio
		setTimeout( () => { this.sidebarService.setSidebarShow	= true; }, 10 );
	}
}
