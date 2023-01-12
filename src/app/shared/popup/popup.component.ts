import { Component, Input, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.less']
})
export class PopupComponent {
  @Input() set popupTemplate(template: TemplateRef<any> | undefined) {
    this.viewContainer.clear();
    if (template) {
      this.viewContainer.createEmbeddedView(template);
    }
  }
  @ViewChild('viewContainer', { read: ViewContainerRef, static: true })
  private viewContainer!: ViewContainerRef;

  public visible = true;

  toggle(template: TemplateRef<any> | undefined) {
    if (template && !this.visible) {
      this.viewContainer.createEmbeddedView(template);
    } else {
      this.viewContainer.clear();
    }

    this.visible = !this.visible;
  }
}
