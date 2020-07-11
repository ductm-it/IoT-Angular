import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { CurrencyMaskModule } from "ng2-currency-mask";
import { LabelPipeModule } from 'src/app/pipe/label.pipe';
import { InputDecimalComponent } from './input-decimal.component';

@NgModule({
	declarations: [
		InputDecimalComponent
	],
	imports: [
		MatFormFieldModule,
		MatInputModule,
		CommonModule,
		MatIconModule,
		ReactiveFormsModule,
		LabelPipeModule,
		CurrencyMaskModule,
	],
	exports: [
		InputDecimalComponent
	],
})
export class InputDecimalModule { };
