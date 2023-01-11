import { Component, Input, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
	selector: 'app-popup-host',
	templateUrl: './popup-host.component.html',
	styleUrls: ['./popup-host.component.less'],
})
export class PopupHostComponent {
	@ViewChild('viewContainer', { read: ViewContainerRef, static: true })
	private viewContainer!: ViewContainerRef;

	@Input() set popupTemplate(template: TemplateRef<unknown>) {
		this.viewContainer.clear();
		if (template) {
			this.viewContainer.createEmbeddedView(template);
		}
	}
}
