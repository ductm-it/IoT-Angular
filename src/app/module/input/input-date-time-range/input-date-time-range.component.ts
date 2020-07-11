import { Component } from "@angular/core";
import { MatFormFieldControl } from '@angular/material/form-field';
import { BaseInputComponent } from '../base-input.component';

@Component({
	selector: "app-input-date-time-range",
	templateUrl: "./input-date-time-range.component.html",
	styleUrls: ["./input-date-time-range.component.scss"],
	providers: [
		{ provide: MatFormFieldControl, useExisting: InputDateTimeRangeComponent }
	]
})
export class InputDateTimeRangeComponent extends BaseInputComponent {

}
