import { Component, HostBinding, Input, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
	selector: 'app-popup-host',
	templateUrl: './popup-host.component.html',
	styleUrls: ['./popup-host.component.less'],
})
export class PopupHostComponent {
	@Input() set popupTemplate(template: TemplateRef<unknown>) {
		this.viewContainer?.clear();
		this.viewContainer?.createEmbeddedView(template);
	}

	@HostBinding('class.opened') private opened = false;

	@ViewChild('viewContainer', { read: ViewContainerRef, static: true })
	private viewContainer!: ViewContainerRef;

	public toggleOpened() {
		this.opened = !this.opened;
	}
}
