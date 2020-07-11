
import { Component, Input } from "@angular/core";

export interface Price {
	prefix?: string;
	value: number;
	suffix?: string;
	unit: string;
	type: string;
}

export interface Plan {
	title: string;
	description: string;
	recommendation?: boolean;
	recommendationText?: string;
	prices: Price[];
	features: string[];

	action: {
		name: string;
		click: (plan: Plan) => void;
	};
	[key: string]: any;
}

@Component({
	selector: "app-plan-box",
	templateUrl: "./plan-box.component.html",
	styleUrls: ["./plan-box.component.scss"]
})
export class PlanBoxComponent {

	@Input()
	public plan: Plan;
	private _planType: string;

	@Input()
	set planType(planType: string) {
		this._planType = planType;
	}

	get planType() {
		return this._planType;
	}

}
