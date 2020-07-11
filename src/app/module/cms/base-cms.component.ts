import { Injector } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { BasePageComponent } from 'src/app/page/base/base-page.component';
import { UrlService } from 'src/app/service/url.service';

export abstract class BaseCmsComponent extends BasePageComponent {

	router: Router;
	urlService: UrlService;
	paramMap: ParamMap;
	activatedRoute: ActivatedRoute;

	constructor(protected injector: Injector) {
		super(injector);
		this.router = this.injector.get(Router);
		this.urlService = this.injector.get(UrlService);
		this.activatedRoute = this.injector.get(ActivatedRoute);

		this.paramMap = this.activatedRoute.snapshot.paramMap;
	}

	abstract get entityName(): string;
	abstract get entityRoot(): string;

}
