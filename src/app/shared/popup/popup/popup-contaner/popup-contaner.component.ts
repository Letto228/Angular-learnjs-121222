import { Component, Input, TemplateRef, ViewChild, ViewContainerRef, OnInit } from '@angular/core';

@Component({
	selector: 'app-popup-contaner',
	templateUrl: './popup-contaner.component.html',
	styleUrls: ['./popup-contaner.component.less'],
})
export class PopupContanerComponent implements OnInit {
	@Input() popupTemplate: TemplateRef<unknown> | undefined;

	@ViewChild('popupContainer', { read: ViewContainerRef, static: true })
	private popupContainer!: ViewContainerRef;

	ngOnInit() {
		this.popupContainer.clear();
		if (this.popupTemplate) {
			this.popupContainer.createEmbeddedView(this.popupTemplate);
		}
	}
}
