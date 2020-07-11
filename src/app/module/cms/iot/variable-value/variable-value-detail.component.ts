import { Component, Injector } from "@angular/core";
import { BaseDetailComponent } from 'src/app/module/cms/detail.component';
import { SCREEN } from 'src/app/service/url.service';

@Component({
	selector: "app-variable-value-detail",
	templateUrl: "../../detail.component.html",
	styleUrls: ["./variable-value-detail.component.scss"]
})
export class VariableValueDetailComponent extends BaseDetailComponent {

	constructor(protected injector: Injector) {
		super(injector);
	}

	get entityName(): string {
		return SCREEN.PRIVATE_CMS_IOT_VARIABLE_VALUE;
	}
	get entityRoot(): string {
		return this.urlService.privateCmsIotVariableValue;
	}

}
