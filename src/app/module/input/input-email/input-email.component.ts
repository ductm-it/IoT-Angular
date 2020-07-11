import { Component } from "@angular/core";
import { MatFormFieldControl } from '@angular/material/form-field';
import { BaseInputComponent } from '../base-input.component';

@Component({
	selector: "app-input-email",
	templateUrl: "./input-email.component.html",
	styleUrls: ["./input-email.component.scss"],
	providers: [
		{ provide: MatFormFieldControl, useExisting: InputEmailComponent }
	]
})
export class InputEmailComponent extends BaseInputComponent {

}
