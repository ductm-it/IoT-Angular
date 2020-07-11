import { Component, Injector } from "@angular/core";
import { BaseDetailComponent } from 'src/app/module/cms/detail.component';
import { SCREEN } from 'src/app/service/url.service';

@Component({
	selector: "app-device-attribute-detail",
	templateUrl: "../../detail.component.html",
	styleUrls: ["./device-attribute-detail.component.scss"]
})
export class DeviceAttributeDetailComponent extends BaseDetailComponent {

	constructor(protected injector: Injector) {
		super(injector);
	}

	get entityName(): string {
		return SCREEN.PRIVATE_CMS_IOT_DEVICE_ATTRIBUTE;
	}
	get entityRoot(): string {
		return this.urlService.privateCmsIotDeviceAttribute;
	}

}
