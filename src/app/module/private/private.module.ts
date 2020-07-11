import { NgModule } from "@angular/core";
import { PrivateLayoutModule } from 'src/app/layout/private/private-layout.module';
import { HeadlineAreaModule } from '../area/headline/headline-area.module';
import { PrivateDashboardComponent } from './dashboard/dashboard.component';
import { PrivateMessageComponent } from './message/message.component';
import { PrivateRoutingModule } from './private-routing.module';
import { PrivateComponent } from './private.component';
import { PrivateService } from './private.service';
import { PrivateSettingComponent } from './setting/setting.component';

@NgModule({
	declarations: [
		PrivateComponent,
		PrivateDashboardComponent,
		PrivateMessageComponent,
		PrivateSettingComponent,
	],
	imports: [
		PrivateLayoutModule,
		PrivateRoutingModule,
		HeadlineAreaModule,
	],
	exports: [

	],
	providers: [
		PrivateService
	]
})
export class PrivateModule {

}
