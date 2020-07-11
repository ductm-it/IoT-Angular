
import { Component } from "@angular/core";
import { Plan } from './plan-box/plan-box.component';

export interface PlanType {
	name: string;
	value: string;
	tag?: string;
}

export interface MemberShip {
	types: PlanType[];
	plans: Plan[];
}

@Component({
	selector: "app-plan-area",
	templateUrl: "./plan-area.component.html",
	styleUrls: ["./plan-area.component.scss"]
})
export class PlanAreaComponent {

	public planType: string = "monthly";
	// @Input()
	public memberShip: MemberShip = {
		types: [{
			name: "Billed Monthly",
			value: "monthly"
		}, {
			name: "Billed Yearly",
			tag: "Save 10%",
			value: "yearly"
		}],
		plans: [
			{
				action: {
					click: (a) => console.log(a),
					name: "Buy now"
				},
				description: "One time fee for one listing or task highlighted in search results.",
				features: [
					"1 Listing",
					"30 Days Visibility",
					"Highlighted in Search Results"
				],
				prices: [
					{
						prefix: "$",
						unit: "monthly",
						type: "monthly",
						value: 19
					}, {
						prefix: "$",
						unit: "yearly",
						type: "yearly",
						value: 205
					}
				],
				title: "Basic Plan"
			}, {
				action: {
					click: (a) => console.log(a),
					name: "Buy now"
				},
				description: "One time fee for one listing or task highlighted in search results.",
				features: [
					"5 Listing",
					"60 Days Visibility",
					"Highlighted in Search Results"
				],
				prices: [
					{
						prefix: "$",
						unit: "monthly",
						type: "monthly",
						value: 49
					}, {
						prefix: "$",
						unit: "yearly",
						type: "yearly",
						value: 529
					}
				],
				title: "Standard Plan",
				recommendation: true,
				recommendationText: "Recommended"
			}, {
				action: {
					click: (a) => console.log(a),
					name: "Buy now"
				},
				description: "One time fee for one listing or task highlighted in search results.",
				features: [
					"Unlimited Listings",
					"90 Days Visibility",
					"Highlighted in Search Results"
				],
				prices: [
					{
						prefix: "$",
						unit: "monthly",
						type: "monthly",
						value: 99
					}, {
						prefix: "$",
						unit: "yearly",
						type: "yearly",
						value: 1069
					}
				],
				title: "Extended Plan"
			}
		]
	};

	typeChange(type: PlanType) {
		console.log(type, this.planType);
	}

}
