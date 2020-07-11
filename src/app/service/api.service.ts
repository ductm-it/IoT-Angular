import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface RequestOption {
	headers?: HttpHeaders | {
		[header: string]: string | string[];
	};
	observe?: "body";
	params?: HttpParams | {
		[param: string]: string | string[];
	};
	reportProgress?: boolean;
	responseType?: "json";
	withCredentials?: boolean;
}


@Injectable()
export class ApiService {

	apiUrl: string;
	http: HttpClient;

	constructor(protected injector: Injector) {
		this.http = this.injector.get(HttpClient);
		this.apiUrl = environment.apiUrl;
	}

	get<T>(path: string, option?: RequestOption): Observable<T> {
		return this.http.get<T>(this.apiUrl + path, option);
	}

	post<T>(path: string, body: any, option?: RequestOption): Observable<T> {
		return this.http.post<T>(this.apiUrl + path, body, option);
	}

	_delete<T>(path: string, option?: RequestOption): Observable<T> {
		return this.http.delete<T>(this.apiUrl + path, option);
	}

	_upload<T>(path: string, formData: FormData, option?: RequestOption): Observable<T> {
		return this.http.post<T>(this.apiUrl + path, formData, option);
	}

}
