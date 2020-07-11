import { Component } from "@angular/core";
import { MatFormFieldControl } from '@angular/material/form-field';
import { BaseInputComponent } from '../base-input.component';

@Component({
	selector: "app-input-phone",
	templateUrl: "./input-phone.component.html",
	styleUrls: ["./input-phone.component.scss"],
	providers: [
		{ provide: MatFormFieldControl, useExisting: InputPhoneComponent }
	]
})
export class InputPhoneComponent extends BaseInputComponent {

}
