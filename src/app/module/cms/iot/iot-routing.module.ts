import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { CmsActionEnum } from 'src/app/enum/cms-action.enum';
import { CmsGaurd } from 'src/app/gaurd/cms.gaurd';
import { UrlService } from 'src/app/service/url.service';
import { CmsRoute } from '../cms-routing.module';
import { DeviceAttributeDetailComponent } from './device-attribute/device-attribute-detail.component';
import { DeviceAttributeListingComponent } from './device-attribute/device-attribute-listing.component';
import { DeviceTypeDetailComponent } from './device-type/device-type-detail.component';
import { DeviceTypeListingComponent } from './device-type/device-type-listing.component';
import { DeviceDetailComponent } from './device/device-detail.component';
import { DeviceListingComponent } from './device/device-listing.component';
import { TokenDetailComponent } from './token/token-detail.component';
import { TokenListingComponent } from './token/token-listing.component';
import { TriggerDetailComponent } from './trigger/trigger-detail.component';
import { TriggerListingComponent } from './trigger/trigger-listing.component';
import { VariableValueDetailComponent } from './variable-value/variable-value-detail.component';
import { VariableValueListingComponent } from './variable-value/variable-value-listing.component';
import { VariableDetailComponent } from './variable/variable-detail.component';
import { VariableListingComponent } from './variable/variable-listing.component';

export const cmsRoutes: CmsRoute[] = [
	{
		info: {
			icon: "icon-material-outline-business-center",
			link: [],
			title: "Device",
		},
		subs: [
			{
				info: {
					icon: "icon-material-outline-business-center",
					link: [UrlService.INSTANCE.privateCmsIotDeviceType],
					title: "Device Type"
				},
				component: {
					path: "device-type",
					listing: DeviceTypeListingComponent,
					detail: DeviceTypeDetailComponent,
					permissions: ["Device_Types"]
				}
			}, {
				info: {
					icon: "icon-material-outline-business-center",
					link: [UrlService.INSTANCE.privateCmsIotDevice],
					title: "Device"
				},
				component: {
					path: "device",
					listing: DeviceListingComponent,
					detail: DeviceDetailComponent,
					permissions: ["Devices", "Master"]
				}
			}, {
				info: {
					icon: "icon-material-outline-business-center",
					link: [UrlService.INSTANCE.privateCmsIotDeviceAttribute],
					title: "Device Attribute"
				},
				component: {
					path: "device-attribute",
					listing: DeviceAttributeListingComponent,
					detail: DeviceAttributeDetailComponent,
					permissions: ["Device_Attributes", "Master"]
				}
			}
		]
	}, {
		info: {
			icon: "icon-material-outline-business-center",
			link: [UrlService.INSTANCE.privateCmsIotToken],
			title: "Token"
		},
		component: {
			path: "token",
			listing: TokenListingComponent,
			detail: TokenDetailComponent,
			permissions: ["Tokens"]
		}
	}, {
		info: {
			icon: "icon-material-outline-business-center",
			link: [UrlService.INSTANCE.privateCmsIotTrigger],
			title: "Trigger"
		},
		component: {
			path: "trigger",
			listing: TriggerListingComponent,
			detail: TriggerDetailComponent,
			permissions: ["Triggers"]
		}
	}, {
		info: {
			icon: "icon-material-outline-business-center",
			link: [UrlService.INSTANCE.privateCmsIotVariable],
			title: "Variable"
		},
		component: {
			path: "variable",
			listing: VariableListingComponent,
			detail: VariableDetailComponent,
			permissions: ["Variables"]
		}
	}, {
		info: {
			icon: "icon-material-outline-business-center",
			link: [UrlService.INSTANCE.privateCmsIotVariableValue],
			title: "Variable Value"
		},
		component: {
			path: "variable-value",
			listing: VariableValueListingComponent,
			detail: VariableValueDetailComponent,
			permissions: ["Variable_Values"]
		}
	}
]

const parse = (cmsRoutes: CmsRoute[]): Routes => {
	return cmsRoutes.map(e => {
		if (e.subs) return parse(e.subs);
		return [{
			path: e.component.path,
			children: [
				{ path: "", component: e.component.listing, canActivate: [CmsGaurd], data: { permissions: e.component.permissions.map(f => { return { name: f, value: CmsActionEnum.READ }; }) } },
				{ path: "new", component: e.component.detail, canActivate: [CmsGaurd], data: { permissions: e.component.permissions.map(f => { return { name: f, value: CmsActionEnum.CREATE }; }) } },
				{ path: ":id", component: e.component.detail, canActivate: [CmsGaurd], data: { permissions: e.component.permissions.map(f => { return { name: f, value: CmsActionEnum.READ }; }) } },
			]
		}]
	}).reduce((a, b) => a.concat(b), []) as Routes;
}

const routes: Routes = parse(cmsRoutes).concat([
	{ path: "", pathMatch: "full", redirectTo: "user" }
]);

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class IotRoutingModule { };
