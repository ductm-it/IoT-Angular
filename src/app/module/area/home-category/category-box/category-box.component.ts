import { Component, Input } from "@angular/core";

export interface Category {
	icon: string;
	value: string | number;
	title: string;
	description: string;
	link: string;
}

@Component({
	selector: "app-category-box",
	templateUrl: "./category-box.component.html",
	styleUrls: ["./category-box.component.scss"]
})
export class CategoryBoxComponent {

	@Input()
	data: Category;

}
