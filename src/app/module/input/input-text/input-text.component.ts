import { Component } from "@angular/core";
import { MatFormFieldControl } from '@angular/material/form-field';
import { BaseInputComponent } from '../base-input.component';

@Component({
	selector: "app-input-text",
	templateUrl: "./input-text.component.html",
	styleUrls: ["./input-text.component.scss"],
	providers: [
		{ provide: MatFormFieldControl, useExisting: InputTextComponent }
	]
})
export class InputTextComponent extends BaseInputComponent {

}
