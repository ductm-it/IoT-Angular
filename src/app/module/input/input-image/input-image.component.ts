import { HttpEventType } from '@angular/common/http';
import { Component, OnDestroy, ViewChild } from "@angular/core";
import { FormControl } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material/form-field';
import { MatProgressBar } from '@angular/material/progress-bar';
import { Subscription } from 'rxjs';
import { ResponseData } from 'src/app/class/response-data.class';
import { ErrorService } from 'src/app/service/error.service';
import { CommonValidator } from 'src/app/validator/common.validator';
import { environment } from 'src/environments/environment';
import { BaseInputComponent } from '../base-input.component';
import { InputImageService } from './input-image.service';

@Component({
	selector: "app-input-image",
	templateUrl: "./input-image.component.html",
	styleUrls: ["./input-image.component.scss"],
	providers: [
		{ provide: MatFormFieldControl, useExisting: InputImageComponent }
	]
})
export class InputImageComponent extends BaseInputComponent implements OnDestroy {

	subscription: Subscription = new Subscription();
	fileInput: FormControl;
	files: string[];
	progress: number = 0;
	uploading: boolean = false;
	imageUrl: string = null;

	@ViewChild(MatProgressBar) matProgressBar;

	constructor(protected inputImageService: InputImageService, protected errorService: ErrorService) {
		super();
	}

	ngOnInit() {
		super.ngOnInit();
		this.fileInput = new FormControl(null, Array.isArray(this.inputConfig.validators) ? this.inputConfig.validators.map(f => {
			if (CommonValidator[f.type]) return CommonValidator[f.type](f.param, f.message);
			return null;
		}).filter(e => e) : []);

		this.subscription.add(this.inputConfig.formControl.valueChanges.subscribe(value => {
			if (value) {
				this.imageUrl = environment.apiUrl + "/api/v1.0/user/file/" + value;
			}
		}));
	}

	ngOnDestroy(): void {
		this.subscription.unsubscribe();
	}

	uploadFile(file: File) {
		const formData: FormData = new FormData();
		formData.append("file", file);
		this.progress = 0;
		this.uploading = true;

		this.subscription.add(this.inputImageService.upload("/api/v1.0/user/update-avatar", formData).subscribe(event => {
			switch (event.type) {
				case HttpEventType.Sent:
					break;
				case HttpEventType.ResponseHeader:
					break;
				case HttpEventType.UploadProgress:
					this.progress = Math.round(event.loaded / event.total * 100);
					break;
				case HttpEventType.Response:
					this.progress = 0;
					this.uploading = false;
					const res: ResponseData<string> = event.body;
					this.inputConfig.formControl.setValue(res.data, { emitEvent: true });
					break;

			}
		}, err => {
			this.errorService.log(err);
			this.uploading = false;
		}));
	}

	fileChanged(event: Event) {
		const fileList = (event.target as HTMLInputElement).files as FileList;
		if (fileList.length == 1) {
			this.files = [fileList[0].name];
			this.uploadFile(fileList[0]);
		}
	}

}
