import { FormControl } from '@angular/forms';
import { ValidatorInterface } from './validator.class';

export enum Appearance {
	Legacy = "legacy",
	Standard = "standard",
	Fill = "fill",
	Outline = "outline"
}

export interface InputConfigInterface {
	classes?: string[];
	appearance?: Appearance;
	matPrefix?: string;
	matSuffix?: string;
	hint?: string;
	placeholder?: string;
	label?: string;
	formControl?: FormControl;
	name?: string;
	type?: string;
	param?: { [key: string]: any };
	validators?: ValidatorInterface[];
}

export class InputConfig {

	classes: string[];
	appearance: Appearance = Appearance.Standard;
	matPrefix: string;
	matSuffix: string;
	hint: string;
	placeholder: string;
	formControl: FormControl;
	name: string;
	type: string;
	param: { [key: string]: any };
	validators: any[];

	constructor(obj: InputConfigInterface) {
		this.classes = obj.classes ? obj.classes : this.classes;
		this.appearance = obj.appearance ? obj.appearance : this.appearance;
		this.matPrefix = obj.matPrefix ? obj.matPrefix : this.matPrefix;
		this.matSuffix = obj.matSuffix ? obj.matSuffix : this.matSuffix;
		this.hint = obj.hint ? obj.hint : this.hint;
		this.placeholder = obj.placeholder ? obj.placeholder : this.placeholder;
		this.formControl = obj.formControl ? obj.formControl : this.formControl;
		this.name = obj.name ? obj.name : this.name;
		this.type = obj.type ? obj.type : this.type;
		this.param = obj.param ? obj.param : this.param;
		this.validators = obj.validators ? obj.validators : this.validators;
	}

	get valid() {
		return this.formControl.valid;
	}


	get invalid() {
		return this.formControl.invalid;
	}

}
