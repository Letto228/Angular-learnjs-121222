import { Attribute, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IApplicationConfig } from '../../shared/application-config/application-config.interface';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.less'],
})
export class HeaderComponent {
	@Input() applicationConfig: IApplicationConfig | undefined;

	@Output() menuClick = new EventEmitter<Event>();

	onMenuClick(event: Event) {
		this.menuClick.emit(event);
	}
}
