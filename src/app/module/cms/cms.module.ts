import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { RoleModule } from 'src/app/directive/role.module';
import { CmsGaurd } from 'src/app/gaurd/cms.gaurd';
import { EnumPipeModule } from 'src/app/pipe/enum.pipe';
import { LabelPipeModule } from 'src/app/pipe/label.pipe';
import { FormModule } from '../input/form.module';
import { InputTextModule } from '../input/input-text/input-text.module';
import { PrivateService } from '../private/private.service';
import { CmsRoutingModule } from './cms-routing.module';
import { RoleDetailComponent } from './role/role-detail.component';
import { RoleListingComponent } from './role/role-listing.component';
import { UserDetailComponent } from './user/user-detail.component';
import { UserListingComponent } from './user/user-listing.component';

@NgModule({
	declarations: [
		UserDetailComponent,
		UserListingComponent,
		RoleListingComponent,
		RoleDetailComponent,
	],
	imports: [
		CommonModule,
		ReactiveFormsModule,
		FormsModule,
		MatButtonModule,
		MatTableModule,
		MatPaginatorModule,
		MatSortModule,
		MatIconModule,
		MatProgressSpinnerModule,
		FormModule,
		CmsRoutingModule,
		InputTextModule,
		RoleModule,

		LabelPipeModule,
		EnumPipeModule,
	],
	exports: [

	],
	providers: [
		PrivateService,
		CmsGaurd,
	]
})
export class CmsModule { };
