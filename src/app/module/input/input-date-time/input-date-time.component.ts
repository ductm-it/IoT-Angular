import { Component } from "@angular/core";
import { MatFormFieldControl } from '@angular/material/form-field';
import { BaseInputComponent } from '../base-input.component';

@Component({
	selector: "app-input-date-time",
	templateUrl: "./input-date-time.component.html",
	styleUrls: ["./input-date-time.component.scss"],
	providers: [
		{ provide: MatFormFieldControl, useExisting: InputDateTimeComponent }
	]
})
export class InputDateTimeComponent extends BaseInputComponent {

	mask: any[] = [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, ':', /\d/, /\d/, ':', /\d/, /\d/];

}
