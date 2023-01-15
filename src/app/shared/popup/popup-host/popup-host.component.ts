import { Component, HostBinding, Input, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
	selector: 'app-popup-host',
	templateUrl: './popup-host.component.html',
	styleUrls: ['./popup-host.component.less'],
})
export class PopupHostComponent {
	@ViewChild('viewContainer', { read: ViewContainerRef, static: true })
	private viewContainer!: ViewContainerRef;

	@Input() set popupTemplate(template: TemplateRef<any | undefined>) {
		if (!this.isViewportClear) {
			this.viewContainer.clear();
		}

		if (template) {
			this.viewContainer.createEmbeddedView(template);
		}

		this.isViewportClear = !this.viewContainer.length;
	}

	@HostBinding('class.empty')
	isViewportClear = true;
}
