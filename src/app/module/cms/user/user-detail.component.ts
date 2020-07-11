import { Component, Injector } from "@angular/core";
import { BaseDetailComponent } from 'src/app/module/cms/detail.component';
import { SCREEN } from 'src/app/service/url.service';

@Component({
	selector: "app-user-detail",
	templateUrl: "../detail.component.html",
	styleUrls: ["./user-detail.component.scss"]
})
export class UserDetailComponent extends BaseDetailComponent {

	constructor(protected injector: Injector) {
		super(injector);
	}

	get entityName(): string {
		return SCREEN.PRIVATE_CMS_USER;
	}
	get entityRoot(): string {
		return this.urlService.privateCmsUser;
	}

}
