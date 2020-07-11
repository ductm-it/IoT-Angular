import { Component } from "@angular/core";
import { MatFormFieldControl } from '@angular/material/form-field';
import { BaseInputComponent } from '../base-input.component';

@Component({
	selector: "app-input-password",
	templateUrl: "./input-password.component.html",
	styleUrls: ["./input-password.component.scss"],
	providers: [
		{ provide: MatFormFieldControl, useExisting: InputPasswordComponent }
	]
})
export class InputPasswordComponent extends BaseInputComponent {

}
