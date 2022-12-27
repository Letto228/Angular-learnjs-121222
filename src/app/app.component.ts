import { Component, ViewChild } from '@angular/core';
import { applicationConfigMock } from './shared/application-config/application-config.mock';
import type { PopupComponent } from './shared/popup/popup.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  readonly applicationConfig = applicationConfigMock;

  @ViewChild('popup')
  private popup: PopupComponent | undefined;
  openPopup() {
    this.popup?.toggle();
  }
}
