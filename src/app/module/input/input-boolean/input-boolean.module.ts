import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { LabelPipeModule } from 'src/app/pipe/label.pipe';
import { InputBooleanComponent } from './input-boolean.component';

@NgModule({
	declarations: [
		InputBooleanComponent
	],
	imports: [
		MatFormFieldModule,
		MatInputModule,
		CommonModule,
		MatIconModule,
		ReactiveFormsModule,
		LabelPipeModule,
		MatCheckboxModule,
		FormsModule,
	],
	exports: [
		InputBooleanComponent
	],
})
export class InputBooleanModule { };
