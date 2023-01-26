import { Component, HostBinding, Input, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

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

		if (this.popup?.length !== 0) {
			this.hostDisplay = 'block';
		} else {
			this.hostDisplay = 'none';
		}
	}

	@ViewChild('popup', { read: ViewContainerRef, static: true })
	private popup: ViewContainerRef | undefined;

	@HostBinding('style.display')
	private hostDisplay = 'none';
}
