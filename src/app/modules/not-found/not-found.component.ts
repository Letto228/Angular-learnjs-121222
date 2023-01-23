import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';

@Component({
	selector: 'app-not-found',
	templateUrl: './not-found.component.html',
	styleUrls: ['./not-found.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFoundComponent {
	// constructor(
	// 	@Inject('name') private readonly name: string,
	// ) {
	// 	console.log('NotFoundComponent - ', this.name);
	// }
}
