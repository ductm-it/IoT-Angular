import { Component, ViewChild } from "@angular/core";
import { FormControl } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material/form-field';
import * as moment from 'moment';
import { DaterangepickerDirective } from 'ngx-daterangepicker-material';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BaseInputComponent } from '../base-input.component';

@Component({
	selector: "app-input-date-range",
	templateUrl: "./input-date-range.component.html",
	styleUrls: ["./input-date-range.component.scss"],
	providers: [
		{ provide: MatFormFieldControl, useExisting: InputDateRangeComponent }
	]
})
export class InputDateRangeComponent extends BaseInputComponent {

	@ViewChild(DaterangepickerDirective, { static: true })
	pickerDirective: DaterangepickerDirective;

	selected = {
		startDate: moment('2015-11-18T00:00Z'),
		endDate: moment('2015-11-26T00:00Z'),
	};

	mask: any[] = [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, ' ', '-', ' ', /\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];
	subscription: Subscription = new Subscription();
	textFormControl: FormControl = new FormControl(null, []);
	pickerFormControl: FormControl = new FormControl(null, []);
	dateFormat: string = environment.dateFormat;

	ngOnInit() {
		super.ngOnInit();

		this.subscription.add(this.inputConfig.formControl.valueChanges.subscribe((t: { fromDate: string, toDate: string }) => {
			if (t) {
				this.selected.endDate = moment(t.toDate, this.dateFormat);
				this.selected.startDate = moment(t.fromDate, this.dateFormat);
				this.pickerFormControl.setValue(this.selected, { emitEvent: false, emitModelToViewChange: true });
				this.textFormControl.setValue(`${t.fromDate} - ${t.toDate}`, { emitEvent: false, emitModelToViewChange: true });
			}
		}));

		this.subscription.add(this.textFormControl.valueChanges.subscribe((t: string) => {
			if (/^\d{2}\/\d{2}\/\d{4}\s\-\s\d{2}\/\d{2}\/\d{4}$/.test(t)) {
				const arr = t.split(" - ");
				this.inputConfig.formControl.setValue({
					fromDate: arr[0],
					toDate: arr[1]
				});

				this.selected.endDate = moment(arr[1], this.dateFormat);
				this.selected.startDate = moment(arr[0], this.dateFormat);
				this.pickerFormControl.setValue(this.selected, { emitEvent: false, emitModelToViewChange: true });
			}
		}));

	}

	updateDateRange(e: { startDate: any, endDate: any }): void {
		this.inputConfig.formControl.setValue({
			fromDate: e.startDate.format(this.dateFormat),
			toDate: e.endDate.format(this.dateFormat)
		}, { emitEvent: true });
	}

	open(): void {
		this.pickerDirective.open();
	}

}
