import { Component } from "@angular/core";
import { MatFormFieldControl } from '@angular/material/form-field';
import { BaseInputComponent } from '../base-input.component';

@Component({
	selector: "app-input-radio-group",
	templateUrl: "./input-radio-group.component.html",
	styleUrls: ["./input-radio-group.component.scss"],
	providers: [
		{ provide: MatFormFieldControl, useExisting: InputRadioGroupComponent }
	]
})
export class InputRadioGroupComponent extends BaseInputComponent {
	params: string[];

	ngOnInit() {
		super.ngOnInit();
		this.params = this.inputConfig.param && Array.isArray(this.inputConfig.param.param) ? this.inputConfig.param.param : [];
	}

}
