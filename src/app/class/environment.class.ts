import { StompConfig } from '@stomp/ng2-stompjs';

export interface Environment {
	production: boolean;
	apiUrl: string;
	dateFormat: string;
	stompConfig: StompConfig;
}
