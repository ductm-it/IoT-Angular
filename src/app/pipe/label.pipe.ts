import { Pipe, PipeTransform, NgModule } from '@angular/core';

@Pipe({ name: 'label' })
export class LabelPipe implements PipeTransform {

	transform(fieldName: string): string {
		let a = fieldName;
		let b = [];
		a = a.charAt(0).toUpperCase() + a.substring(1);
		while (true) {
			let match = a.match(/[A-Z][a-z]+/)
			if (match) {
				b.push(a.substring(0, match[0].length));
				a = a.substring(match[0].length)
				if (a == "") break;
			} else {
				b.push(a);
				break
			};
		}
		return b.join(' ');
	}

}


@NgModule({
	declarations: [LabelPipe],
	imports: [],
	exports: [LabelPipe],
})
export class LabelPipeModule { }
