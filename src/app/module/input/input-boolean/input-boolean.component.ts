import { Component } from "@angular/core";
import { MatFormFieldControl } from '@angular/material/form-field';
import { BaseInputComponent } from '../base-input.component';

@Component({
	selector: "app-input-boolean",
	templateUrl: "./input-boolean.component.html",
	styleUrls: ["./input-boolean.component.scss"],
	providers: [
		{ provide: MatFormFieldControl, useExisting: InputBooleanComponent }
	]
})
export class InputBooleanComponent extends BaseInputComponent {

}
