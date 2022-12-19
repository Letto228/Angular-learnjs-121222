import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent {
readonly imgSrc = 'favicon.ico'
  onLogValue(event: MouseEvent) {
    console.log(event)
  }

}
