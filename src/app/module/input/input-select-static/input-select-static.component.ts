import { Component } from "@angular/core";
import { MatFormFieldControl } from '@angular/material/form-field';
import { BaseInputComponent } from '../base-input.component';

@Component({
	selector: "app-input-select-static",
	templateUrl: "./input-select-static.component.html",
	styleUrls: ["./input-select-static.component.scss"],
	providers: [
		{ provide: MatFormFieldControl, useExisting: InputSelectStaticComponent }
	]
})
export class InputSelectStaticComponent extends BaseInputComponent {

}
