export interface ResponseData<T> {
	message: string;
	messages: string[];
	status: boolean;
	statusCode: string;
	data: T
}
