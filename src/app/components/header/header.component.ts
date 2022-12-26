import {
	AfterContentChecked,
	AfterContentInit,
	AfterViewChecked,
	AfterViewInit,
	Attribute,
	Component,
	DoCheck,
	EventEmitter,
	Input,
	OnChanges,
	OnInit,
	Output,
	SimpleChanges,
} from '@angular/core';
import { Subject } from 'rxjs';
import { IApplicationConfig } from '../../shared/application-config/application-config.interface';
import { applicationConfigMock } from '../../shared/application-config/application-config.mock';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.less'],
})
export class HeaderComponent implements OnInit {
	@Input() applicationConfig: IApplicationConfig | undefined;
	@Input() name: string | undefined;

	@Output() menuClick = new EventEmitter<Event>();

	onMenuClick(event: Event) {
		this.menuClick.emit(event);
	}

	constructor(@Attribute('name') private readonly nameAttr: string) {
		console.log(this.nameAttr);
	}

	ngOnInit(): void {
		console.log(this.name);
	}

	// ngOnChanges({applicationConfig}: SimpleChanges) { // const applicationConfig = {...}.applicationConfig
	// 	console.log('ngOnChanges');
	// 	// if (applicationConfig) {
	// 	// 	console.log('applicationConfig changed', applicationConfig);
	// 	// }

	// 	// if (applicationConfig && applicationConfig.currentValue?.title !== applicationConfig.previousValue?.title) {
	// 	// 	console.log('applicationConfig.title changed', applicationConfig);
	// 	// 	console.log(this.applicationConfig === applicationConfig.currentValue);
	// 	// }
	// }

	// onClick() {
	// 	console.log('click');
	// }

	// ngOnInit() {
	// 	console.log('ngOnInit');
	// }

	// ngDoCheck(): void {
	// 	console.log('ngDoCheck');
	// }

	// ngAfterContentInit(): void {
	// 	console.log('ngAfterContentInit');
	// }

	// ngAfterContentChecked(): void {
	// 	console.log('ngAfterContentChecked');
	// }

	// ngAfterViewInit(): void {
	// 	console.log('ngAfterViewInit');
	// }

	// ngAfterViewChecked(): void {
	// 	console.log('ngAfterViewChecked');
	// }
}
