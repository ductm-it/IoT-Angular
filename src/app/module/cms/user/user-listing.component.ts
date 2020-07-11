import { Component, Injector } from '@angular/core';
import { InputConfigInterface } from 'src/app/class/input-config.class';
import { BaseListingComponent, FunctionColumn } from 'src/app/module/cms/listing.component';
import { SCREEN } from 'src/app/service/url.service';

@Component({
	selector: "app-user-listing",
	templateUrl: "../listing.component.html",
	styleUrls: ["./user-listing.component.scss"]
})
export class UserListingComponent extends BaseListingComponent {

	constructor(protected injector: Injector) {
		super(injector);
		this.orders = ["username", "fullName", "emailAddress", "phoneNumber", "roleId", "roleEnum", "address", "location", "avatar"];
	}

	get entityName(): string {
		return SCREEN.PRIVATE_CMS_USER;
	}

	get entityRoot(): string {
		return this.urlService.privateCmsUser;
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
