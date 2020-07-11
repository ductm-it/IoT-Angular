import { NgModule } from "@angular/core";
import { MobileMenuComponent } from "./mobile-menu.component";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
	declarations: [
		MobileMenuComponent,
	],
	imports: [
		CommonModule,
		RouterModule,
	],
	exports: [
		MobileMenuComponent,
	]
})
export class MobileMenuModule {

}
