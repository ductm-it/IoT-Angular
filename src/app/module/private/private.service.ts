import { HttpEvent, HttpHeaders } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { InputConfigInterface } from '../../class/input-config.class';
import { RequestFilter } from '../../class/request-filter.class';
import { RequestPage } from '../../class/request-page.class';
import { ResponseData } from '../../class/response-data.class';
import { ResponseFilter } from '../../class/response-filter.class';
import { EntityInterface, ResponsePage } from '../../class/response-page.class';
import { UserDetail } from '../../class/user-detail.class';
import { ApiService, RequestOption } from '../../service/api.service';
import { RoleEntity, UserService } from '../../service/user.service';

@Injectable()
export class PrivateService extends ApiService {

	userService: UserService;

	constructor(protected injector: Injector) {
		super(injector);
		this.userService = this.injector.get(UserService);
	}

	getHeader(): HttpHeaders {
		let token = this.userService.token;
		let obj = { 'Content-Type': 'application/json' };
		if (token != null) {
			obj['Authorization'] = 'Bearer ' + token
		}
		let headers = new HttpHeaders(obj);
		return headers;
	}

	get requestOption(): RequestOption {
		return {
			headers: this.getHeader()
		}
	}

	create(entityName: string, entityData: any): Observable<ResponseData<EntityInterface>> {
		return super.post<ResponseData<EntityInterface>>(`/api/v1.0/${entityName}/create`, entityData, this.requestOption);
	}

	delete(entityName: string, id: string): Observable<ResponseData<EntityInterface>> {
		return super._delete<ResponseData<EntityInterface>>(`/api/v1.0/${entityName}/delete/${id}`, this.requestOption);
	}

	filter(entityName: string, requestFilter: RequestFilter): Observable<ResponseData<ResponseFilter[]>> {
		return super.post<ResponseData<ResponseFilter[]>>(`/api/v1.0/${entityName}/filter`, requestFilter, this.requestOption);
	}

	page(entityName: string, requestPage: RequestPage): Observable<ResponseData<ResponsePage>> {
		return super.post<ResponseData<ResponsePage>>(`/api/v1.0/${entityName}/page`, requestPage, this.requestOption);
	}

	read(entityName: string, id: string): Observable<ResponseData<EntityInterface>> {
		return super.get<ResponseData<EntityInterface>>(`/api/v1.0/${entityName}/read/${id}`, this.requestOption);
	}

	uiConfig(entityName: string): Observable<ResponseData<InputConfigInterface[]>> {
		return super.get<ResponseData<InputConfigInterface[]>>(`/api/v1.0/${entityName}/ui-config`, this.requestOption);
	}

	update(entityName: string, id: string, entityData: any): Observable<ResponseData<EntityInterface>> {
		return super.post<ResponseData<EntityInterface>>(`/api/v1.0/${entityName}/update/${id}`, entityData, this.requestOption);
	}

	names(entityName: string, ids: string[]): Observable<ResponseData<ResponseFilter[]>> {
		return super.post<ResponseData<ResponseFilter[]>>(`/api/v1.0/${entityName}/names`, ids, this.requestOption);
	}

	upload(path: string, formData: FormData): Observable<HttpEvent<any>> {
		let obj = {};
		if (this.userService.token) {
			obj['Authorization'] = 'Bearer ' + this.userService.token
		}

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

	profile(): Observable<ResponseData<UserDetail>> {
		return super.get<ResponseData<UserDetail>>(`/api/v1.0/user/profile`, this.requestOption);
	}

	userRole(): Observable<ResponseData<{ [key: string]: any, role: RoleEntity }>> {
		return super.get<ResponseData<{ [key: string]: any, role: RoleEntity }>>(`/api/v1.0/role/current-user-role`, this.requestOption);
	}

}
