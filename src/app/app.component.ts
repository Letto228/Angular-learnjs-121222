import { ChangeDetectionStrategy, Component } from '@angular/core';
import { applicationConfigMock } from './shared/application-config/application-config.mock';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [
		{
			provide: 'name',
			useValue: 'AppComponentElementInjector',
		},
	],
})
export class AppComponent {
	readonly applicationConfig = applicationConfigMock;
}
