import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { FormComponent } from './form.component';
import { InputModule } from './input.module';

@NgModule({
	declarations: [
		FormComponent,
	],
	imports: [
		InputModule,
		CommonModule,
	],
	exports: [
		FormComponent,
	]
})
export class FormModule { };
