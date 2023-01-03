import {
	Component,
	HostBinding,
	Input,
	OnChanges,
	SimpleChanges,
	TemplateRef,
	ViewChild,
	ViewContainerRef,
} from '@angular/core';

@Component({
	selector: 'app-popup-host',
	templateUrl: './popup-host.component.html',
	styleUrls: ['./popup-host.component.less'],
})
export class PopupHostComponent implements OnChanges {
	@Input() popupTemplate: TemplateRef<unknown> | undefined;

	@HostBinding('class.opened') private opened = false;

	@ViewChild('viewContainer', { read: ViewContainerRef, static: true })
	private viewContainer!: ViewContainerRef;

	ngOnChanges({ popupTemplate }: SimpleChanges) {
		if (popupTemplate) {
			this.updateView();
		}
	}

	public toggleOpened() {
		this.opened = !this.opened;
		this.updateView();
	}

	private updateView() {
		this.opened ? this.open() : this.viewContainer?.clear();
	}

	private open() {
		if (this.viewContainer?.length) {
			this.viewContainer?.clear();
		}

		if (this.popupTemplate) {
			this.viewContainer?.createEmbeddedView(this.popupTemplate);
		}
	}
}
