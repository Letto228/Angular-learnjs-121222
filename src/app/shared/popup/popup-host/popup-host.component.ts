import { Component, Input, OnChanges, SimpleChange, SimpleChanges, ViewChild } from '@angular/core';

@Component({
	selector: 'app-popup-host',
	templateUrl: './popup-host.component.html',
	styleUrls: ['./popup-host.component.less'],
})
export class PopupHostComponent implements OnChanges {
	@Input() popupTemplate: string | undefined;

	@ViewChild('template')
	private template: string | undefined;

	ngOnChanges(popupTemplate: SimpleChanges) {
		if (popupTemplate) {
			console.log(popupTemplate);
		}
	}
}

// немного не понимаю, как нужно показать темплейт(
