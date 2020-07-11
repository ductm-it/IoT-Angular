import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SCREEN } from 'src/app/service/url.service';
import { PublicHomeComponent } from './home/home.component';
import { PublicComponent } from './public.component';
import { PublicContactComponent } from './contact/contact.component';


const routes: Routes = [
	{
		path: "",
		component: PublicComponent,
		children: [
			{
				path: SCREEN.PUBLIC_HOME,
				component: PublicHomeComponent
			}, {
				path: SCREEN.PUBLIC_CONTACT,
				component: PublicContactComponent
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class PublicRoutingModule { }
