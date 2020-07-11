import { Component, Injector, OnInit, OnDestroy } from "@angular/core";
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { RequestLogin } from 'src/app/class/request-login.class';
import { ResponseData } from 'src/app/class/response-data.class';
import { ResponseLogin } from 'src/app/class/response-login.class';
import { SystemEnum } from 'src/app/enum/system.enum';
import { ApiService } from 'src/app/service/api.service';
import { ErrorService } from 'src/app/service/error.service';
import { UrlService } from 'src/app/service/url.service';
import { UserService } from 'src/app/service/user.service';
import { CommonValidator } from 'src/app/validator/common.validator';

@Component({
	selector: "app-auth-signin",
	templateUrl: "./signin.component.html",
	styleUrls: ["./signin.component.scss"]
})
export class AuthSigninComponent implements OnDestroy {

	subscription: Subscription = new Subscription();
	urlService: UrlService;
	apiService: ApiService;
	userService: UserService;
	toastService: ToastrService;
	router: Router;
	activatedRoute: ActivatedRoute;
	errorService: ErrorService;
	socialAuthService: SocialAuthService;

	formGroup: FormGroup = new FormGroup({
		username: new FormControl(null, [CommonValidator.Username({ param: "^\\w{3,}$" }, "{com.iot.platform.Username.message}"), CommonValidator.NotNull(null, "{com.iot.platform.NotNull.message}")]),
		password: new FormControl(null, [CommonValidator.Password({ param: "^.{8,}$" }, "{com.iot.platform.Password.message}"), CommonValidator.NotNull(null, "{com.iot.platform.NotNull.message}")]),
	});

	constructor(protected injector: Injector) {
		this.urlService = this.injector.get(UrlService);
		this.apiService = this.injector.get(ApiService);
		this.userService = this.injector.get(UserService);
		this.toastService = this.injector.get(ToastrService);
		this.router = this.injector.get(Router);
		this.activatedRoute = this.injector.get(ActivatedRoute);
		this.errorService = this.injector.get(ErrorService);
		this.socialAuthService = this.injector.get(SocialAuthService);
		this.userService.signout();

		this.subscription.add(this.socialAuthService.authState.subscribe((user) => {
			if (user) {
				this.toastService.success("Login via socail network successful");
				this.subscription.add(this.apiService.post<ResponseData<ResponseLogin>>("/api/v1.0/user/signin-with-social-account", user).subscribe(res => this.onLoginSuccess(res), err => this.errorService.log(err)));
				this.socialAuthService.signOut(true);
			}
		}));
	}

	onLoginSuccess(res) {
		if (res.status) {
			this.userService.token = res.data.token;
			this.router.navigate([this.activatedRoute.snapshot.queryParams[SystemEnum.RETURN_URL] || this.urlService.publicHome]);
		} else {
			console.log(res);
		}
	}

	signInWithGoogle(): void {
		this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
	}

	signInWithFB(): void {
		this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID);
	}

	submit() {
		const requestLogin: RequestLogin = this.formGroup.getRawValue();
		this.subscription.add(this.apiService.post<ResponseData<ResponseLogin>>("/api/v1.0/user/signin", requestLogin).subscribe(res => this.onLoginSuccess(res), err => this.errorService.log(err)));
	}

	get valid(): boolean {
		return this.formGroup.valid;
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}

}
