import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { LabelPipeModule } from 'src/app/pipe/label.pipe';
import { InputRadioGroupFormComponent } from './input-radio-group-form.component';

@NgModule({
	declarations: [
		InputRadioGroupFormComponent
	],
	imports: [
		MatFormFieldModule,
		MatInputModule,
		CommonModule,
		MatIconModule,
		ReactiveFormsModule,
		LabelPipeModule,
	],
	exports: [
		InputRadioGroupFormComponent
	],
})
export class InputRadioGroupFormModule { };
