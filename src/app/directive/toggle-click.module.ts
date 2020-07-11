import { Directive, ElementRef, HostListener, Input, NgModule } from '@angular/core';

@Directive({
	selector: '[toggleClick]'
})
export class ToggleClickDirective {

	private active: boolean = false;
	private _clickActive: string = "active";
	private _clickOutsideToClose: boolean = true;
	private targetHtml: HTMLElement;

	constructor(private _elementRef: ElementRef) { }

	@Input()
	set toggleClick(targetHtml: HTMLElement) {
		this.targetHtml = targetHtml;
	}

	@Input()
	set clickActive(className: string) {
		this._clickActive = className;
	}

	@Input()
	set clickOutsideToClose(clickOutsideToClose: boolean) {
		if (clickOutsideToClose === true || clickOutsideToClose === false) {
			this._clickOutsideToClose = clickOutsideToClose;
		}
	}

	private open() {
		this.targetHtml.classList.add(this._clickActive);
		this.active = true;
	}

	private close() {
		this.targetHtml.classList.remove(this._clickActive);
		this.active = false;
	}

	@HostListener('document:click', ['$event.target'])
	public onClick(targetElement: any) {
		const clickedButton: boolean = this._elementRef.nativeElement.contains(targetElement);
		const clickedInside: boolean = clickedButton || this.targetHtml.contains(targetElement);
		const clickOutsideToClose: boolean = this._clickOutsideToClose;
		const active: boolean = this.active;

		const arr: [boolean, () => void][] = [
			[clickOutsideToClose && clickedInside && !active, () => this.open()],
			[clickOutsideToClose && !clickedInside && active, () => this.close()],
			[!clickOutsideToClose && clickedInside && active, () => this.close()],
			[!clickOutsideToClose && !clickedInside && active, () => this.open()],
			[!clickOutsideToClose && clickedInside && !active, () => this.open()]
		]
		for (let e of arr) {
			if (e[0]) return e[1]();
		}
	}

}


@NgModule({
	declarations: [
		ToggleClickDirective,
	],
	exports: [
		ToggleClickDirective
	]
})
export class ToggleClickModule {

}
