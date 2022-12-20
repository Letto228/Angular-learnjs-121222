import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  interpolation: ['{{', '}}'],
})
export class AppComponent {
  title = 'Angular-learnjs-121222';
  // window = window;

  onLogValue(event: Event) {
    console.log(event);

    return true;
  }
}
