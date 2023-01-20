import { Component, HostBinding, Input, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
	selector: 'app-popup-host',
	templateUrl: './app-popup-host.component.html',
	styleUrls: ['./app-popup-host.component.less'],
})
export class AppPopupHostComponent {
	@ViewChild('viewContainer', { read: ViewContainerRef, static: true })
	private viewContainer!: ViewContainerRef;

	@HostBinding('class.hidden')
	isHidden = false;

	@Input() set popupTemplate(template: TemplateRef<unknown>) {
		this.viewContainer?.clear();

		if (template) {
			this.viewContainer?.createEmbeddedView(template);
		}
	}

	toggle() {
		this.isHidden = !this.isHidden;
	}
}
