import { Component, Input, OnChanges, SimpleChanges, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
	selector: 'app-popup-host',
	templateUrl: './popup-host.component.html',
	styleUrls: ['./popup-host.component.less'],
})
export class PopupHostComponent {
	@ViewChild('popupContainer', { read: ViewContainerRef, static: true })
	private popupContainer: ViewContainerRef | undefined;

	@Input() _popupTemplate!: TemplateRef<unknown> | undefined;

	@Input() set popupTemplate(popupTemplate: TemplateRef<unknown>) {
		this._popupTemplate = popupTemplate;
		this.popupContainer?.clear();
		if (popupTemplate !== undefined) {
			this.popupContainer?.createEmbeddedView(this._popupTemplate);
		}
	}

	closePopup() {
		this.popupContainer?.clear();
		this._popupTemplate = undefined;
	}
}

// import { Component, Input, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

// @Component({
//   selector: 'app-popup-host',
//   templateUrl: './popup-host.component.html',
//   styleUrls: ['./popup-host.component.less']
// })
// export class PopupHostComponent {

//   @ViewChild('popupContainer', { read: ViewContainerRef, static: true })
// 	private popupContainer!: ViewContainerRef;

//   @ViewChild('popupContainerWrapperContainer', { read: ViewContainerRef, static: true })
// 	private popupContainerWrapperContainer!: ViewContainerRef;

//   private popupContainerWrapper: TemplateRef<unknown> | undefined;

// 	@Input() set popupTemplate(popupTemplate: TemplateRef<unknown>) {
//     if (this.popupContainerWrapper) {
//     // this.popupContainerWrapperContainer.clear();
//     // this.popupContainerWrapperContainer.createEmbeddedView(this.popupContainerWrapper);
// 		// this.popupContainer?.clear();
//     console.log(popupTemplate);
// 		this.popupContainer?.createEmbeddedView(popupTemplate);
//     }
// 	};

//   closePopup() {
//     this.popupContainer?.clear();
//   }
// }
