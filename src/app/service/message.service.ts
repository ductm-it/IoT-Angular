import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, Injector, OnDestroy, PLATFORM_ID } from '@angular/core';
import { StompConfig, StompRService, StompState } from '@stomp/ng2-stompjs';
import { IMessage } from '@stomp/stompjs';
import { ToastrService } from 'ngx-toastr';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import * as SockJS from 'sockjs-client';
import { environment } from 'src/environments/environment';

@Injectable()
export class MessageService implements OnDestroy {

	private readonly stompService: StompRService;
	private readonly stompConfig: StompConfig;
	private toastrService: ToastrService;
	private readonly subscription: Subscription = new Subscription()

	constructor(protected injector: Injector, @Inject(PLATFORM_ID) private platformId: Object) {
		this.stompService = this.injector.get(StompRService);
		this.toastrService = this.injector.get(ToastrService);

		if (this.isBrowser) {
			this.stompConfig = {
				...environment.stompConfig,
				// @ts-ignore
				url: () => new SockJS(environment.stompConfig.url)
			};
			this.stompService.config = this.stompConfig;
			this.stompService.initAndConnect();

			this.subscription.add(this.stompService.state
				.pipe(map((state: number) => StompState[state]))
				.subscribe((status: string) => {
					if (status === "CONNECTED") {
						this.toastrService.success(`Websocket: ${status}`);
					} else {
						this.toastrService.info(`Websocket: ${status}`);
					}
				}));
		}
	}

	get isBrowser() {
		return isPlatformBrowser(this.platformId);
	}

	watch(topic: string): Observable<IMessage> {
		if (this.isBrowser) {
			return this.stompService.watch(topic);
		}
		return new Observable<IMessage>(obs => obs.complete());
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}

}
