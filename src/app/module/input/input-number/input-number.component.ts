import { Component } from "@angular/core";
import { MatFormFieldControl } from '@angular/material/form-field';
import { BaseInputComponent } from '../base-input.component';

@Component({
	selector: "app-input-number",
	templateUrl: "./input-number.component.html",
	styleUrls: ["./input-number.component.scss"],
	providers: [
		{ provide: MatFormFieldControl, useExisting: InputNumberComponent }
	]
})
export class InputNumberComponent extends BaseInputComponent {

	options: any = {
		prefix: '',
		thousands: ' ',
		precision: 0
	}

}
