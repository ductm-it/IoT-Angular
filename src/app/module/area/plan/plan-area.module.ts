
import { NgModule } from "@angular/core";
import { PlanAreaComponent } from './plan-area.component';
import { PlanBoxComponent } from './plan-box/plan-box.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
	declarations: [
		PlanAreaComponent,
		PlanBoxComponent,
	],
	imports: [
		CommonModule,
		FormsModule,
	],
	exports: [
		PlanAreaComponent
	]
})
export class PlanAreaModule {

}
