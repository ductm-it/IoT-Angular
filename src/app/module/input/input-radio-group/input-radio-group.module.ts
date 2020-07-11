import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { LabelPipeModule } from 'src/app/pipe/label.pipe';
import { InputRadioGroupComponent } from './input-radio-group.component';

@NgModule({
	declarations: [
		InputRadioGroupComponent
	],
	imports: [
		MatFormFieldModule,
		MatInputModule,
		CommonModule,
		MatIconModule,
		ReactiveFormsModule,
		LabelPipeModule,
		MatRadioModule,
	],
	exports: [
		InputRadioGroupComponent
	],
})
export class InputRadioGroupModule { };
