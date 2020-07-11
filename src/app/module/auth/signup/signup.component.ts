import { Component, Injector } from "@angular/core";
import { FormControl, FormGroup } from '@angular/forms';
import { UrlService } from 'src/app/service/url.service';
import { CommonValidator } from 'src/app/validator/common.validator';

@Component({
	selector: "app-auth-signup",
	templateUrl: "./signup.component.html",
	styleUrls: ["./signup.component.scss"]
})
export class AuthSignupComponent {

	urlService: UrlService;

	formGroup: FormGroup = new FormGroup({
		username: new FormControl(null, [CommonValidator.Username({ param: "^\\w{3,}$" }, "{com.iot.platform.Username.message}"), CommonValidator.NotNull(null, "{com.iot.platform.NotNull.message}")]),
		password: new FormControl(null, [CommonValidator.Password({ param: "^.{8,}$" }, "{com.iot.platform.Password.message}"), CommonValidator.NotNull(null, "{com.iot.platform.NotNull.message}")]),
		repeatPassword: new FormControl(null, [CommonValidator.Password({ param: "^.{8,}$" }, "{com.iot.platform.Password.message}"), CommonValidator.NotNull(null, "{com.iot.platform.NotNull.message}")]),
	});

	constructor(protected injector: Injector) {
		this.urlService = this.injector.get(UrlService);
	}

	submit() {
		console.log(this.formGroup.getRawValue());
	}

}
