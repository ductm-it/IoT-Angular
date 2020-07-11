import { NgModule, Type } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { CmsActionEnum } from 'src/app/enum/cms-action.enum';
import { CmsGaurd } from 'src/app/gaurd/cms.gaurd';
import { UrlService } from 'src/app/service/url.service';
import { IotModule } from './iot/iot.module';
import { RoleDetailComponent } from './role/role-detail.component';
import { RoleListingComponent } from './role/role-listing.component';
import { UserDetailComponent } from './user/user-detail.component';
import { UserListingComponent } from './user/user-listing.component';

export interface CmsRoute {
	info: {
		title: string,
		link: any[],
		icon: string,
		tag?: string
	},
	component?: {
		path: string,
		permissions: string[],
		listing: Type<any>,
		detail?: Type<any>
	},
	subs?: CmsRoute[]
}

export const cmsRoutes: CmsRoute[] = [
	{
		info: {
			icon: "icon-material-outline-supervisor-account",
			link: [],
			title: "Auth",
		},
		subs: [
			{
				info: {
					icon: "icon-feather-user",
					link: [UrlService.INSTANCE.privateCmsUser],
					title: "User",
				},
				component: {
					path: "user",
					listing: UserListingComponent,
					detail: UserDetailComponent,
					permissions: ["Users"]
				}
			}, {
				info: {
					icon: "icon-material-outline-group",
					link: [UrlService.INSTANCE.privateCmsRole],
					title: "Role"
				},
				component: {
					path: "role",
					listing: RoleListingComponent,
					detail: RoleDetailComponent,
					permissions: ["Roles"]
				}
			}
		]
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
	{ path: "", pathMatch: "full", redirectTo: "user" },
	{ path: "iot", loadChildren: () => IotModule }
]);

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class CmsRoutingModule { };
