import { Injectable, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Observable, Subject, Subscription } from 'rxjs';

@Injectable()
export class AppService implements OnDestroy {

	private subscription: Subscription = new Subscription();
	private onUpdateTitle: Subject<string> = new Subject();

	constructor(private titleService: Title) {

	}

	get onUpdateTitle$(): Observable<string> {
		return this.onUpdateTitle.asObservable();
	}

	updateTitle(title: string) {
		this.onUpdateTitle.next(title);
		this.titleService.setTitle(title);
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}

}
