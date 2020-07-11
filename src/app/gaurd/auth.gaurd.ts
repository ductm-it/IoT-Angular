import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SystemEnum } from '../enum/system.enum';
import { UrlService } from '../service/url.service';
import { UserService } from '../service/user.service';

@Injectable()
export class AuthGaurd implements CanActivate {

	constructor(
		public router: Router,
		private userService: UserService,
		private urlService: UrlService,
	) { }

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
		if (this.userService.signed) {
			return true;
		}
		this.router.navigate([this.urlService.authSignin], { queryParams: { [SystemEnum.RETURN_URL]: state.url } });
		return false;
	}

}
