import { Component, Input, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
	selector: 'app-popup-host',
	templateUrl: './popup-host.component.html',
	styleUrls: ['./popup-host.component.less'],
})
export class PopupHostComponent {
	@Input() set popupTemplate(viewContainer: TemplateRef<unknown | undefined>) {
		this.viewContainer?.clear();
		this.viewContainer?.createEmbeddedView(viewContainer);
	}

	@ViewChild('template', { read: ViewContainerRef, static: true })
	private viewContainer!: ViewContainerRef;
}
