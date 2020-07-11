import { NgModule } from "@angular/core";
import { UserAreaComponent } from './user-area.component';
import { ToggleClickModule } from 'src/app/directive/toggle-click.module';
import { UserService } from 'src/app/service/user.service';
import { CommonModule } from '@angular/common';
import { SecurePipeModule } from 'src/app/pipe/secure.pipe';
import { RouterModule } from '@angular/router';

@NgModule({
	declarations: [
		UserAreaComponent,
	],
	imports: [
		ToggleClickModule,
		CommonModule,
		RouterModule,
	],
	exports: [
		UserAreaComponent
	],
	providers: [
	]
})
export class UserAreaModule {

}
