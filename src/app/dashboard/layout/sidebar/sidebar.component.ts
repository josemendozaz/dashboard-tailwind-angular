/*
 * MODULES AND LIBRARY SECTION
 */
import { BreakpointObserver } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { heroBars3Solid, heroExclamationCircleSolid, heroHomeSolid, heroRectangleStackSolid, heroServerStackSolid, heroUserCircleSolid } from '@ng-icons/heroicons/solid';
/*
 * SERVICES SECTION
 */
import { SidebarService } from '../../services/sidebar/sidebar.service';
/**
 * @class		SidebarComponent
 * @description	Layout que contiene el side bar del dashboard
 */
@Component({
	standalone	: true,
	selector	: 'app-sidebar',
	imports		: [ NgIcon ],
	providers	: [
		provideIcons({
			heroHomeSolid,
			heroUserCircleSolid,
			heroExclamationCircleSolid,
			heroServerStackSolid,
			heroRectangleStackSolid,
			heroBars3Solid
		})
	],
	templateUrl : './sidebar.component.html',
	styles		: `
		/* Oculta el scrollbar en navegadores como Internet Explorer 10+ y Firefox */
		.sidebar-content {
			-ms-overflow-style	: none!important;  /* Internet Explorer 10+ */
			scrollbar-width		: none!important;  /* Firefox */
		}
		/* Oculta el scrollbar en navegadores como Safari y Chrome */
		.sidebar-content::-webkit-scrollbar {
			display	: none!important;  /* Safari and Chrome */
		}
		/* Estilo para las ondas en botón del sidebar */
		::ng-deep .ripple {
			position			: absolute;
			border-radius		: 50%;
			background-color	: rgba(255, 255, 255, 0.3); /* Cambia si no lo ves */
			transform			: scale(0);
			animation			: ripple-animation 600ms ease-out;
			pointer-events		: none;
			z-index				: 10; /* ¡IMPORTANTE! debe estar por encima del contenido */
		}
		/* Animación Onda en botón del sidebar */
		@keyframes ripple-animation {
			to {
				transform	: scale(4);
				opacity		: 0;
			}
		}
	`
})
/**
 * @class		SidebarComponent
 * @description	Layout que contiene el side bar del dashboard
 */
export class SidebarComponent {
	/**
	 * @method			constructor
	 * @description		Constructor para el componente, se inyectan las dependencias y/o servicios necesarios
	 */
	constructor(
		private breakpointObserver	: BreakpointObserver,
		public sidebarService		: SidebarService,
	){}
	/**
	 * @method			ngOnInit
	 * @description		Ciclo de vida ngOnInit
	 */
	ngOnInit(): void {
		// this.breakpointObserver.observe([Breakpoints.Handset])
		this.breakpointObserver.observe( ['(max-width: 768px)'] )
		.subscribe(result => {
			this.sidebarService.setIsMobile	= result.matches;
			if ( !this.sidebarService.getIsMobile ) {
				this.sidebarService.setSidebarShow	= true;
				this.sidebarService.setHideOverlay	= true;
			}
		});
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
	 * @method			closeSidebar
	 * @description		Cierra el sidebar
	 */
	closeSidebar() {
		this.sidebarService.setSidebarShow	= false;
		// Espera a que termine la animación antes de ocultar el overlay con hidden
		setTimeout( () => { this.sidebarService.setHideOverlay	= true; }, 500 ); // igual al duration-500
	}
	/**
	 * @method			checkIfMobile
	 * @description		Verifica si el dispositivo es movil
	 */
	checkIfMobile() {
		this.sidebarService.setIsMobile = window.innerWidth <= 768;
	}
	/**
	 * @method			rippleEffect
	 * @description		Genera el efecto ripple
	 */
	rippleEffect( event: MouseEvent ) {
		const button		= event.currentTarget as HTMLElement;
		// Crea el span que contendrá el efecto ripple
		const ripple		= document.createElement('span');
		ripple.classList.add('ripple');
		// Asegurar que se posicione bien
		const size			= Math.max(button.clientWidth, button.clientHeight);
		ripple.style.width	= ripple.style.height = `${size}px`;
		// Devuelve un objeto DOMRect que proporciona información sobre
		// el tamaño de un elemento y su posición relativa a la ventana gráfica.
		const rect			= button.getBoundingClientRect();
		const x				= event.clientX - rect.left - size / 2;
		const y				= event.clientY - rect.top - size / 2;
		// Asigna la posición del elemento ripple
		ripple.style.left	= `${x}px`;
		ripple.style.top	= `${y}px`;
		// Agregar el span
		button.appendChild(ripple);
		// Eliminar después de animación
		setTimeout( () => { ripple.remove(); }, 60000 );
	}
}
