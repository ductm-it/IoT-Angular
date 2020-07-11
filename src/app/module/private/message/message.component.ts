import { Component, Injector, OnDestroy } from "@angular/core";
import { Message } from '@stomp/stompjs';
import { Subscription } from 'rxjs';
import { MessageService } from 'src/app/service/message.service';


@Component({
	selector: "app-private-message",
	templateUrl: "./message.component.html",
	styleUrls: ["./message.component.scss"]
})
export class PrivateMessageComponent implements OnDestroy {

	subscription: Subscription = new Subscription();
	messageService: MessageService;

	constructor(protected injector: Injector) {
		this.messageService = this.injector.get(MessageService);
		this.subscription.add(this.messageService.watch('/message').subscribe((message: Message) => {
			const data: { [key: string]: any } = JSON.parse(message.body);
			console.log(data);
		}));
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}

}
