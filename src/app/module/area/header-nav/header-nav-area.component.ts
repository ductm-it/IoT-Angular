import { Component, Injector } from "@angular/core";
import { UrlService } from 'src/app/service/url.service';
import { Nav } from '../mobile-menu/mobile-menu.component';
import { navs } from "../mobile-menu/navs";

@Component({
	selector: "app-header-nav-area",
	templateUrl: "./header-nav-area.component.html",
	styleUrls: ["./header-nav-area.component.scss"]
})
export class HeaderNavAreaComponent {

	urlService: UrlService;
	navs: Nav[] = navs;

	constructor(protected injector: Injector) {
		this.urlService = this.injector.get(UrlService);
	}

}
