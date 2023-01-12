import { Component, ViewChild, ElementRef, TemplateRef } from '@angular/core';
import { applicationConfigMock } from './shared/application-config/application-config.mock';
import { PopupComponent } from './shared/popup/popup.component';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.less'],
})
export class AppComponent {
	readonly applicationConfig = applicationConfigMock;
	public popupClass: string = "";

	// isSidenavOpened = false;

	// onMenuClick() {
	// 	this.isSidenavOpened = !this.isSidenavOpened;
	// }

	@ViewChild('popupTemplate', {read: TemplateRef, static: true})
	private popupTemplate: TemplateRef<any> | undefined;

	@ViewChild('popup', {read: PopupComponent, static: true})
	private popup: PopupComponent | undefined;
	
	openPopup() {
		this.popup?.toggle(this.popupTemplate);

		if (!this.popup?.visible) this.popupClass = "empty";
		else this.popupClass = "";
	}
}
