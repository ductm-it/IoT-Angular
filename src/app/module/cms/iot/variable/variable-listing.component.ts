import { Component, Injector } from '@angular/core';
import { InputConfigInterface } from 'src/app/class/input-config.class';
import { BaseListingComponent, FunctionColumn } from 'src/app/module/cms/listing.component';
import { SCREEN } from 'src/app/service/url.service';


@Component({
	selector: "app-variable-listing",
	templateUrl: "../../listing.component.html",
	styleUrls: ["./variable-listing.component.scss"]
})
export class VariableListingComponent extends BaseListingComponent {

	constructor(protected injector: Injector) {
		super(injector);
	}

	get entityName(): string {
		return SCREEN.PRIVATE_CMS_IOT_VARIABLE;
	}

	get entityRoot(): string {
		return this.urlService.privateCmsIotVariable;
	}

	updateInputs(inputs: InputConfigInterface[]): FunctionColumn[] {
		return super.updateInputs(inputs).concat([
			{
				name: "location",
				type: "Button",
				value: (elem: any) => `${elem.latitude},${elem.longitude}`,
				icon: "location_on"
			}
		]);
	}

}
