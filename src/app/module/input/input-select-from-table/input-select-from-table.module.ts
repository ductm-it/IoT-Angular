import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { LabelPipeModule } from 'src/app/pipe/label.pipe';
import { InputSelectFromTableComponent } from './input-select-from-table.component';
import { InputSelectFromTableService } from './input-select-from-table.service';

@NgModule({
	declarations: [
		InputSelectFromTableComponent
	],
	imports: [
		MatFormFieldModule,
		MatInputModule,
		CommonModule,
		MatIconModule,
		ReactiveFormsModule,
		LabelPipeModule,
		NgxMatSelectSearchModule,
		MatSelectModule,
	],
	exports: [
		InputSelectFromTableComponent
	],
	providers: [
		InputSelectFromTableService
	]
})
export class InputSelectFromTableModule { };
