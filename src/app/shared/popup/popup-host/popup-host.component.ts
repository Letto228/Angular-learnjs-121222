import {
	AfterViewInit,
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
export class PopupHostComponent implements OnChanges, AfterViewInit {
	/*@Input() set popupTemplate(template: TemplateRef<unknown> | undefined) {
		this.popupContainer?.clear();

		if (template) {
			this.popupContainer?.createEmbeddedView(template);
		}
	}*/
	@Input() popupTemplate: TemplateRef<unknown> | undefined;

	@ViewChild('popupContainer', { read: ViewContainerRef, static: true })
	private popupContainer: ViewContainerRef | undefined;

	private hostDisplay: string | undefined = 'none';
	@HostBinding('style.display') get getHostDisplay() {
		return this.hostDisplay;
	}

	// @HostBinding('style')
	// private hostStyle: string = 'display: none';

	ngOnChanges({ popupTemplate }: SimpleChanges) {
		if (popupTemplate && this.popupTemplate) {
			this.popupContainer?.createEmbeddedView(this.popupTemplate);
		}
		this.hostDisplay = this.popupContainer?.length !== 0 ? 'block' : 'none';

		// const popupStyle = 'display: block;position: absolute;left: 0;top: 0;width: 80%;height: 80%;text-align: center;z-index: 1000;margin: 10%;background: white;';
		// this.hostStyle = this.popupContainer?.length !== 0 ? popupStyle : 'display: none';
	}

	ngAfterViewInit() {
		// Решение для @ViewChild со свойством static: false
		/*this.popupContainer?.clear();
		if (this.popupTemplate) {
			this.popupContainer?.createEmbeddedView(this.popupTemplate);
		}
		setTimeout(() => {
			this.hostDisplay = this.popupContainer?.length !== 0 ? 'block' : 'none';
		}, 50);*/
	}
}
