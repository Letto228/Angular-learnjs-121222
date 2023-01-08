import { Component, Input, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
	selector: 'app-popup-host',
	templateUrl: './popup-host.component.html',
	styleUrls: ['./popup-host.component.less'],
})
export class PopupHostComponent {
	@Input() set popupTemplate(template: TemplateRef<unknown> | undefined) {
		this.popupContainer?.clear();

		if (template) {
			this.popupContainer?.createEmbeddedView(template);
		}
	}
	@ViewChild('popupContainer', { read: ViewContainerRef, static: true })
	private popupContainer: ViewContainerRef | undefined;
}
