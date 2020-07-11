import { Component, Injector } from '@angular/core';
import { InputConfigInterface } from 'src/app/class/input-config.class';
import { BaseListingComponent, FunctionColumn } from 'src/app/module/cms/listing.component';
import { SCREEN } from 'src/app/service/url.service';


@Component({
	selector: "app-token-listing",
	templateUrl: "../../listing.component.html",
	styleUrls: ["./token-listing.component.scss"]
})
export class TokenListingComponent extends BaseListingComponent {

	constructor(protected injector: Injector) {
		super(injector);
	}

	get entityName(): string {
		return SCREEN.PRIVATE_CMS_IOT_TOKEN;
	}

	get entityRoot(): string {
		return this.urlService.privateCmsIotToken;
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
