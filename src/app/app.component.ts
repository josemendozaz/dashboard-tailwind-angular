import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { User } from '@models/user.model';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthComponent } from './auth/auth.component';
import { ThemeService } from './dashboard/services/theme/theme.service';

@Component({
	selector	: 'app-root',
	imports		: [ RouterOutlet ],
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
	constructor(
		private themeService	: ThemeService
	) {
		document.documentElement.classList.add( this.themeService.getThemeInDataStorage );
	}
}
