/*
 * MODULES AND LIBRARY SECTION
 */
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
	heroBars3Solid,
	heroUserCircleSolid,
	heroBellSolid,
	heroCog6ToothSolid,

	heroExclamationCircleSolid,
	heroHomeSolid,
	heroRectangleStackSolid,
	heroServerStackSolid,
	heroUserSolid,
	heroClockSolid,
	heroArrowRightStartOnRectangleSolid,
	heroLockClosedSolid,
	heroSunSolid,
	heroMoonSolid,
} from '@ng-icons/heroicons/solid';
/*
 * SERVICES SECTION
 */
import { SidebarService } from '../services/sidebar/sidebar.service';
import { DropdownComponent, DropdownItem } from '../../shared/components/dropdown.component';
import { ThemeService } from '../services/theme/theme.service';
/**
 * @class		NavHeaderComponent
 * @description	Layout que contiene el nav header
 */
@Component({
	standalone	: true,
	selector	: 'app-nav-header',
	imports		: [ NgIcon, DropdownComponent ],
	providers	: [
		provideIcons(
			{
				heroBars3Solid,
				heroUserCircleSolid,
				heroBellSolid,
				heroCog6ToothSolid,
				heroUserSolid,
				heroLockClosedSolid,
				heroArrowRightStartOnRectangleSolid,
				heroSunSolid,
				heroMoonSolid
			}
		)
	],
	template	: `
		<div class="text-center font-bold md:hidden">
			<ng-icon class="p-0 w-4 h-4 text-2xl md:text-xl cursor-pointer items-start" name="heroBars3Solid" (click)="openSidebar()"></ng-icon>
		</div>
		<div class="text-center grid grid-cols-[1fr_50px_50px_50px] md:grid-cols-[1fr_50px_50px_50px] items-center">
			<div></div>
			<div class="group relative transition-all duration-100 ease-linear cursor-pointer" (click)="changeTheme()">
				<ng-icon class="relative p-0 w-4 h-4 text-2xl md:text-xl items-start" [name]="theme == 'light' ? 'heroSunSolid' : 'heroMoonSolid'"></ng-icon>
				<span class="absolute w-auto p-2 m-2 min-w-max right-2 top-4 rounded-md shadow-md bg-[#141414] text-white transition-all duration-100 scale-0 origin-bottom group-hover:scale-100">
					{{ theme == 'light' ? 'Cambiar a modo oscuro' : 'Cambiar a modo claro' }}
				</span>
			</div>
			<app-dropdown class="w-full h-full items-center" [items]="menuItems"></app-dropdown>
			<div>
				<ng-icon class="p-0 w-4 h-4 text-2xl md:text-xl cursor-pointer items-start" name="heroBellSolid"></ng-icon>
			</div>
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
	 * @var				theme
	 * @description		Variable que contiene el tema actual
	 */
	theme : string	= '';
	/**
	 * @var				dropdownOpen
	 * @description		Bandera booleana que indica si se debe cerrar o no el menú desplegable del nav header
	 */
	dropdownOpen = false;
	/**
	 * @var				menuItems
	 * @description		Arreglo de objetos que contiene los items del menú del nav header
	 */
	menuItems: DropdownItem[] = [
		{
			label	: 'Perfil',
			icon	: 'heroUserSolid',
			link	: '/perfil'
		},
		{
			label	: 'Cambiar contraseña',
			icon	: 'heroLockClosedSolid',
			link	: '/cambiar-clave'
		},
		{
			label	: 'Salir',
			icon	: 'heroArrowRightStartOnRectangleSolid',
			action	: () => {
				this.logout();
				this.closeDropdown();
			}
		}
	];
	/**
	 * @method			constructor
	 * @description		Constructor para el componente, se inyectan las dependencias y/o servicios necesarios
	 */
	constructor(
		public sidebarService	: SidebarService,
		private themeService	: ThemeService
	){}
	/**
	 * @method			ngOnInit
	 * @description		Ciclo de vida ngOnInit
	 */
	ngOnInit(): void {
		this.theme	= this.themeService.getThemeInDataStorage;
	}
	/**
	 * @method			changeTheme
	 * @description		Abre el sidebar
	 */
	changeTheme() {
		this.theme	= this.themeService.changeTheme();
	}
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
	/**
	 * @method			openSidebar
	 * @description		Cierra el menú desplegable en el nav header
	 */
	closeDropdown(): void {
		this.dropdownOpen = false;
	}
	/**
	 * @method			logout
	 * @description		Cierra la sesión
	 */
	logout(): void {
		console.log('Cerrar sesión');
	}
	// toggleDropdown(event: Event): void {
	// 	event.stopPropagation(); // previene propagación para evitar cierre inmediato
	// 	this.dropdownOpen = !this.dropdownOpen;
	// }

}
