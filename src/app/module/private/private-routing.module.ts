import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SCREEN } from 'src/app/service/url.service';
import { CmsModule } from '../cms/cms.module';
import { PrivateDashboardComponent } from './dashboard/dashboard.component';
import { PrivateMessageComponent } from './message/message.component';
import { PrivateComponent } from './private.component';
import { PrivateSettingComponent } from './setting/setting.component';


const routes: Routes = [
	{
		path: "",
		component: PrivateComponent,
		children: [
			{
				path: "",
				pathMatch: "full",
				redirectTo: SCREEN.PRIVATE_DASHBOARD
			}, {
				path: SCREEN.PRIVATE_DASHBOARD,
				component: PrivateDashboardComponent
			}, {
				path: SCREEN.PRIVATE_MESSAGE,
				component: PrivateMessageComponent
			}, {
				path: SCREEN.PRIVATE_SETTING,
				component: PrivateSettingComponent
			}, {
				path: SCREEN.PRIVATE_CMS,
				loadChildren: () => CmsModule,
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class PrivateRoutingModule { }
