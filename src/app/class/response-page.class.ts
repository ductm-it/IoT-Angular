export interface EntityInterface {

	id: string;
	[key: string]: any;

}

export interface ResponsePage {

	pageIndex: number;
	pageSize: number;
	records: EntityInterface[];
	totalPage: number;
	totalRecord: number;

}
