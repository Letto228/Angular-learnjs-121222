import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IApplicationConfig } from '../../shared/application-config/application-config.interface';
import { IProduct } from '../../shared/products/product.interface';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.less'],
})
export class HeaderComponent {
	@Input() cart: IProduct[] = [];
	@Input() applicationConfig: IApplicationConfig | undefined;

	@Output() menuClick = new EventEmitter<Event>();

	onMenuClick(event: Event) {
		this.menuClick.emit(event);
	}

	openCart() {
		console.log('open cart');
	}
}
