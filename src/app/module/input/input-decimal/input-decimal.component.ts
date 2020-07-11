import { Component } from "@angular/core";
import { MatFormFieldControl } from '@angular/material/form-field';
import { BaseInputComponent } from '../base-input.component';

@Component({
	selector: "app-input-decimal",
	templateUrl: "./input-decimal.component.html",
	styleUrls: ["./input-decimal.component.scss"],
	providers: [
		{ provide: MatFormFieldControl, useExisting: InputDecimalComponent }
	]
})
export class InputDecimalComponent extends BaseInputComponent {

	options: any = {
		prefix: '',
		thousands: ' ',
		precision: 2
	}

}
