import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { ToggleMenuMobileModule } from 'src/app/directive/toggle-mobile-menu.module';
import { NotificationAreaModule } from '../notification/notification-area.module';
import { UserAreaModule } from '../user/user-area.module';
import { HeaderNavAreaComponent } from './header-nav-area.component';
import { CommonModule } from '@angular/common';

@NgModule({
	declarations: [
		HeaderNavAreaComponent,
	],
	imports: [
		NotificationAreaModule,
		UserAreaModule,
		RouterModule,
		ToggleMenuMobileModule,
		CommonModule,
	],
	exports: [
		HeaderNavAreaComponent
	]
})
export class HeaderNavAreaModule {

}
