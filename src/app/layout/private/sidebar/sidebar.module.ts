import { NgModule } from "@angular/core";
import { PrivateSidebarComponent } from './sidebar.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ToggleClickModule } from 'src/app/directive/toggle-click.module';

@NgModule({
	declarations: [
		PrivateSidebarComponent
	],
	imports: [
		CommonModule,
		RouterModule,
		ToggleClickModule,
	],
	exports: [
		PrivateSidebarComponent
	]
})
export class PrivateSidebarModule {

}
