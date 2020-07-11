import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { LabelPipeModule } from 'src/app/pipe/label.pipe';
import { SecurePipeModule } from 'src/app/pipe/secure.pipe';
import { InputImageComponent } from './input-image.component';
import { InputImageService } from './input-image.service';

@NgModule({
	declarations: [
		InputImageComponent
	],
	imports: [
		MatFormFieldModule,
		MatInputModule,
		CommonModule,
		MatIconModule,
		MatProgressBarModule,
		ReactiveFormsModule,
		LabelPipeModule,
		SecurePipeModule,
	],
	exports: [
		InputImageComponent
	],
	providers: [
		InputImageService
	]
})
export class InputImageModule { };
