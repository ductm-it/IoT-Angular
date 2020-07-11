import { Component } from "@angular/core";
import { MatFormFieldControl } from '@angular/material/form-field';
import { BaseInputComponent } from '../base-input.component';

@Component({
	selector: "app-input-select-from-url",
	templateUrl: "./input-select-from-url.component.html",
	styleUrls: ["./input-select-from-url.component.scss"],
	providers: [
		{ provide: MatFormFieldControl, useExisting: InputSelectFromUrlComponent }
	]
})
export class InputSelectFromUrlComponent extends BaseInputComponent {

}
