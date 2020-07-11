import { Pipe, PipeTransform, NgModule } from '@angular/core';


@Pipe({ name: 'enum' })
export class EnumPipe implements PipeTransform {

	transform(str: string): string {
		return str ? str.replace("_", " ") : "";
	}

}

@NgModule({
	declarations: [EnumPipe],
	imports: [],
	exports: [EnumPipe],
})
export class EnumPipeModule { }
