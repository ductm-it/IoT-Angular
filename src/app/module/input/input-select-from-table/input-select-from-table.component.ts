import { Component } from "@angular/core";
import { FormControl } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material/form-field';
import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { RequestFilter } from 'src/app/class/request-filter.class';
import { ResponseFilter } from 'src/app/class/response-filter.class';
import { PrivateService } from '../../private/private.service';
import { BaseInputComponent } from '../base-input.component';

@Component({
	selector: "app-input-select-from-table",
	templateUrl: "./input-select-from-table.component.html",
	styleUrls: ["./input-select-from-table.component.scss"],
	providers: [
		{ provide: MatFormFieldControl, useExisting: InputSelectFromTableComponent }
	]
})
export class InputSelectFromTableComponent extends BaseInputComponent {

	filterCtrl: FormControl = new FormControl(null, []);
	subscription: Subscription = new Subscription();
	options: ResponseFilter[] = [];
	selectedOptions: ResponseFilter[] = [];
	ref: { [key: string]: ResponseFilter } = {};

	constructor(protected privateService: PrivateService) {
		super();
	}

	ngOnInit() {
		super.ngOnInit();

		this.filter("");
		this.subscription.add(this.filterCtrl.valueChanges.pipe(debounceTime(200)).subscribe(search => {
			this.filter(search);
		}));

		this.subscription.add(this.inputConfig.formControl.valueChanges.subscribe(id => {
			if (id) {
				let ids: string[] = Array.isArray(id) ? id : [id];
				let notFoundIds = ids.filter(e => !this.ref[e]);

				if (notFoundIds.length > 0) {
					this.subscription.add(this.privateService.names(this.inputConfig.param.table, notFoundIds).subscribe(res => {
						res.data.forEach(e => {
							this.ref[e.id] = e;
						});
						this.selectedOptions = [].concat(ids.map(e => this.ref[e]));
					}));
				} else {
					this.selectedOptions = [].concat(ids.map(e => this.ref[e]));
				}
				this.filter(this.filterCtrl.value);
			}
		}));
	}


	filter(search: string) {
		this.subscription.add(this.privateService.filter(this.inputConfig.param.table, new RequestFilter(search, null, this.selectedOptions.map(e => e.id))).subscribe(res => {
			res.data.forEach(e => {
				this.ref[e.id] = e;
			});
			this.options = res.data;
		}));
	}

}
