import { Component, Input } from "@angular/core";
import { Category } from './category-box/category-box.component';

export interface CategoryData {
	categories: Category[];
	title: string;
}

@Component({
	selector: "app-home-category-area",
	templateUrl: "./home-category-area.component.html",
	styleUrls: ["./home-category-area.component.scss"]
})
export class HomeCategoryAreaComponent {

	@Input()
	data: CategoryData;

}
