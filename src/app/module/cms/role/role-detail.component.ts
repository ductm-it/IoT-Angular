import { Component, Injector } from "@angular/core";
import { BaseDetailComponent } from 'src/app/module/cms/detail.component';
import { SCREEN } from 'src/app/service/url.service';

@Component({
	selector: "app-role-detail",
	templateUrl: "../detail.component.html",
	styleUrls: ["./role-detail.component.scss"]
})
export class RoleDetailComponent extends BaseDetailComponent {

	constructor(protected injector: Injector) {
		super(injector);
	}

	get entityName(): string {
		return SCREEN.PRIVATE_CMS_ROLE;
	}
	get entityRoot(): string {
		return this.urlService.privateCmsRole;
	}

}
