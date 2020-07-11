import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { TextMaskModule } from 'angular2-text-mask';
import { LabelPipeModule } from 'src/app/pipe/label.pipe';
import { InputDateTimeComponent } from './input-date-time.component';

@NgModule({
	declarations: [
		InputDateTimeComponent
	],
	imports: [
		MatFormFieldModule,
		MatInputModule,
		CommonModule,
		MatIconModule,
		ReactiveFormsModule,
		LabelPipeModule,
		TextMaskModule,
	],
	exports: [
		InputDateTimeComponent
	],
})
export class InputDateTimeModule { };
