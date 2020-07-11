import { Component } from "@angular/core";
import { MatFormFieldControl } from '@angular/material/form-field';
import { BaseInputComponent } from '../base-input.component';

@Component({
	selector: "app-input-file",
	templateUrl: "./input-file.component.html",
	styleUrls: ["./input-file.component.scss"],
	providers: [
		{ provide: MatFormFieldControl, useExisting: InputFileComponent }
	]
})
export class InputFileComponent extends BaseInputComponent {

}
