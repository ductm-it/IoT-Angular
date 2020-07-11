import { Component } from "@angular/core";
import { FormControl, ValidationErrors } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material/form-field';
import { Observable } from 'rxjs';
import { first, map } from 'rxjs/operators';
import { RequestFilter } from 'src/app/class/request-filter.class';
import { BaseInputComponent } from '../base-input.component';
import { InputService } from '../input.service';
import { InputUsernameService } from './input-username.service';

@Component({
	selector: "app-input-username",
	templateUrl: "./input-username.component.html",
	styleUrls: ["./input-username.component.scss"],
	providers: [
		{ provide: MatFormFieldControl, useExisting: InputUsernameComponent }
	]
})
export class InputUsernameComponent extends BaseInputComponent {

	constructor(protected inputService: InputUsernameService) {
		super();
	}

	username(param: { url: string }, message: string) {
		return (formControl: FormControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
			return this.inputService.filter("user", new RequestFilter(formControl.value)).pipe(map(res => res.data.length > 0 ? { username: "{com.iot.platform.Username.message}" } : null)).pipe(first());
		}
	}

	ngOnInit() {
		super.ngOnInit();
		this.inputConfig.formControl.setAsyncValidators(this.username({ url: "" }, ""));
	}

}

