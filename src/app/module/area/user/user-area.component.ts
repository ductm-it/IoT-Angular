import { Component, Injector } from "@angular/core";
import { UserService } from 'src/app/service/user.service';
import { environment } from 'src/environments/environment';
import { UrlService } from 'src/app/service/url.service';


@Component({
	selector: "app-user-area",
	templateUrl: "./user-area.component.html",
	styleUrls: ["./user-area.component.scss"]
})
export class UserAreaComponent {

	userService: UserService;
	urlService: UrlService;

	constructor(protected injector: Injector) {
		this.userService = this.injector.get(UserService);
		this.urlService = this.injector.get(UrlService);
	}

	get avatarUrl(): string {
		if (!this.userService.info) return null;
		if (this.userService.info.avatar.startsWith("http")) return this.userService.info.avatar;
		return environment.apiUrl + "/api/v1.0/user/file/" + this.userService.info.avatar;
	}

}
