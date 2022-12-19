import {Component, ViewEncapsulation} from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.less'],
  encapsulation: ViewEncapsulation.Emulated,
  interpolation: ['{{', '}}']
})
export class AppComponent {
	title = 'Angular-learnjs-121222';

}
