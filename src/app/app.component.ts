import { Component, HostListener, Injector } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { Message } from '@stomp/stompjs';
import { Subscription } from 'rxjs';
import { ScreenSizeService } from './directive/screen-size.module';
import { AppService } from './service/app.service';
import { ErrorService } from './service/error.service';
import { MessageService } from './service/message.service';
import { UserService } from './service/user.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {

	private subscription: Subscription = new Subscription();
	private screenSizeService: ScreenSizeService;
	private router: Router;
	private userService: UserService;
	private messageService: MessageService;
	private appService: AppService;
	private errorService: ErrorService;

	loading: boolean = false;

	constructor(
		protected injector: Injector,
	) {
		this.screenSizeService = this.injector.get(ScreenSizeService);
		this.userService = this.injector.get(UserService);
		this.router = this.injector.get(Router);
		this.messageService = this.injector.get(MessageService);
		this.appService = this.injector.get(AppService);

		this.router.events.forEach((event) => {
			if (event instanceof NavigationStart) {
				this.loading = true;
			} else if (event instanceof NavigationEnd) {
				this.loading = false;
			} else if (event instanceof NavigationCancel) {
				this.loading = false;
			} else if (event instanceof NavigationError) {
				this.loading = false;
			}
		});

		// this.subscription.add(this.userService.onUpdate$.subscribe(res => {
		// 	if (this.userService.signed) {
		// 		this.subscription.add(this.authApiService.profile().subscribe(res => {
		// 			this.userService.info = res.data;
		// 		}, err => this.errorService.log(err)));
		// 	} else {
		// 		console.log("Signout");
		// 	}
		// }));
		this.userService.fireUpdate();

		this.subscription.add(this.messageService.watch('/event').subscribe((message: Message) => {
			const data: { [key: string]: any } = JSON.parse(message.body);
			console.log(data);
		}));


		this.appService.updateTitle("Hello Louis");
	}

	@HostListener('window:resize', ['$event'])
	onResize(event: any) {
		this.screenSizeService.onResize(event.target.innerWidth);
	}

}
