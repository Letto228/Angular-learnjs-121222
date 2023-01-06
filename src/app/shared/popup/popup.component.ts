import { Component, Input, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.less']
})
export class PopupComponent {
  @Input() set popupTemplate(template: TemplateRef<any>) {
    this.viewContainer.clear();
    if (template) {
      this.viewContainer.createEmbeddedView(template);
    }
  }
  @ViewChild('viewContainer', { read: ViewContainerRef, static: true })
  private viewContainer!: ViewContainerRef;

  public visible = false;

  toggle() {
    this.visible = !this.visible;
  }
}
