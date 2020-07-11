import { Component, OnDestroy, ViewChild } from "@angular/core";
import { MatDatepicker } from '@angular/material/datepicker';
import { MatFormFieldControl } from '@angular/material/form-field';
import * as moment from 'moment';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BaseInputComponent } from '../base-input.component';

@Component({
	selector: "app-input-date",
	templateUrl: "./input-date.component.html",
	styleUrls: ["./input-date.component.scss"],
	providers: [
		{ provide: MatFormFieldControl, useExisting: InputDateComponent }
	]
})
export class InputDateComponent extends BaseInputComponent implements OnDestroy {

	@ViewChild('picker') datePicker: MatDatepicker<Date>;
	mask: any[] = [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];
	subscription: Subscription = new Subscription();

	ngOnInit() {
		super.ngOnInit();

		this.subscription.add(this.inputConfig.formControl.valueChanges.subscribe((t: string) => {
			if (/\d{2}\/\d{2}\/\d{4}/.test(t)) {
				this.datePicker.select(moment(t, environment.dateFormat).toDate());
			}
		}));
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}

}
