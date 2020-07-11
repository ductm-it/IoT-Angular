import { AfterViewInit, Directive, Injector, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, SortDirection } from '@angular/material/sort';
import { merge } from 'rxjs';
import { debounceTime, first, tap } from 'rxjs/operators';
import { Appearance, InputConfig, InputConfigInterface } from 'src/app/class/input-config.class';
import { RequestPage, Sort } from 'src/app/class/request-page.class';
import { EntityInterface } from 'src/app/class/response-page.class';
import { CommonValidator } from 'src/app/validator/common.validator';
import { BaseCmsComponent } from './base-cms.component';
import { CmsDataService } from './cms-data.service';

export class UiControl {
	showFilter: boolean = true;
	showAction: boolean = true;
	showEditButton: boolean = true;
	showDeleteButton: boolean = true;
	showAddButton: boolean = true;
}

export interface FunctionColumn {
	name: string;
	type: string;
	value: (elem: any) => any;

	[key: string]: any;
}

@Directive()
export abstract class BaseListingComponent extends BaseCmsComponent implements OnInit, AfterViewInit {

	uiControl: UiControl = new UiControl();
	inputConfig: InputConfig = new InputConfig({
		name: "filter",
		appearance: Appearance.Standard,
		formControl: new FormControl(null, CommonValidator.FilterValue({ param: "^([a-zA-Z0-9 ]+)$" }, "{com.iot.platform.FilterValue.message}"))
	});

	/**
	 * We will re-order display columns by this order list.
	 * If orders is null, we will use the default display columns,
	 * else if a field is not mentioned in orders, we will hide this field.
	 */
	orders: string[];
	dataSource: CmsDataService;

	inputs: FunctionColumn[];
	displayedColumns: string[];
	requestPage: RequestPage = new RequestPage();
	requestSearch: {
		direction?: SortDirection;
		pageIndex?: string;
		pageSize?: string;
		active?: string;
	};

	@ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
	@ViewChild(MatSort, { static: true }) sort: MatSort;

	constructor(protected injector: Injector) {
		super(injector);
		this.subscription.add(this.activatedRoute.queryParams.pipe(first()).subscribe(t => {
			this.requestSearch = t;
		}));
		this.dataSource = this.getDataSource();
		this.getUiConfig();
	}

	getDataSource() {
		return new CmsDataService(this.injector);
	}

	updateDisplayedColumns(inputs: InputConfigInterface[]): string[] {
		let columns: string[] = this.orders;
		if (this.orders == null) {
			columns = inputs.map(e => e.name);
		}
		if (this.uiControl.showAction) {
			return columns.concat("action");
		}
		return columns;
	}

	updateInputs(inputs: InputConfigInterface[]): FunctionColumn[] {
		return inputs.map(e => {
			const obj: FunctionColumn = {
				name: e.name,
				type: e.type,
				value: (elem: any) => elem[e.name]
			}
			return obj;
		});
	}

	getUiConfig(): void {
		this.subscription.add(this.privateService.uiConfig(this.entityName).subscribe(res => {
			this.inputs = this.updateInputs(res.data);
			this.displayedColumns = this.updateDisplayedColumns(res.data);
		}, err => this.errorService.log(err)));
	}

	ngOnInit(): void {
		this.subscription.add(this.inputConfig.formControl.valueChanges.pipe(debounceTime(250)).subscribe(text => {
			this.requestPage.search = text;
			this.loadPage();
		}));

		this.subscription.add(this.sort.sortChange.subscribe((t: Sort) => {
			this.paginator.pageIndex = 0;
		}));
		this.subscription.add(merge(this.sort.sortChange, this.paginator.page)
			.pipe(
				tap(() => this.loadPage())
			)
			.subscribe());

		if (this.requestSearch) {
			if (this.requestSearch.direction && this.requestSearch.active) {
				this.sort.direction = this.requestSearch.direction;
				this.sort.active = this.requestSearch.active;
			}
			if (this.requestSearch.pageIndex && this.requestSearch.pageSize) {
				this.paginator.pageSize = parseInt(this.requestSearch.pageSize);
				this.paginator.pageIndex = parseInt(this.requestSearch.pageIndex) - 1;
			}
		}
	}

	ngAfterViewInit(): void {
		setTimeout(() => this.loadPage());
	}

	loadPage() {
		this.requestPage.pageSize = this.paginator.pageSize;
		this.requestPage.pageIndex = this.paginator.pageIndex + 1;
		if (this.sort.direction != "") {
			this.requestPage.orders = [{ direction: this.sort.direction, active: this.sort.active }];
		} else {
			this.requestPage.orders = null;
		}
		this.router.navigate([], {
			queryParams: {
				pageSize: this.requestPage.pageSize,
				pageIndex: this.requestPage.pageIndex,
				direction: this.sort.direction,
				active: this.sort.active
			}
		});
		this.dataSource.loadItems(this.entityName, this.requestPage);
	}

	onDelete(id: string) {
		this.subscription.add(this.privateService.delete(this.entityName, id).subscribe((res) => {
			this.toastr.success("Deleted", "Successful");
			this.loadPage();
		}));
	}

	onClickEdit(elemment: EntityInterface): void {
		this.router.navigate([`${this.entityRoot}/` + elemment.id]);
	}

	onClickDelete(elemment: EntityInterface): void {
		this.subscription.add(this.confirm({
			title: "Do you want to delete this record?",
			options: [
				{ message: "Yes", value: true, style: { "background-color": "blue", "color": "white", "font-weight": "bold" } },
				{ message: "Cancel", value: false }
			]
		}).subscribe(flag => {
			if (flag) {
				this.onDelete(elemment.id);
			} else {
				this.toastr.info("Canceled", "Info");
			}
		}));
	}

	onClickAdd(): void {
		this.router.navigate([`${this.entityRoot}/new`]);
	}

}
