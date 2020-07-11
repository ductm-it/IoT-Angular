import { Injectable, OnDestroy } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Role } from '../directive/role.module';
import { PrivateService } from '../module/private/private.service';
import { UrlService } from '../service/url.service';
import { RoleEntity, UserService } from '../service/user.service';

@Injectable()
export class CmsGaurd implements CanActivate, OnDestroy {

	subscription: Subscription = new Subscription();

	constructor(
		public router: Router,
		private userService: UserService,
		private urlService: UrlService,
		private privateService: PrivateService,
	) { }

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
		const data: { permissions: Role[] } = route.data as any;
		return new Observable<boolean | UrlTree>(obs => {
			this.subscription.add(this.privateService.userRole().subscribe(res => {
				let role: RoleEntity = res.data.role;
				this.userService.role = role;
				obs.next(this.userService.validRole(data.permissions));
			}))
		});
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}

}
