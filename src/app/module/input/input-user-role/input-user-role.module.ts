import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { LabelPipeModule } from 'src/app/pipe/label.pipe';
import { InputUserRoleComponent } from './input-user-role.component';
import { EnumPipeModule } from 'src/app/pipe/enum.pipe';

@NgModule({
	declarations: [
		InputUserRoleComponent
	],
	imports: [
		MatFormFieldModule,
		MatInputModule,
		CommonModule,
		MatIconModule,
		ReactiveFormsModule,
		LabelPipeModule,
		MatCheckboxModule,
		MatTableModule,
		EnumPipeModule,
	],
	exports: [
		InputUserRoleComponent
	],
})
export class InputUserRoleModule { };
