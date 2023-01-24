import { Component, Input, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
	selector: 'app-popup-host',
	templateUrl: './popup-host.component.html',
	styleUrls: ['./popup-host.component.less'],
})
export class PopupHostComponent {
	@Input() set template(template: TemplateRef<unknown> | undefined) {
		this.popup?.clear();

		if (template) {
			this.popup?.createEmbeddedView(template);
		}
	}

	@ViewChild('popup', { read: ViewContainerRef, static: true })
	private popup: ViewContainerRef | undefined;
}
