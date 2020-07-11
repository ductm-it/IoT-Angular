import { EventEmitter, Input, OnInit, Output, Directive } from '@angular/core';
import { InputConfig } from 'src/app/class/input-config.class';

@Directive()
export class BaseInputComponent implements OnInit {

	@Input() inputConfig: InputConfig;
	@Output() change: EventEmitter<any> = new EventEmitter<any>();


	constructor() {

	}

	ngOnInit(): void {

	}

	get errors(): string[] {
		return this.inputConfig.formControl.errors ? Object.values(this.inputConfig.formControl.errors) : [];
	}

}
