import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class ErrorService {

	constructor(private toastrService: ToastrService) { }

	log(err) {
		if (err instanceof HttpErrorResponse) {
			if (err.error) {
				this.toastrService.error(err.error.message);
				if (Array.isArray(err.error.messages)) {
					for (let message of err.error.messages) {
						this.toastrService.error(message);
					}
				}
			} else {
				this.toastrService.error(err.message);
			}
		} else {
			console.log(err);
		}
	}

}
