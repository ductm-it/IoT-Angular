import { NgModule } from "@angular/core";
import { PrivateHeaderComponent } from './header.component';
import { HeaderNavAreaModule } from 'src/app/module/area/header-nav/header-nav-area.module';

@NgModule({
	declarations: [
		PrivateHeaderComponent
	],
	imports: [
		HeaderNavAreaModule,
	],
	exports: [
		PrivateHeaderComponent
	]
})
export class PrivateHeaderModule {

}
