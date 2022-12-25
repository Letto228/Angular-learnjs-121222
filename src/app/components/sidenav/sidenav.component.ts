import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import type { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent {
  // @Input() isSidenavOpened = false;

  // @Output() isSidenavOpenedChange = new EventEmitter<boolean>();

  @ViewChild('matDrawer')
  private drawer: MatDrawer | undefined;

  sidenavToggle() {
    this.drawer?.toggle();
  }
}
