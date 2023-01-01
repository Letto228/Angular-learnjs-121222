import { Component, Input, TemplateRef, ViewChild, ViewContainerRef, OnChanges, SimpleChanges } from '@angular/core';

@Component({
	selector: 'app-popup-contaner',
	templateUrl: './popup-contaner.component.html',
	styleUrls: ['./popup-contaner.component.less'],
})
export class PopupContanerComponent implements OnChanges {
	@Input() popupTemplate: TemplateRef<unknown> | undefined;

	@ViewChild('popupContainer', { read: ViewContainerRef, static: true })
	private popupContainer!: ViewContainerRef;

	ngOnChanges({ popupTemplate }: SimpleChanges) {
		if (popupTemplate) {
			this.popupContainer.clear();
			if (this.popupTemplate) {
				this.popupContainer.createEmbeddedView(this.popupTemplate);
			}
		}
	}
}
