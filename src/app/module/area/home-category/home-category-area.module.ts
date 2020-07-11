import { NgModule } from "@angular/core";
import { HomeCategoryAreaComponent } from './home-category-area.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CategoryBoxComponent } from './category-box/category-box.component';

@NgModule({
	declarations: [
		HomeCategoryAreaComponent,
		CategoryBoxComponent,
	],
	imports: [
		CommonModule,
		RouterModule,
	],
	exports: [
		HomeCategoryAreaComponent
	]
})
export class HomeCategoryAreaModule {

}
