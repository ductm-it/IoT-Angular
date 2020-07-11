import { NgModule } from "@angular/core";
import { PublicHeaderComponent } from './header.component';
import { HeaderNavAreaModule } from 'src/app/module/area/header-nav/header-nav-area.module';

@NgModule({
	declarations: [
		PublicHeaderComponent
	],
	imports: [
		HeaderNavAreaModule,
	],
	exports: [
		PublicHeaderComponent
	]
})
export class PublicHeaderModule {

}
