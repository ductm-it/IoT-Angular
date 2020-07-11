import { Directive, ElementRef, HostListener, NgModule, OnInit } from '@angular/core';


@Directive({
	selector: '[toggleMenuMobile]'
})
export class ToggleMenuMobileDirective implements OnInit {

	menuElement: HTMLElement;
	wrapperElem: HTMLElement;
	htmlElement: HTMLElement;
	status: Boolean = false;

	constructor(
		private elementRef: ElementRef
	) {
		this.menuElement = (this.elementRef.nativeElement as HTMLElement);
	}

	ngOnInit() {
		this.htmlElement = document.getElementsByTagName("html")[0];
		this.wrapperElem = document.getElementById("wrapper");
		if (this.wrapperElem) {
			this.wrapperElem.classList.value = "mm-page mm-slideout";
		}
	}

	toggleHtmlClass() {
		if (this.status) {
			this.htmlElement.classList.value = "";
			document.body.querySelector("nav").classList.remove("mm-opened");
		} else {
			this.htmlElement.classList.value = "mm-opened mm-blocking mm-background mm-opening";
			document.body.querySelector("nav").classList.add("mm-opened");
		}
		this.status = !this.status;
	}

	@HostListener('document:click', ['$event.target'])
	onClick(targetElement: HTMLElement) {
		const clickedMenu: Boolean = this.menuElement.contains(targetElement);
		if (clickedMenu) {
			this.toggleHtmlClass();
		} else {
			const clickedWrapper: Boolean = this.wrapperElem.contains(targetElement);
			if (clickedWrapper) {
				if (this.status) {
					this.toggleHtmlClass();
				}
			}
		}
	}

}

@NgModule({
	declarations: [
		ToggleMenuMobileDirective,
	],
	exports: [
		ToggleMenuMobileDirective,
	]
})
export class ToggleMenuMobileModule {

}
