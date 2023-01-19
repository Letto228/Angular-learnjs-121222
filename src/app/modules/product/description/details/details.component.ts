import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'app-details',
	templateUrl: './details.component.html',
	styleUrls: ['./details.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailsComponent {}
