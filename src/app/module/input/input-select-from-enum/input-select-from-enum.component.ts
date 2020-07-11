import { Component } from "@angular/core";
import { MatFormFieldControl } from '@angular/material/form-field';
import { BaseInputComponent } from '../base-input.component';

@Component({
	selector: "app-input-select-from-enum",
	templateUrl: "./input-select-from-enum.component.html",
	styleUrls: ["./input-select-from-enum.component.scss"],
	providers: [
		{ provide: MatFormFieldControl, useExisting: InputSelectFromEnumComponent }
	]
})
export class InputSelectFromEnumComponent extends BaseInputComponent {

	params: {
		id: string,
		display: string,
		addition: { [key: string]: any }
	}[];

	ngOnInit() {
		super.ngOnInit();
		this.params = this.inputConfig.param && Array.isArray(this.inputConfig.param.param) ? this.inputConfig.param.param : [];
	}

}
