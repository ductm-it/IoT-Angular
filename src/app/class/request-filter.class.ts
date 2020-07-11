export class RequestFilter {

	public excludeIds: string[];
	public filter: { [key: string]: any[] };
	public search: string;

	constructor(search?: string, filter?: { [key: string]: any[] }, excludeIds?: string[]) {
		this.excludeIds = excludeIds;
		this.search = search;
		this.filter = filter;
	}

}
