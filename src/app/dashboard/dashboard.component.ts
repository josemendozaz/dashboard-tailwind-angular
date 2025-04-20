import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { heroBars3Solid } from '@ng-icons/heroicons/solid';
import { SidebarComponent } from "./layout/sidebar/sidebar.component";
import { NavHeaderComponent } from "./layout/nav-header.component";
import { FooterComponent } from "./layout/footer.component";

@Component({
	standalone	: true,
	selector	: 'app-dashboard',
	templateUrl	: './dashboard.component.html',
	styleUrl	: './dashboard.component.css',
	imports: [
		// NgIcon,
		SidebarComponent,
		NavHeaderComponent,
		FooterComponent
	],
	providers	: [ provideIcons({ heroBars3Solid }) ],
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
	// /**
	//  * @method			constructor
	//  * @description		Constructor para el componente, se inyectan las dependencias y/o servicios necesarios
	//  */
	// constructor(
	// 	private breakpointObserver: BreakpointObserver
	// ){}
	// /**
	//  * @method			ngOnInit
	//  * @description		Ciclo de vida ngOnInit
	//  */
	// ngOnInit(): void {
	// 	// this.breakpointObserver.observe([Breakpoints.Handset])
	// 	this.breakpointObserver.observe( ['(max-width: 768px)'] )
	// 	.subscribe(result => {
	// 		this.isMobile = result.matches;
	// 		if ( !this.isMobile ) {
	// 			this.sidebarShow		= true;
	// 			this.hideOverlay	= true;
	// 		}
	// 	  console.log('Modo móvil:', this.isMobile);
	// 	});
	// }

	openSidebar() {
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

	// checkIfMobile() {
	// 	this.isMobile = window.innerWidth <= 768;
	// 	console.log( this.checkIfMobile() );
	// }

	// rippleEffect(event: MouseEvent) {
	// 	const button = event.currentTarget as HTMLElement;

	// 	// Crear span
	// 	const ripple = document.createElement('span');
	// 	ripple.classList.add('ripple');

	// 	// Asegurar que se posicione bien
	// 	const size = Math.max(button.clientWidth, button.clientHeight);
	// 	ripple.style.width = ripple.style.height = `${size}px`;

	// 	const rect = button.getBoundingClientRect();
	// 	const x = event.clientX - rect.left - size / 2;
	// 	const y = event.clientY - rect.top - size / 2;

	// 	ripple.style.left = `${x}px`;
	// 	ripple.style.top = `${y}px`;

	// 	// Agregar el span
	// 	button.appendChild(ripple);

	// 	// Eliminar después de animación
	// 	setTimeout(() => {
	// 	  ripple.remove();
	// 	}, 60000);
	// }


}
