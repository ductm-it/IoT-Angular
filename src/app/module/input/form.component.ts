import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { InputConfig, InputConfigInterface } from 'src/app/class/input-config.class';
import { CommonValidator } from 'src/app/validator/common.validator';

@Component({
	selector: "app-form-component",
	templateUrl: "./form.component.html",
	styleUrls: ["./form.component.scss"]
})
export class FormComponent implements OnInit {

	inputConfigs: InputConfig[];

	@Input() inputs: InputConfigInterface[];
	@Input() formGroup: FormGroup;

	ngOnInit(): void {
		this.inputConfigs = this.inputs.map(e => {
			return new InputConfig({
				...e, formControl: new FormControl(null, Array.isArray(e.validators) ? e.validators.map(f => {
					if (CommonValidator[f.type]) return CommonValidator[f.type](f.param, f.message);
					console.log("Please define this validator:", f.type);
					return null;
				}).filter(e => e) : [])
			});
		});
		this.inputConfigs.forEach(t => {
			if (this.formGroup) {
				this.formGroup.addControl(t.name, t.formControl);
			}
			t.formControl.markAsTouched({ onlySelf: true });
		});
	}

}
