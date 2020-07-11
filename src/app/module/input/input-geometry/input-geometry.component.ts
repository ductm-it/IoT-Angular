import { Component } from "@angular/core";
import { MatFormFieldControl } from '@angular/material/form-field';
import { BaseInputComponent } from '../base-input.component';

@Component({
	selector: "app-input-geometry",
	templateUrl: "./input-geometry.component.html",
	styleUrls: ["./input-geometry.component.scss"],
	providers: [
		{ provide: MatFormFieldControl, useExisting: InputGeometryComponent }
	]
})
export class InputGeometryComponent extends BaseInputComponent {

}
