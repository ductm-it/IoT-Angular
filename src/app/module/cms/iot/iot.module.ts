import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { CmsGaurd } from 'src/app/gaurd/cms.gaurd';
import { EnumPipeModule } from 'src/app/pipe/enum.pipe';
import { LabelPipeModule } from 'src/app/pipe/label.pipe';
import { FormModule } from '../../input/form.module';
import { InputTextModule } from '../../input/input-text/input-text.module';
import { PrivateService } from '../../private/private.service';
import { DeviceAttributeDetailComponent } from './device-attribute/device-attribute-detail.component';
import { DeviceAttributeListingComponent } from './device-attribute/device-attribute-listing.component';
import { DeviceTypeDetailComponent } from './device-type/device-type-detail.component';
import { DeviceTypeListingComponent } from './device-type/device-type-listing.component';
import { DeviceDetailComponent } from './device/device-detail.component';
import { DeviceListingComponent } from './device/device-listing.component';
import { IotRoutingModule } from './iot-routing.module';
import { TokenDetailComponent } from './token/token-detail.component';
import { TokenListingComponent } from './token/token-listing.component';
import { TriggerDetailComponent } from './trigger/trigger-detail.component';
import { TriggerListingComponent } from './trigger/trigger-listing.component';
import { VariableValueDetailComponent } from './variable-value/variable-value-detail.component';
import { VariableValueListingComponent } from './variable-value/variable-value-listing.component';
import { VariableDetailComponent } from './variable/variable-detail.component';
import { VariableListingComponent } from './variable/variable-listing.component';

@NgModule({
	declarations: [
		DeviceTypeListingComponent,
		DeviceTypeDetailComponent,
		DeviceListingComponent,
		DeviceDetailComponent,
		VariableListingComponent,
		VariableDetailComponent,
		TokenListingComponent,
		TokenDetailComponent,
		TriggerListingComponent,
		TriggerDetailComponent,
		VariableValueListingComponent,
		VariableValueDetailComponent,
		DeviceAttributeListingComponent,
		DeviceAttributeDetailComponent,
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
		IotRoutingModule,
		InputTextModule,

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
export class IotModule { };
