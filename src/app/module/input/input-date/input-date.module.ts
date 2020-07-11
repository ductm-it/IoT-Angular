import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { TextMaskModule } from 'angular2-text-mask';
import { LabelPipeModule } from 'src/app/pipe/label.pipe';
import { InputDateComponent } from './input-date.component';

@NgModule({
	declarations: [
		InputDateComponent
	],
	imports: [
		MatFormFieldModule,
		MatInputModule,
		CommonModule,
		MatIconModule,
		ReactiveFormsModule,
		LabelPipeModule,
		MatDatepickerModule,
		MatNativeDateModule,
		TextMaskModule,
	],
	exports: [
		InputDateComponent
	],
	providers: [
		{ provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
	]
})
export class InputDateModule { };
