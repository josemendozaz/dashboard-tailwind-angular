import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from '../dashboard/services/theme/theme.service';
import { heroSunSolid, heroMoonSolid } from '@ng-icons/heroicons/solid';
import { NgIcon, provideIcons } from '@ng-icons/core';
@Component({
	selector	: 'app-auth',
	imports		: [ NgIcon, RouterOutlet ],
	providers	: [
		provideIcons(
			{
				heroSunSolid,
				heroMoonSolid
			}
		)
	],
	template	: `
		<div class="md:bg-white md:dark:bg-gradient-to-bl from-[#3F3F3F] to-[#242424]">
			<div class="absolute w-full flex flex-col items-end pt-5 pr-5 z-10">
				<div class="group transition-all duration-100 ease-linear cursor-pointer" (click)="changeTheme()">
					<div class="bg-white rounded-full w-10 h-10 text-center pt-2 md:bg-primary-dark md:dark:bg-white md:text-white md:dark:text-primary-dark">
						<ng-icon class="relative p-0 text-2xl md:text-xl" [name]="theme == 'light' ? 'heroSunSolid' : 'heroMoonSolid'"></ng-icon>
						<span class="absolute w-auto p-2 m-2 min-w-max right-2 top-4 rounded-md shadow-md bg-[#141414] text-white transition-all duration-100 scale-0 origin-bottom group-hover:scale-100">
							{{ theme == 'light' ? 'Cambiar a modo oscuro' : 'Cambiar a modo claro' }}
						</span>
					</div>
				</div>
			</div>
			<div class="grid grid-cols-[100%] pl-3 pr-3 md:pl-0 md:pr-0 md:grid-cols-[750px_1fr] h-screen items-center justify-center">
				<img
					src="/images/404/bg.jpg"
					class="absolute h-full w-full object-cover sm:object-cover top-0 left-0 opacity-80 -z-10 md:hidden"
					alt=""
				/>
				<div class="bg-white pl-5 pr-5 pt-6 pb-6 rounded-md md:bg-transparent dark:bg-gradient-to-bl from-[#3F3F3F] to-[#242424] md:dark:bg-gradient-to-bl md:from-[rgba(255,255,255,0)] md:to-[rgba(255,255,255,0)]">
					<img class="relative top-0 bottom-0 left-0 right-0 m-auto w-25 z-10 mb-2 md:hidden" [src]="theme == 'light' ? '/images/logos/logo-color.png' : '/images/logos/logo-white.png'" alt="">
					<router-outlet></router-outlet>
				</div>
				<div class="hidden md:block md:relative md:h-115 md:mr-20">
					<img
						src="/images/404/bg.jpg"
						class="absolute h-full w-full object-cover sm:object-cover top-0 left-0 opacity-80 z-0 rounded-2xl"
						alt=""
					/>
					<img class="absolute top-0 bottom-0 left-0 right-0 m-auto w-50 z-10" src="/images/logos/logo-white.png" alt="">
				</div>
			</div>
		</div>
	`,
	styles		: ``
})
export class AuthComponent {
	theme	: string = '';
	constructor(
		private themeService	: ThemeService
	) {
		this.theme	= this.themeService.getThemeInDataStorage;
	}
	/**
	 * @method			changeTheme
	 * @description		Abre el sidebar
	 */
	changeTheme() {
		this.theme	= this.themeService.changeTheme();
	}
}
