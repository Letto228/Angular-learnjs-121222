import { Component, HostBinding, Input, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
	selector: 'app-popup-host',
	templateUrl: './popup-host.component.html',
	styleUrls: ['./popup-host.component.less'],
})
export class PopupHostComponent {
	@Input() set popupTemplate(template: TemplateRef<unknown>) {
		this.popupContainer?.clear();

		if (template) {
			this.popupContainer?.createEmbeddedView(template);
		}
	}

	@HostBinding('style.display') get hostDisplay() {
		if (this.popupContainer?.length !== 0) {
			return 'block';
		}
		return 'none';
	}

	@ViewChild('popupContainer', { read: ViewContainerRef, static: true })
	private popupContainer: ViewContainerRef | undefined;
}
