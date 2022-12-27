import type { TemplateRef } from '@angular/core';
import { Component, Input, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
})
export class PopupComponent {
  @Input() set popupTemplate(template: TemplateRef<unknown>) {
    this.viewContainer.clear();
    this.viewContainer.createEmbeddedView(template);
  }
  @ViewChild('viewContainer', { read: ViewContainerRef, static: true })
  private viewContainer!: ViewContainerRef;

  public visible = false;

  toggle() {
    this.visible = !this.visible;
  }
}
