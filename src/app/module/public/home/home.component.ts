import { Component } from "@angular/core";
import { CategoryData } from '../../area/home-category/home-category-area.component';


@Component({
	selector: "app-public-home",
	templateUrl: "./home.component.html",
	styleUrls: ["./home.component.scss"]
})
export class PublicHomeComponent {

	categoryData: CategoryData = {
		title: 'Popular Job Categories', categories: [
			{
				link: "",
				icon: "icon-line-awesome-file-code-o",
				value: "612",
				title: "Web & Software Dev",
				description: "Software Engineer, Web / Mobile Developer & More"
			},
			{
				link: "",
				icon: "icon-line-awesome-cloud-upload",
				value: "113",
				title: "Data Science & Analitycs",
				description: "Data Specialist / Scientist, Data Analyst & More"
			},
			{
				link: "",
				icon: "icon-line-awesome-suitcase",
				value: "186",
				title: "Accounting & Consulting",
				description: "Auditor, Accountant, Fnancial Analyst & More"
			},
			{
				link: "",
				icon: "icon-line-awesome-pencil",
				value: "298",
				title: "Writing & Translations",
				description: "Copywriter, Creative Writer, Translator & More"
			},
			{
				link: "",
				icon: "icon-line-awesome-pie-chart",
				value: "549",
				title: "Sales & Marketing",
				description: "Brand Manager, Marketing Coordinator & More"
			},
			{
				link: "",
				icon: "icon-line-awesome-image",
				value: "873",
				title: "Graphics & Design",
				description: "Creative Director, Web Designer & More"
			},
			{
				link: "",
				icon: "icon-line-awesome-bullhorn",
				value: "125",
				title: "Digital Marketing",
				description: "Darketing Analyst, Social Profile Admin & More"
			},
			{
				link: "",
				icon: "icon-line-awesome-graduation-cap",
				value: "1,000",
				title: "Education & Training",
				description: "Advisor, Coach, Education Coordinator & More"
			}
		]
	}

}
