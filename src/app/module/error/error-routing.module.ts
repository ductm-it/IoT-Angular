import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SCREEN } from 'src/app/service/url.service';
import { PublicError404Component } from './404/error-404.component';
import { ErrorComponent } from './error.component';


const routes: Routes = [
	{
		path: "",
		component: ErrorComponent,
		children: [
			{
				path: SCREEN.PUBLIC_ERROR_404,
				component: PublicError404Component
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ErrorRoutingModule { }
