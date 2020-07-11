import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { EnumPipeModule } from 'src/app/pipe/enum.pipe';
import { LabelPipeModule } from 'src/app/pipe/label.pipe';
import { InputSelectFromEnumComponent } from './input-select-from-enum.component';

@NgModule({
	declarations: [
		InputSelectFromEnumComponent,
	],
	imports: [
		MatFormFieldModule,
		MatInputModule,
		CommonModule,
		MatIconModule,
		ReactiveFormsModule,
		MatSelectModule,
		LabelPipeModule,
		EnumPipeModule,
	],
	exports: [
		InputSelectFromEnumComponent
	],
})
export class InputSelectFromEnumModule { };
