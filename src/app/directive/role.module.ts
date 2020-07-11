import { Directive, Input, NgModule, TemplateRef, ViewContainerRef } from "@angular/core";
import { UserService } from '../service/user.service';

export interface Role { name: string, value: number }

@Directive({
	selector: "[role]"
})
export class RoleDirective {

	private roles: Role[];
	private status: boolean;

	constructor(
		private userService: UserService,
		private viewContainerRef: ViewContainerRef,
		private templateRef: TemplateRef<any>,
	) {
		this.viewContainerRef.clear();
		this.status = false;
	}

	@Input()
	set role(args: Role[]) {
		this.roles = args;
		this.trigger();
	}

	private trigger() {
		if (this.status === false && this.userService.validRole(this.roles)) {
			this.viewContainerRef.createEmbeddedView(this.templateRef);
			this.status = true;
		} else if (this.status === true && !this.userService.validRole(this.roles)) {
			this.viewContainerRef.clear();
			this.status = false;
		}
	}

}

@NgModule({
	declarations: [
		RoleDirective,
	],
	exports: [
		RoleDirective,
	]
})
export class RoleModule {

}
