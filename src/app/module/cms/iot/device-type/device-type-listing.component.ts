import { Component, Injector } from '@angular/core';
import { InputConfigInterface } from 'src/app/class/input-config.class';
import { BaseListingComponent, FunctionColumn } from 'src/app/module/cms/listing.component';
import { SCREEN } from 'src/app/service/url.service';


@Component({
	selector: "app-device-type-listing",
	templateUrl: "../../listing.component.html",
	styleUrls: ["./device-type-listing.component.scss"]
})
export class DeviceTypeListingComponent extends BaseListingComponent {

	constructor(protected injector: Injector) {
		super(injector);
	}

	get entityName(): string {
		return SCREEN.PRIVATE_CMS_IOT_DEVICE_TYPE;
	}

	get entityRoot(): string {
		return this.urlService.privateCmsIotDeviceType;
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
