import { Component } from "@angular/core";
import { MatFormFieldControl } from '@angular/material/form-field';
import { BaseInputComponent } from '../base-input.component';
import { ResponseFilter } from 'src/app/class/response-filter.class';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
	selector: "app-input-user-role",
	templateUrl: "./input-user-role.component.html",
	styleUrls: ["./input-user-role.component.scss"],
	providers: [
		{ provide: MatFormFieldControl, useExisting: InputUserRoleComponent }
	]
})
export class InputUserRoleComponent extends BaseInputComponent {

	dataSource: any[];
	displayedColumns: string[] = [];
	param: { actions: ResponseFilter[], tables: string[] };

	ngOnInit() {
		super.ngOnInit();

		// @ts-ignore
		this.param = this.inputConfig.param;
		this.displayedColumns = this.param.actions.map(e => e.id);
		this.dataSource = this.param.tables.map(table => {
			return {
				table: table
			}
		});

		console.log(this.inputConfig.formControl);

	}

	onChange(table: string, columnIndex: number, event: MatCheckboxChange) {
		let obj: { [key: string]: number } = {};
		if (this.inputConfig.formControl.value != null) {
			Object.assign(obj, this.inputConfig.formControl.value);
		}
		if (!obj[table]) obj[table] = 0;
		if (event.checked) {
			obj[table] = obj[table] | parseInt(this.param.actions[columnIndex].display);
		} else {
			this.param.actions.forEach(e => {
				if ((parseInt(this.param.actions[columnIndex].display) & parseInt(e.display)) > 0) {
					obj[table] = obj[table] & (~parseInt(e.display));
				}
			});
		}
		this.inputConfig.formControl.setValue(obj, { emitEvent: true });
	}

	checked(table: string, columnIndex: number): boolean {
		if (!this.inputConfig.formControl.value) return false;
		let obj: { [key: string]: number } = this.inputConfig.formControl.value;
		if (!obj) return false;
		if (!obj[table]) return false;

		return (obj[table] & parseInt(this.param.actions[columnIndex].display)) == parseInt(this.param.actions[columnIndex].display);
	}

}
