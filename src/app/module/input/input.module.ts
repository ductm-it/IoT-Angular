import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { InputBooleanModule } from './input-boolean/input-boolean.module';
import { InputDateRangeModule } from './input-date-range/input-date-range.module';
import { InputDateTimeRangeModule } from './input-date-time-range/input-date-time-range.module';
import { InputDateTimeModule } from './input-date-time/input-date-time.module';
import { InputDateModule } from './input-date/input-date.module';
import { InputDecimalModule } from './input-decimal/input-decimal.module';
import { InputEmailModule } from './input-email/input-email.module';
import { InputFileModule } from './input-file/input-file.module';
import { InputGeometryModule } from './input-geometry/input-geometry.module';
import { InputImageModule } from './input-image/input-image.module';
import { InputNumberModule } from './input-number/input-number.module';
import { InputPasswordModule } from './input-password/input-password.module';
import { InputPhoneModule } from './input-phone/input-phone.module';
import { InputRadioGroupFormModule } from './input-radio-group-form/input-radio-group-form.module';
import { InputRadioGroupModule } from './input-radio-group/input-radio-group.module';
import { InputSelectFromEnumModule } from './input-select-from-enum/input-select-from-enum.module';
import { InputSelectFromTableModule } from './input-select-from-table/input-select-from-table.module';
import { InputSelectFromUrlModule } from './input-select-from-url/input-select-from-url.module';
import { InputSelectStaticModule } from './input-select-static/input-select-static.module';
import { InputStringModule } from './input-string/input-string.module';
import { InputTextModule } from './input-text/input-text.module';
import { InputUserRoleModule } from './input-user-role/input-user-role.module';
import { InputUsernameModule } from './input-username/input-username.module';
import { InputService } from './input.service';

@NgModule({
	declarations: [
	],
	imports: [
		CommonModule,
		MatFormFieldModule,
		ReactiveFormsModule,
		InputNumberModule,
		InputPasswordModule,
		InputSelectFromEnumModule,
		InputTextModule,
		InputEmailModule,
		InputDateModule,
		InputFileModule,
		InputImageModule,
		InputPhoneModule,
		InputUsernameModule,
		InputBooleanModule,
		InputDateRangeModule,
		InputDateTimeModule,
		InputDateTimeRangeModule,
		InputDecimalModule,
		InputGeometryModule,
		InputStringModule,
		InputRadioGroupModule,
		InputRadioGroupFormModule,
		InputSelectStaticModule,
		InputSelectFromTableModule,
		InputSelectFromUrlModule,
		InputUserRoleModule,
	],
	exports: [
		InputNumberModule,
		InputPasswordModule,
		InputSelectFromEnumModule,
		InputTextModule,
		InputEmailModule,
		InputDateModule,
		InputFileModule,
		InputImageModule,
		InputPhoneModule,
		InputUsernameModule,
		InputBooleanModule,
		InputDateRangeModule,
		InputDateTimeModule,
		InputDateTimeRangeModule,
		InputDecimalModule,
		InputGeometryModule,
		InputStringModule,
		InputRadioGroupModule,
		InputRadioGroupFormModule,
		InputSelectStaticModule,
		InputSelectFromTableModule,
		InputSelectFromUrlModule,
		InputUserRoleModule,
	],
	providers: [
		InputService,
	]
})
export class InputModule { };
