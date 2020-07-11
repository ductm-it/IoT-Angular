import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestFilter } from 'src/app/class/request-filter.class';
import { ResponseData } from 'src/app/class/response-data.class';
import { ResponseFilter } from 'src/app/class/response-filter.class';
import { ApiService } from 'src/app/service/api.service';

@Injectable()
export class InputUsernameService extends ApiService {

	filter(entityName: string, requestFilter: RequestFilter): Observable<ResponseData<ResponseFilter[]>> {
		return super.post<ResponseData<ResponseFilter[]>>(`/api/v1.0/${entityName}/filter`, requestFilter);
	}

}
