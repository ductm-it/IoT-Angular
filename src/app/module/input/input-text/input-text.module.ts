import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { LabelPipeModule } from 'src/app/pipe/label.pipe';
import { InputTextComponent } from './input-text.component';

@NgModule({
	declarations: [
		InputTextComponent
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
		InputTextComponent
	],
})
export class InputTextModule { };
