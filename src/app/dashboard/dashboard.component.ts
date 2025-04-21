/*
 * MODULES AND LIBRARY SECTION
 */
import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { heroBars3Solid } from '@ng-icons/heroicons/solid';
import { SidebarComponent } from "./layout/sidebar/sidebar.component";
import { NavHeaderComponent } from "./layout/nav-header.component";
import { FooterComponent } from "./layout/footer.component";
/*
 * SERVICES SECTION
 */
/**
 * @class		DashboardComponent
 * @description	Layout general del dashboard
 */
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
/**
 * @class		DashboardComponent
 * @description	Layout general del dashboard
 */
export class DashboardComponent {

	// /**
	//  * @var				sidebarShow : boolean
	//  * @description		variable boolean que indica si se debe mostrar el navbar lateral
	//  */
	// hideOverlay = true;
	/**
	 * @method			constructor
	 * @description		Constructor para el componente, se inyectan las dependencias y/o servicios necesarios
	 */
	constructor(
	){}
	// /**
	//  * @method			ngOnInit
	//  * @description		Ciclo de vida ngOnInit
	//  */
	// ngOnInit(): void {
	// }

}
