import { Component, ViewChild } from '@angular/core';
import { applicationConfigMock } from './shared/application-config/application-config.mock';
import { ProductsListComponent } from './modules/products-list/products-list.component';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.less'],
})
export class AppComponent {
	readonly applicationConfig = applicationConfigMock;

	// isSidenavOpened = false;

	// onMenuClick() {
	// 	this.isSidenavOpened = !this.isSidenavOpened;
	// }
}
