import { Location } from '@angular/common';
import { Injector } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { InputConfigInterface } from 'src/app/class/input-config.class';
import { EntityInterface } from 'src/app/class/response-page.class';
import { BaseCmsComponent } from './base-cms.component';

export abstract class BaseDetailComponent extends BaseCmsComponent {

	formGroup: FormGroup = new FormGroup({});
	inputs: InputConfigInterface[];
	originModel: { [key: string]: any } = {};
	private location: Location;

	constructor(protected injector: Injector) {
		super(injector);
		this.location = this.injector.get(Location);
		this.getUiConfig();
	}

	get isUpdate(): boolean {
		return this.paramMap.has("id");
	}

	get id(): string {
		return this.paramMap.get("id");
	}

	updateModel() {
		if (this.isUpdate) {
			this.subscription.add(this.privateService.read(this.entityName, this.id).subscribe(res => {
				Object.assign(this.originModel, JSON.parse(JSON.stringify(res.data)));
				this.formGroup.patchValue(res.data, { emitEvent: true });
			}, err => this.errorService.log(err)));
		}
	}

	getUiConfig(): void {
		this.subscription.add(this.privateService.uiConfig(this.entityName).subscribe(res => {
			this.inputs = res.data;
			this.updateModel();
		}, err => this.errorService.log(err)));
	}

	afterCreateOrUpdate(model: { [key: string]: any }, resModel: EntityInterface): Observable<any> {
		return new Observable<any>(obs => {
			obs.next();
		});
	}

	onUpdate() {
		const model = Object.assign(JSON.parse(JSON.stringify(this.originModel)), this.formGroup.getRawValue());
		this.subscription.add(this.privateService.update(this.entityName, this.id, model).subscribe(res => {
			this.subscription.add(this.afterCreateOrUpdate(model, res.data).subscribe(_ => {
				this.toastr.success("Updated", "Successful");
				this.goBack();
			}));
		}, err => this.errorService.log(err)));
	}

	onCreate() {
		const model = this.formGroup.getRawValue();
		this.subscription.add(this.privateService.create(this.entityName, model).subscribe(res => {
			this.subscription.add(this.afterCreateOrUpdate(model, res.data).subscribe(_ => {
				this.toastr.success("Created", "Successful");
				this.goBack();
			}));
		}, err => this.errorService.log(err)));
	}

	submit(): void {
		if (this.isUpdate) {
			this.onUpdate();
		} else {
			this.onCreate();
		}
	}

	goBack(): void {
		this.location.back();
	}

}
