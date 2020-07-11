import { NgModule } from "@angular/core";
import { NotificationAreaComponent } from './notification-area.component';
import { ToggleClickModule } from 'src/app/directive/toggle-click.module';

@NgModule({
	declarations: [
		NotificationAreaComponent,
	],
	imports: [
		ToggleClickModule,
	],
	exports: [
		NotificationAreaComponent
	]
})
export class NotificationAreaModule {

}
