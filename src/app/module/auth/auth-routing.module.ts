import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SCREEN } from 'src/app/service/url.service';
import { AuthComponent } from './auth.component';
import { AuthSigninComponent } from './signin/signin.component';
import { AuthSignupComponent } from './signup/signup.component';


const routes: Routes = [
	{
		path: "",
		component: AuthComponent,
		children: [
			{
				path: SCREEN.AUTH_SIGNIN,
				component: AuthSigninComponent
			},
			{
				path: SCREEN.AUTH_SIGNUP,
				component: AuthSignupComponent
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class AuthRoutingModule { }
