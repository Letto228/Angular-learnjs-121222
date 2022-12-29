import { Component, Input, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
	selector: 'app-popup-host',
	templateUrl: './popup-host.component.html',
	styleUrls: ['./popup-host.component.less'],
})
export class PopupHostComponent {
	@Input() set popupTemplate(template: TemplateRef<unknown>) {
		this.template?.clear();
		this.template?.createEmbeddedView(template);
	}

	@ViewChild('template', { read: ViewContainerRef, static: true })
	private template!: ViewContainerRef;
}
