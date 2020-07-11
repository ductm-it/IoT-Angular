import { Component, Injector } from "@angular/core";
import { BaseDetailComponent } from 'src/app/module/cms/detail.component';
import { SCREEN } from 'src/app/service/url.service';

@Component({
	selector: "app-token-detail",
	templateUrl: "../../detail.component.html",
	styleUrls: ["./token-detail.component.scss"]
})
export class TokenDetailComponent extends BaseDetailComponent {

	constructor(protected injector: Injector) {
		super(injector);
	}

	get entityName(): string {
		return SCREEN.PRIVATE_CMS_IOT_TOKEN;
	}
	get entityRoot(): string {
		return this.urlService.privateCmsIotToken;
	}

}
