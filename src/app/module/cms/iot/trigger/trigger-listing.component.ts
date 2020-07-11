import { Component, Injector } from '@angular/core';
import { InputConfigInterface } from 'src/app/class/input-config.class';
import { BaseListingComponent, FunctionColumn } from 'src/app/module/cms/listing.component';
import { SCREEN } from 'src/app/service/url.service';


@Component({
	selector: "app-trigger-listing",
	templateUrl: "../../listing.component.html",
	styleUrls: ["./trigger-listing.component.scss"]
})
export class TriggerListingComponent extends BaseListingComponent {

	constructor(protected injector: Injector) {
		super(injector);
	}

	get entityName(): string {
		return SCREEN.PRIVATE_CMS_IOT_TRIGGER;
	}

	get entityRoot(): string {
		return this.urlService.privateCmsIotTrigger;
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
