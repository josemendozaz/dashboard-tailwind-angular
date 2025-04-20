import { Component } from '@angular/core';

import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

import { NgIcon, provideIcons } from '@ng-icons/core';
import { heroBars3Solid, heroExclamationCircleSolid, heroHomeSolid, heroRectangleStackSolid, heroServerStackSolid, heroUserCircleSolid } from '@ng-icons/heroicons/solid';

@Component({
	standalone	: true,
	selector	: 'app-dashboard',
	templateUrl	: './dashboard.component.html',
	styleUrl	: './dashboard.component.css',
	imports		: [ NgIcon ],
	providers	: [ provideIcons({ heroHomeSolid, heroUserCircleSolid, heroExclamationCircleSolid, heroServerStackSolid, heroRectangleStackSolid, heroBars3Solid }) ],
})
export class DashboardComponent {
	/**
	 * @var				isMobile : boolean
	 * @description		variable boolean que indica si está en modo  mobile
	 */
	isMobile	= false;
	/**
	 * @var				sidebarShow : boolean
	 * @description		variable boolean que indica si se debe mostrar el navbar lateral
	 */
	sidebarShow = true;
	hideOverlay = true;
	/**
	 * @method			constructor
	 * @description		Constructor para el componente, se inyectan las dependencias y/o servicios necesarios
	 */
	constructor(
		private breakpointObserver: BreakpointObserver
	){}
	/**
	 * @method			ngOnInit
	 * @description		Ciclo de vida ngOnInit
	 */
	ngOnInit(): void {
		// this.breakpointObserver.observe([Breakpoints.Handset])
		this.breakpointObserver.observe( ['(max-width: 768px)'] )
		.subscribe(result => {
			this.isMobile = result.matches;
			if ( !this.isMobile ) {
				this.sidebarShow		= true;
				this.hideOverlay	= true;
			}
		  console.log('Modo móvil:', this.isMobile);
		});
	}

	openNav() {
		this.hideOverlay = false; // primero aseguramos que el overlay esté visible
		// luego, activamos la animación en el siguiente ciclo de cambio
		setTimeout(() => {
			this.sidebarShow = true;
		}, 10);
	}

	closeNav() {
		this.sidebarShow = false;

		// espera a que termine la animación antes de ocultar el overlay con hidden
		setTimeout(() => {
			this.hideOverlay = true;
		}, 500); // igual al duration-500
	}

	checkIfMobile() {
		this.isMobile = window.innerWidth <= 768;
		console.log( this.checkIfMobile() );
	}



	clickForWaveAnimation( event: Event ) {
		const button = event.target as HTMLElement;
		// Agregar la clase 'clicked' al botón clickeado
		button.classList.add('clicked');
		console.log('objec asdasdasdt');
		// Eliminar la clase después de que termine la animación
		setTimeout(() => {
			button.classList.remove('clicked');
			console.log('object');
		}, 600);  // Tiempo igual al de la animación
	}

}
