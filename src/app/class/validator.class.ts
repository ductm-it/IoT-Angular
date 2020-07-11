export interface ValidatorInterface {
	type: string;
	param: { [key: string]: any };
	message: string;
}
