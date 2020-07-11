import { Component, Injector } from "@angular/core";
import { BaseDetailComponent } from 'src/app/module/cms/detail.component';
import { SCREEN } from 'src/app/service/url.service';

@Component({
	selector: "app-device-type-detail",
	templateUrl: "../../detail.component.html",
	styleUrls: ["./device-type-detail.component.scss"]
})
export class DeviceTypeDetailComponent extends BaseDetailComponent {

	constructor(protected injector: Injector) {
		super(injector);
	}

	get entityName(): string {
		return SCREEN.PRIVATE_CMS_IOT_DEVICE_TYPE;
	}
	get entityRoot(): string {
		return this.urlService.privateCmsIotDeviceType;
	}

}
