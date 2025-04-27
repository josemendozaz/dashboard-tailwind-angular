import { Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './auth/pages/login/login.component';
import { ForgotPasswordComponent } from './auth/pages/forgot-password/forgot-password.component';
import { Page404Component } from './shared/components/page-404/page-404.component';
import { HomeComponent } from './dashboard/pages/home/home.component';

export const routes: Routes = [
	{
		path			: 'auth',
		title			: 'Auth Page',
		loadComponent	: () => import('./auth/auth.component').then( c => c.AuthComponent ),
		children		: [
			{
				path	: 'login',
				component : LoginComponent,
				title : 'Login Page'
			},
			{
				path	: 'forgot-password',
				component : ForgotPasswordComponent,
				title : 'Forgot Password Page'
			},
			{
				path			: '**',
				redirectTo		: 'login'
			}
		]
		// canActivate		: [ PreventLoginGuard ],
		// canLoad			: [ PreventLoginGuard ],
	},
	{
		path			: 'dashboard',
		loadComponent	: () => import('./dashboard/dashboard.component').then( c => c.DashboardComponent ),
		children		: [
			{
				path	: '',
				component : HomeComponent,
				title : 'Dashboard Home Page'
			},
			// {
			// 	path	: 'forgot-password',
			// 	component : ForgotPasswordComponent,
			// 	title : 'Forgot Password Page'
			// },
			// {
			// 	path			: '**',
			// 	redirectTo		: 'login'
			// }
		]
		// canActivate		: [ PreventLoginGuard ],
		// canLoad			: [ PreventLoginGuard ],
	},
	{
		path			: 'page-not-found',
		component		: Page404Component,
		title			: 'Error 404 - Página no encontrada'
		// canActivate		: [ PreventLoginGuard ],
		// canLoad			: [ PreventLoginGuard ],
	},
	{
		path			: '**',
		redirectTo		: 'dashboard'
	}
];
