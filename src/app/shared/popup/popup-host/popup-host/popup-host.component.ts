import { Component, HostBinding, Input, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
	selector: 'app-popup-host',
	templateUrl: './popup-host.component.html',
	styleUrls: ['./popup-host.component.less'],
})
export class PopupHostComponent {
	@Input() set popupTemplate(template: TemplateRef<unknown> | undefined) {
		this.viewContainer.clear();
		if (template) {
			this.viewContainer?.createEmbeddedView(template);
		}
	}
	@ViewChild('viewContainer', { read: ViewContainerRef, static: true })
	private viewContainer!: ViewContainerRef;

	@HostBinding('style.display') get display(): string {
		return this.viewContainer.length ? 'block' : 'none';
	}
}
