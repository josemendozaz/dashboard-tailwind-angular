/*
 * MODULES, DIRECTIVES AND LIBRARY SECTION
 */
import { Component, ElementRef, HostListener, Input, SimpleChanges, ViewChild } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { ClickOutsideDirective } from '../../shared/directives/click-outside.directive';
/*
 * INTERFACE SECTION
 */
export interface DropdownItem {
	label	: string;
	icon	?: string;
	action	?: () => void;
	link	?: string;
}
/**
 * @class		SidebarComponent
 * @description	Layout que contiene el side bar del dashboard
 */
@Component({
	selector	: 'app-dropdown',
	imports		: [ NgIcon, ClickOutsideDirective ],
	template	: `
		<div class="relative text-gray-700" (appClickOutside)="closeDropdown()" [appClickOutsideEnabled]="dropdownOpen" #dropdownRef>
			<!-- BOTÓN DEL TRIGGER -->
			<button
				class="items-center justify-center text-black/50 dark:text-white"
				(click)="toggleDropdown( $event )"
			>
				<ng-icon [name]="mainIcon" class="p-0 w-4 h-4 text-2xl md:text-xl cursor-pointer items-start"></ng-icon>
			</button>
			<!-- MENÚ DESPLEGABLE -->
			@if (dropdownOpen) {
				<div class="absolute right-0 mt-2 w-48 bg-white rounded shadow-lg z-50 dark:bg-gradient-to-bl from-[#3F3F3F] to-[#242424]">
					<ul class="py-1 text-sm text-gray-700">
						@for( item of itemsRendering; track item.label ) {
							<li class="dark:text-white">
								<a
								class="px-4 py-2 hover:bg-gray-100 flex flex-row gap-2 items-center"
								href="{{ item.link || '#' }}"
								(click)="item.link ? onItemClick(item) : $event.preventDefault()"
								>
								@if ( item.icon ) {
									<ng-icon
										[name]="item.icon"
										class="w-4 h-4"
									></ng-icon>
								}
								<span>{{ item.label }}</span>
								</a>
							</li>
						}
					</ul>
				</div>
			}
		</div>
	`,
	styles	: ``
})
/**
 * @class		DropdownComponent
 * @description	Componente de Lista desplegable DropDowm
 */
export class DropdownComponent {
	@ViewChild('dropdownRef', { static: false }) dropdownRef!: ElementRef;
	@Input() items		: DropdownItem[] = [];
	@Input() mainIcon	: string = 'heroUserCircleSolid';
	/**
	 * @var				dropdownOpen
	 * @type			boolean
	 * @description		Bandera booleana que indica si se debe abrir o no el DropDown
	 */
	dropdownOpen		: boolean	= false;
	/**
	 * @var				itemsRendering
	 * @type			DropdownItem[]
	 * @description		Lista array que contendrá los elementos a renderizar
	 */
	itemsRendering		: DropdownItem[] = [];
	/**
	 * @method			constructor
	 * @description		Constructor para el componente, se inyectan las dependencias y/o servicios necesarios
	 */
	constructor( private elementRef: ElementRef ){
	}
	/**
	 * @method			ngOnInit
	 * @description		Ciclo de vida ngOnInit
	 */
	ngOnInit(): void {
		this.itemsRendering	= this.items;
	}
	/**
	 * @method			closeDropdown
	 * @description		Abre el dropdowm
	 */
	toggleDropdown( event: Event ): void {
		event.stopPropagation();
		this.dropdownOpen	= !this.dropdownOpen;
	}
	/**
	 * @method			closeDropdown
	 * @description		Cierra el dropdowm
	 */
	closeDropdown(): void {
		this.dropdownOpen	= false;
	}
	/**
	 * @method			onItemClick
	 * @description		Cierra el dropdowm al presionar click en un enlace
	 * 					( Si tiene link, dejar que el <a> se encargue )
	 */
	onItemClick( item: DropdownItem ) {
		this.closeDropdown();
		if ( item.action ) item.action();
	}
	/**
	 * @method			HostListener:onClickOutside
	 * @description		detector de eventos para cuando se realice un click fuera del
	 * 					dropdown este se cierre de forma automatica.
	 * 					Cierra al hacer clic fuera (sin directiva externa)
	 */
	@HostListener('document:click', ['$event'])
	onClickOutside(event: MouseEvent) {
		const target = event.target as HTMLElement;
		if (!this.elementRef.nativeElement.contains(target)) {
			this.closeDropdown();
		}
	}

}
