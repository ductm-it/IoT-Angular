import { Component, Input } from '@angular/core';
import { navs } from "./navs";

export type Nav = {
	title: string;
	link: string;
	parentIndex?: number;
	listIndex?: number;
	navs?: Nav[];
}

function recursive(t: Nav, _arr: Nav[], parentIndex: number = 0) {
	if (t.navs) {
		_arr.push({
			title: t.title,
			link: undefined,
			listIndex: _arr.length,
			parentIndex: parentIndex,
			navs: t.navs
		});
		const newParentIndex: number = _arr.length - 1;
		t.navs.forEach((a, i) => {
			if (a.navs) {
				a.listIndex = _arr.length;
				recursive(a, _arr, newParentIndex);
			}
		});
	}
}

@Component({
	selector: "app-mobile-menu",
	templateUrl: "./mobile-menu.component.html",
	styleUrls: ["./mobile-menu.component.scss"]
})
export class MobileMenuComponent {

	selected: number = 0;
	_navs: Nav[] = navs;

	constructor() {
		this.navs = navs;
	}

	@Input()
	set navs(navs: Nav[]) {
		if (navs) {
			this._navs = [];
			recursive({ title: "Menu", link: undefined, navs: navs }, this._navs);
		}
	}

	get navs() {
		return this._navs;
	}

}
