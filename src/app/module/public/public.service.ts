import { Injectable, Injector } from '@angular/core';
import { ApiService } from '../../service/api.service';

@Injectable()
export class PublicService extends ApiService {

	constructor(protected injector: Injector) {
		super(injector);
	}

}
