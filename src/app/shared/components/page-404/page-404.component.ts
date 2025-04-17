import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
	selector	: 'app-page-404',
	imports		: [ RouterModule ],
	template	: `
		<div class="p-4 relative bg-gradient-to-b from-black to-[#000000] w-screen h-screen text-white">
			<img
				src="/images/404/bg.jpg"
				class="absolute h-full w-full object-fill sm:object-cover top-0 left-0 opacity-60 z-0"
				alt=""
			/>
			<div class="relative card-404 justify-items-center my-30 z-10">
				<img class="w-30" src="/images/logos/logo-white.png" alt="">
				<h1 class="font-bold mt-1">ERROR 404</h1>
				<h3 class="font-bold mt-1">Página no encontrada</h3>
				<h4 class="mt-1">
					Lo sentimos, no pudimos encontrar la página que estás buscando.
				</h4>
				<br>
				<a class="bg-white text-black p-3 rounded-md relative inline-block font-bold w-40 text-center" [routerLink]="['/dashboard']">
					<h3>
						Volver
					</h3>
				</a>
			</div>
		</div>
	`,
	styles		: ``
})
export class Page404Component {

}
