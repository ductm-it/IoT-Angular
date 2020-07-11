import { Component, Injector } from "@angular/core";
import { BaseDetailComponent } from 'src/app/module/cms/detail.component';
import { SCREEN } from 'src/app/service/url.service';

@Component({
	selector: "app-variable-detail",
	templateUrl: "../../detail.component.html",
	styleUrls: ["./variable-detail.component.scss"]
})
export class VariableDetailComponent extends BaseDetailComponent {

	constructor(protected injector: Injector) {
		super(injector);
	}

	get entityName(): string {
		return SCREEN.PRIVATE_CMS_IOT_VARIABLE;
	}
	get entityRoot(): string {
		return this.urlService.privateCmsIotVariable;
	}

}
