import { Component, Input, OnChanges, SimpleChanges, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
	selector: 'app-popup-host',
	templateUrl: './popup-host.component.html',
	styleUrls: ['./popup-host.component.less'],
})
export class PopupHostComponent implements OnChanges {
	/*@Input() set popupTemplate(template: TemplateRef<unknown> | undefined) {
		this.popupContainer?.clear();

		if (template) {
			this.popupContainer?.createEmbeddedView(template);
		}
	}*/
	@Input() popupTemplate: TemplateRef<unknown> | undefined;

	@ViewChild('popupContainer', { read: ViewContainerRef, static: true })
	private popupContainer: ViewContainerRef | undefined;

	ngOnChanges({ popupTemplate }: SimpleChanges) {
		this.popupContainer?.clear();

		if (popupTemplate && this.popupTemplate) {
			this.popupContainer?.createEmbeddedView(this.popupTemplate);
		}
	}
}
