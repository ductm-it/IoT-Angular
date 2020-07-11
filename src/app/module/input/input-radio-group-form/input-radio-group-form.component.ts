import { Component } from "@angular/core";
import { MatFormFieldControl } from '@angular/material/form-field';
import { BaseInputComponent } from '../base-input.component';

@Component({
	selector: "app-input-radio-group-form",
	templateUrl: "./input-radio-group-form.component.html",
	styleUrls: ["./input-radio-group-form.component.scss"],
	providers: [
		{ provide: MatFormFieldControl, useExisting: InputRadioGroupFormComponent }
	]
})
export class InputRadioGroupFormComponent extends BaseInputComponent {

}
