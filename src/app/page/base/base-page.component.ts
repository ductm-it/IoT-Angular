import { Directive, Injector, OnDestroy } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ToastrService } from 'ngx-toastr';
import { Observable, Subscription } from 'rxjs';
import { BottomPopupComponent, PopupAction } from 'src/app/module/popup/bottom/bottom-popup.component';
import { PrivateService } from 'src/app/module/private/private.service';
import { ErrorService } from 'src/app/service/error.service';

@Directive()
export class BasePageComponent implements OnDestroy {

	protected subscription: Subscription = new Subscription();

	protected toastr: ToastrService;
	protected matBottomSheet: MatBottomSheet;
	protected privateService: PrivateService;
	protected errorService: ErrorService;

	constructor(protected injector: Injector) {
		this.toastr = this.injector.get(ToastrService);
		this.matBottomSheet = this.injector.get(MatBottomSheet);
		this.privateService = this.injector.get(PrivateService);
		this.errorService = this.injector.get(ErrorService);
	}

	confirm(data: { title?: string, options: PopupAction[] }): Observable<Boolean> {
		return new Observable<Boolean>(obs => {
			this.subscription.add(this.matBottomSheet.open(BottomPopupComponent, { data }).afterDismissed().subscribe(t => {
				if (t === true) {
					obs.next(true);
				} else {
					obs.next(false);
				}
			}));
		})
	}

	ngOnDestroy(): void {
		this.subscription.unsubscribe();
	}

}
