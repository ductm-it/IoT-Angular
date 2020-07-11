import { HttpEvent, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService, RequestOption } from 'src/app/service/api.service';

@Injectable()
export class InputImageService extends ApiService {

	upload(path: string, formData: FormData): Observable<HttpEvent<any>> {
		let obj = {};

		const requestOption: RequestOption = {
			headers: new HttpHeaders(obj)
		};
		return super._upload<HttpEvent<any>>(path, formData, {
			...requestOption,
			// @ts-ignore
			observe: 'events',
			reportProgress: true,
		});
	}

}
