import { Component, Inject } from '@angular/core';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';

export interface PopupAction {
	message: string;
	value: any;
	style?: { [key: string]: any }
}

@Component({
	selector: "bottom-popup.component",
	templateUrl: "./bottom-popup.component.html",
	styleUrls: ["./bottom-popup.component.scss"],
})
export class BottomPopupComponent {

	constructor(private bottomSheetRef: MatBottomSheetRef<BottomPopupComponent>,
		@Inject(MAT_BOTTOM_SHEET_DATA) public data: {
			title: string, options: PopupAction[]
		}
	) {
	}

	close(value: any) {
		this.bottomSheetRef.dismiss(value);
	}

}
