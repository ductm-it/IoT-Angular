import { Directive, Injectable, Input, NgModule, OnDestroy, TemplateRef, ViewContainerRef } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { WindowRefService } from '../service/window-ref.service';

@Injectable()
export class ScreenSizeService {

	private resizeSubject: Subject<number>;

	constructor() {
		this.resizeSubject = new Subject();
	}

	get onResize$(): Observable<number> {
		return this.resizeSubject.asObservable();
	}

	onResize(size: number) {
		this.resizeSubject.next(size);
	}

}


@Directive({
	selector: '[screenSize]'
})
export class ScreenSizeDirective implements OnDestroy {

	private subscription: Subscription = new Subscription();

	currentWidth: number;
	size: { min?: number, max?: number };

	constructor(
		private viewContainerRef: ViewContainerRef,
		private templateRef: TemplateRef<any>,
		private screenSizeService: ScreenSizeService,
		private windowRefService: WindowRefService,
	) {
		this.currentWidth = this.windowRefService.nativeWindow.innerWidth;
		this.subscription.add(this.screenSizeService.onResize$.subscribe(size => {
			this.currentWidth = size;
			this.trigger();
		}));
	}

	@Input()
	set screenSize(size: { min?: number, max?: number }) {
		this.size = size;
		this.trigger();
	}

	trigger() {
		this.viewContainerRef.clear();
		if (this.size && (!this.size.min || (this.size.min && this.currentWidth >= this.size.min)) &&
			(!this.size.max || (this.size.max && this.currentWidth <= this.size.max))) {
			this.viewContainerRef.createEmbeddedView(this.templateRef);
		}
	}

	ngOnDestroy(): void {
		this.subscription.unsubscribe();
	}

}

@NgModule({
	declarations: [
		ScreenSizeDirective,
	],
	exports: [
		ScreenSizeDirective,
	]
})
export class ScreenSizeModule {

}
