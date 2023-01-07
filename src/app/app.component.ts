import { Component, TemplateRef, ViewChild } from '@angular/core';
import { applicationConfigMock } from './shared/application-config/application-config.mock';
import { PopupHostComponent } from './shared/popup/popup-host/popup-host/popup-host.component';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.less'],
})
export class AppComponent {
	readonly applicationConfig = applicationConfigMock;

	@ViewChild(PopupHostComponent)
	private popupHost!: PopupHostComponent;

	@ViewChild('templateTwo', { read: TemplateRef<unknown>, static: true })
	private templateTwo!: TemplateRef<unknown>;

	// isSidenavOpened = false;

	// onMenuClick() {
	// 	this.isSidenavOpened = !this.isSidenavOpened;
	// }

	showInfoPopUp() {
		this.popupHost.popupTemplate = this.templateTwo;
	}

	closePopup() {
		this.popupHost?.closePopup();
	}
}
