import { Component } from "@angular/core";
import { MatFormFieldControl } from '@angular/material/form-field';
import { BaseInputComponent } from '../base-input.component';

@Component({
	selector: "app-input-string",
	templateUrl: "./input-string.component.html",
	styleUrls: ["./input-string.component.scss"],
	providers: [
		{ provide: MatFormFieldControl, useExisting: InputStringComponent }
	]
})
export class InputStringComponent extends BaseInputComponent {

}
