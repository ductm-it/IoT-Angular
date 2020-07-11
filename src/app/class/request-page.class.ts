import { RequestFilter } from './request-filter.class';

export interface Sort {
	active: string, direction: "asc" | "desc" | ""
}

export class RequestPage extends RequestFilter {

	public pageIndex: number;
	public pageSize: number;
	public orders: Sort[];

	constructor(pageIndex?: number, pageSize?: number, search?: string, filter?: { [key: string]: any[] }, excludeIds?: string[]) {
		super(search, filter, excludeIds);
		this.pageIndex = pageIndex;
		this.pageSize = pageSize;
	}

}
