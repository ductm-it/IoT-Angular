import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { TextMaskModule } from 'angular2-text-mask';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { LabelPipeModule } from 'src/app/pipe/label.pipe';
import { InputDateRangeComponent } from './input-date-range.component';

@NgModule({
	declarations: [
		InputDateRangeComponent
	],
	imports: [
		MatFormFieldModule,
		MatInputModule,
		CommonModule,
		MatIconModule,
		ReactiveFormsModule,
		LabelPipeModule,
		TextMaskModule,
		NgxDaterangepickerMd.forRoot()
	],
	exports: [
		InputDateRangeComponent
	],
})
export class InputDateRangeModule { };
