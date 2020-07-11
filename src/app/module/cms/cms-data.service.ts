import { CollectionViewer } from "@angular/cdk/collections";
import { DataSource } from "@angular/cdk/table";
import { HttpErrorResponse } from '@angular/common/http';
import { Injector } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Observable, Subscription } from "rxjs";
import { RequestPage } from '../../class/request-page.class';
import { ResponseData } from '../../class/response-data.class';
import { EntityInterface, ResponsePage } from '../../class/response-page.class';
import { PrivateService } from '../../module/private/private.service';
import { ErrorService } from '../../service/error.service';

export class CmsDataService implements DataSource<EntityInterface> {

	private subscription: Subscription = new Subscription();
	private itemsSubject = new BehaviorSubject<EntityInterface[]>([]);
	private loadingSubject = new BehaviorSubject<boolean>(false);
	public loading$ = this.loadingSubject.asObservable();
	public total: number = 0;
	protected privateService: PrivateService;
	private alertService: ToastrService;
	private errorService: ErrorService;

	constructor(protected injector: Injector) {
		this.privateService = this.injector.get(PrivateService);
		this.alertService = this.injector.get(ToastrService);
		this.errorService = this.injector.get(ErrorService);
	}

	connect(collectionViewer: CollectionViewer): Observable<EntityInterface[]> {
		return this.itemsSubject.asObservable();
	}

	disconnect(collectionViewer: CollectionViewer): void {
		this.itemsSubject.complete();
		this.loadingSubject.complete();
		this.subscription.unsubscribe();
	}

	getPage(entityName: string, requestPage: RequestPage): Observable<ResponseData<ResponsePage>> {
		return this.privateService.page(entityName, requestPage);
	}

	loadItems(entityName: string, requestPage: RequestPage) {
		this.loadingSubject.next(true);
		this.subscription.add(this.getPage(entityName, requestPage).subscribe(t => {
			this.itemsSubject.next(t.data.records);
			this.total = t.data.totalRecord;
			this.loadingSubject.next(false);
		}, err => {
			this.loadingSubject.next(false);
			this.errorService.log(err);
		}));
	}

	onError(t: HttpErrorResponse) {
		if (t.error === null) {
			this.alertService.warning("Unknow error");
			return;
		}
		if (t.error.status === false) {
			this.alertService.warning(t.error.message);
		} else {
			this.alertService.warning("Something went wrong");
		}
	}

}
