import { Component, Injector } from "@angular/core";
import { BaseDetailComponent } from 'src/app/module/cms/detail.component';
import { SCREEN } from 'src/app/service/url.service';

@Component({
	selector: "app-trigger-detail",
	templateUrl: "../../detail.component.html",
	styleUrls: ["./trigger-detail.component.scss"]
})
export class TriggerDetailComponent extends BaseDetailComponent {

	constructor(protected injector: Injector) {
		super(injector);
	}

	get entityName(): string {
		return SCREEN.PRIVATE_CMS_IOT_TRIGGER;
	}
	get entityRoot(): string {
		return this.urlService.privateCmsIotTrigger;
	}

}
