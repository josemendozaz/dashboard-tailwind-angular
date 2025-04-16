import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User } from '@models/user.model';
@Component({
	selector	: 'app-root',
	// imports		: [RouterOutlet],
	templateUrl	: './app.component.html',
	styleUrl	: './app.component.css'
})
export class AppComponent {
	title			= 'dashboard-tailwind-angular';
	user	: User	= {
		id: 0,
		email: '',
		name: '',
		roles: []
	}
}
