import { Component, Injector } from "@angular/core";
import { CmsRoute, cmsRoutes } from 'src/app/module/cms/cms-routing.module';
import { cmsRoutes as iotCmsRoutes } from 'src/app/module/cms/iot/iot-routing.module';
import { UrlService } from 'src/app/service/url.service';

export interface SidebarNav {
	title: string;
	icon: string;
	subs: CmsRoute[];
}

@Component({
	selector: "app-private-sidebar",
	templateUrl: "./sidebar.component.html",
	styleUrls: ["./sidebar.component.scss"]
})
export class PrivateSidebarComponent {

	urlService: UrlService;
	navs: SidebarNav[];

	constructor(protected injector: Injector) {
		this.urlService = this.injector.get(UrlService);
		this.navs = [{
			title: "CMS",
			icon: "icon-material-outline-assessment",
			subs: cmsRoutes
		}, {
			title: "Internet of Things",
			icon: "icon-feather-sunrise",
			subs: iotCmsRoutes
		}]
	}

}
