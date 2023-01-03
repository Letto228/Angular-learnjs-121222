import { Component, Input, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
	selector: 'app-popup-host',
	templateUrl: './popup-host.component.html',
})
export class PopupHostComponent {
	@Input() set popupTemplate(template: TemplateRef<unknown>) {
		if (template === undefined) {
			this.viewContainer.clear();
			return;
		}

		this.viewContainer.clear();
		this.viewContainer.createEmbeddedView(template);
	}
	@ViewChild('viewContainer', { read: ViewContainerRef, static: true })
	private viewContainer!: ViewContainerRef;
}
